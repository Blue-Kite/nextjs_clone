export interface Song {
    name: string;
    channelId: number;
    channel: string;
    src: string;
    imageSrc: string;
}

export interface Playlist {
    id: number;
    owner: string;
    playlistName: string;
    songList: Song[];
}
