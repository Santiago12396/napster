export interface ArtistResp {
    artists: Artist[];
    meta:    Meta;
}

export interface Artist {
    type:        Type;
    id:          string;
    href:        string;
    name:        string;
    amg?:        string;
    shortcut:    string;
    blurbs:      string[];
    bios:        Bio[];
    albumGroups: AlbumGroups;
    links:       Links;
}

export interface AlbumGroups {
    compilations:  string[];
    others:        string[];
    singlesAndEPs: string[];
    main:          string[];
}

export interface Bio {
    title:       string;
    author:      string;
    publishDate: string;
    bio:         string;
}

export interface Links {
    albums:           Albums;
    images:           Albums;
    posts:            Albums;
    topTracks:        Albums;
    genres:           Contemporaries;
    stations:         Contemporaries;
    contemporaries:   Contemporaries;
    followers?:       Contemporaries;
    influences:       Contemporaries;
    relatedProjects?: Contemporaries;
}

export interface Albums {
    href: string;
}

export interface Contemporaries {
    ids:  string[];
    href: string;
}

export enum Type {
    Artist = "artist",
}

export interface Meta {
    totalCount:    number;
    returnedCount: number;
}
