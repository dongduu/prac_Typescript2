import { NewsFeed, NewsDetail } from "../types";

export class Api {
  url: string;
  ajax: XMLHttpRequest;

  constructor(url: string) {
    this.ajax = new XMLHttpRequest();
    this.url = url;
  }

  getRequest<AjaxResponse>(cb: (data: AjaxResponse) => void): AjaxResponse {
    this.ajax.open("GET", this.url);
    this.ajax.addEventListener("load", () => {
      cb(JSON.parse(this.ajax.response));
    });
    this.ajax.send();

    return;
  }
}

export class NewsFeedApi extends Api {
  constructor(url: string) {
    super(url);
  }

  getData(cb: (data: NewsFeed[]) => void): void {
    return this.getRequest<NewsFeed[]>(cb);
  }
}

export class NewsDetailApi extends Api {
  constructor(url: string) {
    super(url);
  }

  getData(cb: (data: NewsDetail) => void): void {
    return this.getRequest<NewsDetail>(cb);
  }
}
