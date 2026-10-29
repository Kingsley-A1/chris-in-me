import type { MetadataRoute } from "next";
import {site,sermons,ministries,gatherings,notes} from "@/lib/content";
export default function sitemap():MetadataRoute.Sitemap {
const paths=["","about","visit","messages","ministries","gatherings","journal","connect",
...sermons.map(x=>"messages/"+x.slug),...ministries.map(x=>"ministries/"+x.slug),
...gatherings.map(x=>"gatherings/"+x.slug),...notes.map(x=>"journal/"+x.slug)];
return paths.map(path=>({url:site.url+(path?"/"+path:""),changeFrequency:"monthly",priority:path===""?1:.7}));
}
