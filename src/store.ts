import { NewsFeed } from "./types";

class Store {
  private feeds: NewsFeed[];
  private currentPage: number;

  constructor() {
    this.feeds = [];
    this.currentPage = 1;
  }
}
