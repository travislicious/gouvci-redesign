export interface Data {
    admin_name: string;
    admin_pass: string;
    atOne:      AtOne;
    focusItems: FocusItems;
    newsItems:  NewsItems;
    flash_news: FlashNews;
    docs: Doc[];
}

export interface AtOne {
    date:    string;
    content: string;
}

export interface Doc {
    name:  string;
    count: number;
}

export interface FlashNews {
    title:   string;
    content: string;
}

export interface FocusItems {
    focus1: string;
    focus2: string;
    focus3: string;
    focus4: string;
}

export interface NewsItems {
    news: News[]
}

export interface News {
    date:    string;
    content: string;
    title:   string;
}
