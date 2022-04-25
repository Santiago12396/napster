export interface ImageResp {
    images: Image[];
    meta:   Meta;
}

export interface Image {
    type:      string;
    id:        string;
    url:       string;
    contentId: string;
    width:     number;
    height:    number;
    isDefault: boolean;
    version:   number;
    imageType: string;
}

export interface Meta {
    totalCount:    null;
    returnedCount: number;
}
