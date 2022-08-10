import { NewsFeed, NewsDetail } from "../types";

export class Api {
  url: string;
  xhr: XMLHttpRequest;

  constructor(url: string) {
    this.xhr = new XMLHttpRequest();
    this.url = url;
  }

  async reqeust<AjaxResponse>(): Promise<AjaxResponse> {
    const res = await fetch(this.url);
    return (await res.json()) as AjaxResponse;
  }
}

export class NewsFeedApi extends Api {
  constructor(url: string) {
    super(url);
  }

  async getData(): Promise<NewsFeed[]> {
    return this.reqeust<NewsFeed[]>();
  }
}

export class NewsDetailApi extends Api {
  constructor(url: string) {
    super(url);
  }

  async getData(): Promise<NewsDetail> {
    return this.reqeust<NewsDetail>();
  }
}
