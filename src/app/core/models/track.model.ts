export interface TrackResp {
    meta:   Meta;
    tracks: Track[];
}

export interface Meta {
    returnedCount: number;
    totalCount:    null;
}

export interface Track {
    type:               TrackType;
    id:                 string;
    index:              number;
    disc:               number;
    href:               string;
    playbackSeconds:    number;
    isExplicit:         boolean;
    isStreamable:       boolean;
    isAvailableInHiRes: boolean;
    name:               string;
    isrc:               string;
    shortcut:           string;
    blurbs:             any[];
    artistId:           string;
    artistName:         string;
    albumName:          AlbumName;
    formats:            Format[];
    losslessFormats:    Format[];
    albumId:            AlbumID;
    isAvailableInAtmos: boolean;
    contributors:       Contributors;
    links:              Links;
    previewURL:         string;
}

export enum AlbumID {
    Alb649920338 = "alb.649920338",
}

export enum AlbumName {
    PoppingOffVol1 = "Popping Off Vol.1",
}

export interface Contributors {
    primaryArtist:      string;
    composer:           string;
    remixer?:           string;
    engineer?:          string;
    producer:           string;
    guestVocals?:       string;
    featuredPerformer?: string;
    collaborator?:      string;
    guestMusician?:     string;
}

export interface Format {
    type:       FormatType;
    bitrate:    number;
    name:       Name;
    sampleBits: number;
    sampleRate: number;
}

export enum Name {
    AAC = "AAC",
    AACPlus = "AAC PLUS",
    FLAC = "FLAC",
    Mp3 = "MP3",
}

export enum FormatType {
    Format = "format",
}

export interface Links {
    artists:   Albums;
    albums:    Albums;
    composers: Albums;
    genres:    Albums;
    tags:      Albums;
}

export interface Albums {
    ids:  string[];
    href: string;
}

export enum TrackType {
    Track = "track",
}
