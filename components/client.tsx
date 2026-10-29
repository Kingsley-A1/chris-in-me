
"use client";
import {useEffect,useMemo,useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ArrowUpRight,ArrowRight,Menu,X,Search,CheckCircle2} from "lucide-react";
import {site,nav,sermons} from "@/lib/content";
import {Logo} from "@/components/parts";

export function Header(){
 const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false),path=usePathname();
 useEffect(()=>{setOpen(false)},[path]);
 useEffect(()=>{const f=()=>setScrolled(window.scrollY>35);f();window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
 useEffect(()=>{document.body.classList.toggle("nav-open",open);return()=>document.body.classList.remove("nav-open")},[open]);
 return <header className={"site-header"+(scrolled||open?" is-scrolled":"")}>
  <div className="wrap header-inner"><Logo/><nav className="nav-desktop" aria-label="Main navigation">{nav.map(n=><Link className={path===n.href?"current":""} key={n.href} href={n.href}>{n.label}</Link>)}</nav><Link className="header-cta" href="/connect">Connect <ArrowUpRight size={17}/></Link><button type="button" className="menu-trigger" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(v=>!v)}>{open?<X size={25}/>:<Menu size={25}/>}</button></div>
  <div className={"mobile-navigation"+(open?" show":"")} id="mobile-navigation" aria-hidden={!open}><nav aria-label="Mobile navigation">{nav.map((n,i)=><Link tabIndex={open?0:-1} key={n.href} href={n.href}><small>{String(i+1).padStart(2,"0")}</small>{n.label}<ArrowUpRight size={21}/></Link>)}<Link tabIndex={open?0:-1} href="/connect"><small>07</small>Connect<ArrowUpRight size={21}/></Link></nav><p>Come as you are. There's room for you here.</p></div>
 </header>;
}
const cats=["All","Hope","Community","Growth","Grace","Service","Prayer"];
export function MessageExplorer(){
 const [term,setTerm]=useState(""),[cat,setCat]=useState("All");
 const filtered=useMemo(()=>sermons.filter(m=>(cat==="All"||m.category===cat)&&[m.title,m.deck,m.series,m.scripture,m.category].join(" ").toLowerCase().includes(term.toLowerCase().trim())),[term,cat]);
 return <div className="message-explorer"><div className="explorer-toolbar"><label className="search-field"><Search size={19}/><span className="sr-only">Search messages</span><input type="search" value={term} onChange={e=>setTerm(e.target.value)} placeholder="Search theme, scripture or a word..."/></label><div className="filter-pills" role="group" aria-label="Filter by topic">{cats.map(c=><button type="button" key={c} className={cat===c?"selected":""} aria-pressed={cat===c} onClick={()=>setCat(c)}>{c}</button>)}</div></div><p className="explorer-count" aria-live="polite">{filtered.length} {filtered.length===1?"reflection":"reflections"} to explore</p><div className="message-results">{filtered.map(m=><Link className="message-result" key={m.slug} href={"/messages/"+m.slug}><div className="result-thumb"><img src={m.image} alt="" loading="lazy"/></div><div><span>{m.series} / {m.scripture}</span><h3>{m.title}</h3><p>{m.deck}</p></div><ArrowUpRight size={22}/></Link>)}</div>{!filtered.length&&<div className="empty-results"><h3>Nothing quite matches yet.</h3><p>Try another phrase, or explore the full library.</p><button type="button" onClick={()=>{setTerm("");setCat("All")}}>Show all reflections <ArrowRight size={16}/></button></div>}</div>;
}
export function ConnectForm(){
 const [messageUrl,setMessageUrl]=useState("");
 function handleSubmit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;
  const data=new FormData(form),get=(key:string)=>String(data.get(key)||"").trim();
  const message=["Hello Bespoke Technologies,","I visited the Chris in Me Gospel Arena church website concept and would like to discuss a digital project.","","Name: "+get("name"),"Email: "+get("email"),"Interest: "+get("interest"),"","Details: "+get("message")].join("\n");
  const url=site.creatorWhatsApp+"?text="+encodeURIComponent(message);
  setMessageUrl(url);window.open(url,"_blank","noopener,noreferrer");
 }
 return <form className="connect-form" onSubmit={handleSubmit}><div className="form-heading"><span>START A CONVERSATION</span><span>01 — 04</span></div><div className="form-two"><label>Your name <b>*</b><input name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Your name"/></label><label>Email address <b>*</b><input name="email" autoComplete="email" type="email" required maxLength={180} placeholder="you@company.com"/></label></div><label>What are you exploring? <b>*</b><select name="interest" required defaultValue=""><option value="" disabled>Choose an option</option><option>New church website</option><option>Website redesign</option><option>Digital ministry experience</option><option>Something else</option></select></label><label>Tell us a little more <b>*</b><textarea name="message" rows={5} minLength={10} maxLength={1800} required placeholder="Your idea, audience, and what you hope to achieve..."/></label><p className="form-smallprint">This prepares a WhatsApp message to Bespoke Technologies. No details are stored on this website. Please do not enter sensitive personal or pastoral information.</p><button className="button dark" type="submit">Continue to WhatsApp <ArrowUpRight size={18}/></button>{messageUrl&&<p role="status" className="form-confirmation"><CheckCircle2 size={17}/> Review and send your message in WhatsApp. <a href={messageUrl} target="_blank" rel="noopener noreferrer">Open again</a></p>}</form>;
}
