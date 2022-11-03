import {LanyardSpotify} from "./lanyard-spotify.interface";
import {DiscordUser} from "./discord-user.interrface";
import {LanyardActivity} from "./lanyard-activity.interface";

export interface LanyardPresence {
    spotify: LanyardSpotify;
    listening_to_spotify: boolean;
    kv: Record<string, any>;
    discord_user: DiscordUser;
    discord_status: string;
    activities: LanyardActivity[];
    active_on_discord_web: boolean;
    active_on_discord_mobile: boolean;
    active_on_discord_desktop: boolean;
}
