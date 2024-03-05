export interface BlogPost {
    sys: SysElement;
    total: number;
    skip: number;
    limit: number;
    items: Item[];
    includes: Includes;
}

export interface Includes {
    Asset: Asset[];
}

export interface Asset {
    metadata: Metadata;
    sys: AssetSys;
    fields: AssetFields;
}

export interface AssetFields {
    title: string;
    description: string;
    file: File;
}

export interface File {
    url: string;
    details: Details;
    fileName: string;
    contentType: string;
}

export interface Details {
    size: number;
    image: Image;
}

export interface Image {
    width: number;
    height: number;
}

export interface Metadata {
    tags: any[];
}

export interface AssetSys {
    space: ContentType;
    id: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    environment: ContentType;
    revision: number;
    locale: string;
    contentType?: ContentType;
}

export interface ContentType {
    sys: ContentTypeSys;
}

export interface ContentTypeSys {
    id: string;
    type: string;
    linkType: string;
}

export interface Item {
    metadata: Metadata;
    sys: AssetSys;
    fields: ItemFields;
}

export interface ItemFields {
    title: string;
    urlHandle: string;
    featuredImage: Asset;
    summary: string;
    content: FieldsContent;
    author: string;
    updatedDate: string;
    visible: boolean;
}

export interface FieldsContent {
    data: Data;
    content: PurpleContent[];
    nodeType: string;
}

export interface PurpleContent {
    data: Data;
    content: FluffyContent[];
    nodeType: string;
}

export interface FluffyContent {
    data: Data;
    marks: SysElement[];
    value: string;
    nodeType: string;
}

export interface Data {
}

export interface SysElement {
    type: string;
}