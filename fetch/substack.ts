import config from "../configs/configs.json";
import { load } from "cheerio";

const { substackUrl } = config;
export interface NewsletterImage {
  url: string;
  title: string;
  link: string;
}

export interface Newsletter {
  posts: Post[];
  title: string;
  description: string;
  image: NewsletterImage;
  copyright: string;
  lastBuildDate: string;
  webMaster: string;
  link: string;
  generator: string;
}

export interface Post {
  title?: string;
  description?: string;
  content?: string;
  link?: string;
  guid?: string;
  pubDate?: string;
  enclosure?: string;
  creator?: string;
}

export async function fetchSubstack(): Promise<Newsletter> {
  let posts: Post[] = [];
  let $ = load(await (await fetch(substackUrl)).text(), {
    xml: true,
  });
  for (let el of $("channel item").toArray()) {
    let post: Post = {
      title: $(el).children("title").text(),
      description: $(el).children("description").text(),
      content: $(el).children("description").text(),
      link: $(el).children("link").text(),
      enclosure: $(el).children("enclosure").text(),
      creator: $(el).children("dc\\:creator").text(),
      guid: $(el).children("guid").text(),
    };
    posts.push(post);
  }
  let image: NewsletterImage = {
    url: $("channel image url").text(),
    title: $("channel image title").text(),
    link: $("channel image link").text(),
  };
  let newsletter: Newsletter = {
    posts,
    title: $("channel title").text(),
    description: $("channel description").text(),
    image,
    copyright: $("channel copyright").text(),
    lastBuildDate: $("channel lastBuildDate").text(),
    webMaster: $("channel webMaster").text(),
    link: $("channel link").text(),
    generator: $("channel generator").text(),
  };

  return newsletter;
}
