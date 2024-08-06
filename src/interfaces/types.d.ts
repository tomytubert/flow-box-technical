export interface Response {
    total:       number;
    total_pages: number;
    results:     Images[];
}

export interface Images {
    id:                       string;
    slug:                     string;
    alternative_slugs:        AlternativeSlugs;
    created_at:               Date;
    updated_at:               Date;
    promoted_at:              Date | null;
    width:                    number;
    height:                   number;
    color:                    string;
    blur_hash:                string;
    description:              null | string;
    alt_description:          string;
    breadcrumbs:              Breadcrumb[];
    urls:                     Urls;
    links:                    ResultLinks;
    likes:                    number;
    liked_by_user:            boolean;
    current_user_collections: any[];
    sponsorship:              null;
    topic_submissions:        ResultTopicSubmissions;
    asset_type:               AssetType;
    user:                     User;
    tags:                     Tag[];
}

export interface AlternativeSlugs {
    en: string;
    es: string;
    ja: string;
    fr: string;
    it: string;
    ko: string;
    de: string;
    pt: string;
}

export enum AssetType {
    Photo = "photo",
}

export interface Breadcrumb {
    slug:  string;
    title: string;
    index: number;
    type:  Type;
}

export enum Type {
    LandingPage = "landing_page",
    Search = "search",
}

export interface ResultLinks {
    self:              string;
    html:              string;
    download:          string;
    download_location: string;
}

export interface Tag {
    type:    Type;
    title:   string;
    source?: Source;
}

export interface Source {
    ancestry:         Ancestry;
    title:            string;
    subtitle:         string;
    description:      string;
    meta_title:       string;
    meta_description: string;
    cover_photo:      CoverPhoto;
}

export interface Ancestry {
    type:        Category;
    category:    Category;
    subcategory: Category;
}

export interface Category {
    slug:        string;
    pretty_slug: string;
}

export interface CoverPhoto {
    id:                       string;
    slug:                     string;
    alternative_slugs:        AlternativeSlugs;
    created_at:               Date;
    updated_at:               Date;
    promoted_at:              Date | null;
    width:                    number;
    height:                   number;
    color:                    Color;
    blur_hash:                string;
    description:              Description | null;
    alt_description:          string;
    breadcrumbs:              Breadcrumb[];
    urls:                     Urls;
    links:                    ResultLinks;
    likes:                    number;
    liked_by_user:            boolean;
    current_user_collections: any[];
    sponsorship:              null;
    topic_submissions:        CoverPhotoTopicSubmissions;
    asset_type:               AssetType;
    user:                     User;
    premium?:                 boolean;
    plus?:                    boolean;
}

export enum Color {
    A6A6A6 = "#a6a6a6",
    F3F3F3 = "#f3f3f3",
    The262626 = "#262626",
}

export enum Description {
    DogDayOut = "Dog day out",
    OldStoneBackgroundTexture = "Old stone background texture",
    SunsetStripSidewalkSign = "Sunset Strip sidewalk sign",
}

export interface CoverPhotoTopicSubmissions {
    "textures-patterns"?: InteriorsClass;
    health?:              InteriorsClass;
    animals?:             PurpleAnimals;
}

export interface PurpleAnimals {
    status: string;
}

export interface InteriorsClass {
    status:      string;
    approved_on: Date;
}

export interface Urls {
    raw:      string;
    full:     string;
    regular:  string;
    small:    string;
    thumb:    string;
    small_s3: string;
}

export interface User {
    id:                           string;
    updated_at:                   Date;
    username:                     string;
    name:                         string;
    first_name:                   string;
    last_name:                    null | string;
    twitter_username:             null | string;
    portfolio_url:                null | string;
    bio:                          null | string;
    location:                     null | string;
    links:                        UserLinks;
    profile_image:                ProfileImage;
    instagram_username:           string;
    total_collections:            number;
    total_likes:                  number;
    total_photos:                 number;
    total_promoted_photos:        number;
    total_illustrations:          number;
    total_promoted_illustrations: number;
    accepted_tos:                 boolean;
    for_hire:                     boolean;
    social:                       Social;
}

export interface UserLinks {
    self:      string;
    html:      string;
    photos:    string;
    likes:     string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface ProfileImage {
    small:  string;
    medium: string;
    large:  string;
}

export interface Social {
    instagram_username: string;
    portfolio_url:      null | string;
    twitter_username:   null | string;
    paypal_email:       null;
}

export interface ResultTopicSubmissions {
    animals?:      InteriorsClass;
    interiors?:    InteriorsClass;
    relationship?: InteriorsClass;
}
