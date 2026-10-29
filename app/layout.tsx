import "./globals.css";
import type { Metadata, Viewport } from "next";
import { site } from "@/lib/content";
import { Header } from "@/components/client";
import { Footer } from "@/components/parts";
export const metadata:Metadata={
 metadataBase:new URL(site.url),
 title:{default:site.name+" — A place to belong. A faith to grow.",template:"%s | "+site.name},
 description:site.description,
 openGraph:{type:"website",siteName:site.name,title:site.name,description:site.description,images:[{url:"/opengraph-image",width:1200,height:630}]},
 twitter:{card:"summary_large_image",title:site.name,description:site.description,images:["/opengraph-image"]},
 robots:{index:true,follow:true},
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#29352e"};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to content</a><Header/>{children}<Footer/></body></html>;
}
