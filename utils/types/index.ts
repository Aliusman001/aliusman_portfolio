export interface NavItem {
    title: string;
    path: string;
}
export interface Author {
    username: string;
    bio: string;
    profile: string;
}

export interface BlogPost {
    id: number;
    title: string;
    tag: string;
    slug: string;
    content: string;
    author: Author;
    datePublished: string;
    lastUpdated: string;
    tags: string[];
    featuredImageUrl: string;
    commentsCount: number;
    viewsCount: number;
    title_image: Record<string, string>;
    status: "published" | "draft" | "archived"; // Status can be 'published', 'draft', or 'archived'
}

export interface Errors {
    email?: string;
    subject?: string;
    phone_number?: string;
    budget?: string;
    message?: string;
    interest?: string;
}





export type ContentItem =
    | HeadingContent
    | ParagraphContent
    | ListContent
    | ImageContent;

export interface HeadingContent {
    type: "heading";
    children: { text: string }[];
}

export interface ParagraphContent {
    type: "paragraph";
    children: { text: string, code?: boolean }[];
}

export interface ListContent {
    type: "list";
    children: ListItem[];
}

export interface ListItem {
    type: "list-item";
    children: { text: string }[];
}

export interface ImageContent {
    type: "image";
    image: {
        formats: {
            large: {
                url: string;
            };
        };
    };
}

export interface QueryParams {
    populate: {
        title_image: { fields: string[] };
        author: { fields: string[] };
    };
    pagination: { page: number; pageSize: number };
    filters?: {
        tag: {
            $eq: string, // Apply filter for the provided tag
        },
    };
}