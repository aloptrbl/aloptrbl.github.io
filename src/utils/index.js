import SITE_URL from "../config";

export function slugify(title) {
    return title.toLowerCase().trim().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  }

  export function ImageUrl(url) {
    return SITE_URL + url
  }