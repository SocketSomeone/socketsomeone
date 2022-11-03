import {Emoji} from "./emoji.interface";
import {Timestamps} from "./timestamps.interface";
import {Party} from "./party.interface";
import {Assets} from "./assets.inteface";

export interface LanyardActivity {
    type: number;
    state: string;
    name: string;
    id: string;
    emoji?: Emoji;
    created_at: number;
    application_id: null | string;
    timestamps?: Timestamps;
    sync_id?: string;
    session_id?: string;
    party?: Party;
    flags?: number;
    details?: string;
    assets?: Assets;
}
