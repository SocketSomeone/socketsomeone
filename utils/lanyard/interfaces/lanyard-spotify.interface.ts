import {Timestamps} from "./timestamps.interface";

export interface LanyardSpotify {
    track_id: string;
    timestamps: Timestamps;
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
}
