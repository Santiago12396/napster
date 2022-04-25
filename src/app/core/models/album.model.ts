export interface AlbumResp {
    albums: Album[];
    meta:   Meta;
}

export interface Album {
    type:                Type;
    id:                  string;
    upc:                 string;
    shortcut:            string;
    href:                string;
    name:                string;
    released:            string;
    originallyReleased:  Date;
    label:               string;
    copyright:           string;
    tags:                string[];
    discCount:           number;
    trackCount:          number;
    isExplicit:          boolean;
    isSingle:            boolean;
    accountPartner:      string;
    artistName:          string;
    isAvailableInHiRes:  boolean;
    isAvailableInAtmos:  boolean;
    contributingArtists: ContributingArtists;
    discographies:       Discographies;
    links:               Links;
    isStreamable:        boolean;
}

export interface ContributingArtists {
    primaryArtist: string;
}

export interface Discographies {
    main?:          string[];
    others?:        string[];
    singlesAndEPs?: string[];
    compilations?:  string[];
}

export interface Links {
    images:  Images;
    tracks:  Images;
    posts:   Images;
    artists: Artists;
    genres:  Artists;
}

export interface Artists {
    ids:  string[];
    href: string;
}

export interface Images {
    href: string;
}

export enum Type {
    Album = "album",
}

export interface Meta {
    totalCount:    number;
    returnedCount: number;
    limit:         number;
    offset:        number;
}
