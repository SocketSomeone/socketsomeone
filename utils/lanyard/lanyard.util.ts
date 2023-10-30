import {Event, Op} from "./enums";
import {EventEmitter} from "events";
import {LanyardPresence} from "./interfaces";

interface SocketData extends Partial<LanyardPresence> {
    heartbeat_interval?: number;
}

interface SocketMessage {
    op: Op;
    t?: Event;
    d?: SocketData;
}

export interface Lanyard {
    ws: WebSocket;
    heartbeat?: NodeJS.Timer;
    user_id: string;

    on(event: "presence", listener: (presence: LanyardPresence) => void): this;
}

export class Lanyard extends EventEmitter implements Lanyard {
    public ws = new WebSocket(`wss://api.lanyard.rest/socket`);

    public heartbeat?: NodeJS.Timer;

    public lastPresence?: LanyardPresence;

    public constructor(public user_id: string) {
        super();

        this.ws.addEventListener("open", () => this.emit('connected'));
        this.ws.addEventListener("message", (message) => {
            try {
                const data = JSON.parse(message.data) as SocketMessage;
                this.handle(data);
            } catch (error) {
                this.emit('error', error);
            }
        });
        this.ws.addEventListener("close", () => this.emit('disconnected'));
    }

    private send(op: Op, data?: any) {
        if (this.ws.readyState !== WebSocket.OPEN) return;
        this.ws.send(JSON.stringify({op, d: data}));
    }

    private subscribe() {
        this.send(Op.Initialize, {subscribe_to_id: this.user_id});
    }

    public fetch(): Promise<LanyardPresence> {
        return fetch(`https://api.lanyard.rest/v1/users/${this.user_id}`, {cache: 'force-cache',}).then(res => res.json()).then(data => {
            this.lastPresence = data.data
            return data.data
        });
    }

    private handle(data: SocketMessage) {
        switch (data.op) {
            case Op.Hello:
                this.heartbeat = setInterval(() => this.send(Op.Heartbeat), data.d?.heartbeat_interval);
                this.subscribe();
                break;
            case Op.Event:
                switch (data.t) {
                    case Event.INIT_STATE:
                    case Event.PRESENCE_UPDATE:
                        this.emit('presence', data.d as LanyardPresence);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
}

export const lanyard = typeof window !== "undefined" ? new Lanyard('235413185639874561') : null
