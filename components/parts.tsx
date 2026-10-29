
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {site,nav,type Sermon,type Ministry,type Gathering,type Note} from "@/lib/content";

export function Logo(){
 return <Link href="/" aria-label="Chris in Me Gospel Arena home" className="logo"><span className="brand-symbol" aria-hidden="true"><svg viewBox="0 0 52 52" fill="none"><path d="M26 7v37M14 20h24M9 42h34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M9 37c4-7.5 9.7-11.2 17-11.2S39 29.5 43 37" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span><span><strong>CHRIS IN ME</strong><small>GOSPEL ARENA</small></span></Link>;
}
export function Eyebrow({children,light=false}:{children:React.ReactNode,light?:boolean}){
 return <span className={"eyebrow"+(light?" is-light":"")}><i/>{children}</span>;
}
export function ArrowLink({href,children}:{href:string,children:React.ReactNode}){
 return <Link href={href} className="arrow-link">{children}<ArrowUpRight size={17}/></Link>;
}
export function Photo({src,alt,cls="",eager=false}:{src:string,alt:string,cls?:string,eager?:boolean}){
 return <img src={src} alt={alt} className={cls} loading={eager?"eager":"lazy"} decoding="async"/>;
}
export function SectionHead({kicker,title,description,href,linkText}:{kicker:string,title:React.ReactNode,description?:string,href?:string,linkText?:string}){
 return <div className="section-head"><div><Eyebrow>{kicker}</Eyebrow><h2>{title}</h2></div><div className="section-head-aside">{description&&<p>{description}</p>}{href&&<ArrowLink href={href}>{linkText||"Explore more"}</ArrowLink>}</div></div>;
}
export function SermonCard({item}:{item:Sermon}){
 return <Link href={"/messages/"+item.slug} className="sermon-card"><div className="card-image"><Photo src={item.image} alt={"Illustrative image for "+item.title}/><span className="card-image-arrow"><ArrowUpRight size={23}/></span></div><span className="card-meta">{item.series} <i/> {item.scripture}</span><div className="card-title"><h3>{item.title}</h3><ArrowUpRight size={20}/></div><p>{item.deck}</p></Link>;
}
export function MinistryCard({item,index=0}:{item:Ministry,index?:number}){
 return <Link href={"/ministries/"+item.slug} className="ministry-card"><div className="card-image"><Photo src={item.image} alt={"Illustration of "+item.title}/></div><div className="ministry-card-body"><span className="card-meta">{String(index+1).padStart(2,"0")} / {item.kicker}</span><div className="card-title"><h3>{item.title}</h3><ArrowUpRight size={20}/></div><p>{item.description}</p></div></Link>;
}
export function GatheringCard({item}:{item:Gathering}){
 return <Link href={"/gatherings/"+item.slug} className="gathering-card"><div className="card-image"><Photo src={item.image} alt={"Concept programme: "+item.title}/><span className="image-caption">ILLUSTRATIVE PROGRAMME</span></div><div className="gathering-card-body"><span className="card-meta">{item.label}</span><div className="card-title"><h3>{item.title}</h3><ArrowUpRight size={20}/></div><p>{item.summary}</p></div></Link>;
}
export function NoteCard({item}:{item:Note}){
 return <Link href={"/journal/"+item.slug} className="note-card"><div className="card-image"><Photo src={item.image} alt={"Editorial illustration for "+item.title}/></div><span className="card-meta">{item.category} · {item.read}</span><h3>{item.title}</h3><p>{item.deck}</p><span className="arrow-link">Read story <ArrowUpRight size={17}/></span></Link>;
}
export function PageHero({kicker,title,description,image}:{kicker:string,title:React.ReactNode,description:string,image?:string}){
 return <section className={"page-hero"+(image?" with-image":"")}><div className="wrap page-hero-inner"><div className="page-hero-copy"><Eyebrow light>{kicker}</Eyebrow><h1>{title}</h1><p>{description}</p></div>{image?<div className="page-hero-image"><Photo src={image} alt="Illustrative church lifestyle photography" eager/></div>:<span aria-hidden="true" className="page-watermark">✳</span>}</div></section>;
}
export function ConceptNote(){
 return <div className="concept-note"><span className="concept-dot"/> <strong>CONCEPT EXPERIENCE</strong><span>Illustrative content — not an operating church website.</span></div>;
}
export function Cta(){
 return <section className="closing-cta"><div className="wrap closing-inner"><Eyebrow light>YOUR NEXT STEP</Eyebrow><h2>You don't have to have<br/><em>it all figured out.</em></h2><p>A good first step is still a good step. Come with your curiosity, questions, and your whole story.</p><Link href="/visit" className="button cream">Explore your first visit <ArrowUpRight size={18}/></Link></div></section>;
}
export function Footer(){
 return <footer className="footer"><div className="wrap"><div className="footer-call"><div><Eyebrow light>A HOME FOR YOUR JOURNEY</Eyebrow><h2>Faith has room<br/><em>for your story.</em></h2></div><Link href="/connect" className="footer-round" aria-label="Get in touch"><ArrowUpRight size={29}/></Link></div><div className="footer-divider"/><div className="footer-columns"><div className="footer-summary"><Logo/><p>A thoughtful digital space imagined for worship, spiritual growth, and genuine community.</p></div><div className="footer-nav"><div><small>EXPLORE</small>{nav.slice(0,4).map(n=><Link key={n.href} href={n.href}>{n.label}</Link>)}</div><div><small>DISCOVER</small>{nav.slice(4).map(n=><Link key={n.href} href={n.href}>{n.label}</Link>)}<Link href="/connect">Connect</Link></div></div></div><div className="footer-base"><span>© 2026 Chris in Me Gospel Arena — Concept</span><span>Designed & engineered by <a target="_blank" rel="noopener noreferrer" href={site.creatorUrl}>Bespoke Technologies <ArrowUpRight size={13}/></a></span></div><p className="fine-print">{site.notice} Images are illustrative stock photography. This site does not receive prayer requests or donations.</p></div></footer>;
}
