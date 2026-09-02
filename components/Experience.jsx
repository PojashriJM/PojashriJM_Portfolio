import { useEffect, useRef, useState } from "react";
import { FaCodeBranch, FaBrain, FaCode, FaChartLine } from "react-icons/fa";
import { MdLocalAirport } from "react-icons/md";
const experiences = [
  {id:1,role:"Technical intern",company:"Airports Authority of India.",date:"July 2026 (15 days)",badge:"On-site (Chennai, India)",description:"Learnt about airport operations and safety protocols.",icon:MdLocalAirport},
  {id:2,role:"Open Source Contributor",company:"GirlScript Summer of Code",date:"May 2026 – August 2026",badge:"Remote",description:"Merged 5 PRs across AI Agents track repositories, building skeleton UIs, dark/light mode toggles, README generator and pagination components.",icon:FaCodeBranch},
  {id:3,role:"AI & DS Intern",company:"Zeptoware Systems Pvt. Ltd.",date:"Dec 2025 – Jan 2026",badge:"On-site (Chennai, India)",description:"Engineered a Fake Job Detection System using NLP pipelines, embeddings and ensemble ML models.",icon:FaBrain},
  {id:4,role:"Frontend Developer Intern",company:"Parkqwik Pvt. Ltd.",date:"Jun 2025 – Jul 2025",badge:"Remote",description:"Designed responsive UI components from Figma with accessibility and cross-browser support.",icon:FaCode},
];

const CYAN="#22D3EE";
const CYAN2="#06B6D4";

export default function ExperienceSection(){
 const [visible,setVisible]=useState([]);
 const [isDark,setIsDark]=useState(false);
 const cards=useRef([]);

 useEffect(()=>{
   const check=()=>setIsDark(document.documentElement.classList.contains("dark"));
   check();
   const m=new MutationObserver(check);
   m.observe(document.documentElement,{attributes:true,attributeFilter:["class"]});
   return ()=>m.disconnect();
 },[]);

 useEffect(()=>{
   const obs=cards.current.map((r,i)=>{
      if(!r) return null;
      const o=new IntersectionObserver(([e])=>{
        if(e.isIntersecting){
          setVisible(v=>[...new Set([...v,i])]);
          o.disconnect();
        }
      },{threshold:.2});
      o.observe(r);
      return o;
   });
   return ()=>obs.forEach(o=>o&&o.disconnect());
 },[]);

 return (
<section style={{padding:"4rem 2rem"}}>
<div style={{position:"relative",paddingLeft:40}}>
<div style={{position:"absolute",left:7,top:0,bottom:0,width:2,background:isDark?"rgba(255,255,255,.08)":"rgba(0,0,0,.08)"}}/>
<div style={{position:"absolute",left:7,top:0,bottom:0,width:2,background:`linear-gradient(${CYAN2},${CYAN})`,boxShadow:"0 0 15px rgba(34,211,238,.6)"}}/>

{experiences.map((exp,i)=>{
 const Icon=exp.icon;
 return(
<div key={exp.id} ref={e=>cards.current[i]=e}
style={{position:"relative",display:"flex",marginBottom:"1.5rem",opacity:visible.includes(i)?1:0,transform:visible.includes(i)?"translateX(0)":"translateX(-20px)",transition:".45s"}}>
<div style={{position:"absolute",left:-40,top:18,width:16,height:16,borderRadius:"50%",border:`2px solid ${CYAN}`,background:isDark?"#081122":"#fff",display:"flex",alignItems:"center",justifyContent:"center"}}>
<div style={{width:7,height:7,borderRadius:"50%",background:CYAN}}/>
</div>

<div onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 15px 35px rgba(34,211,238,.18)";}}
onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow=isDark?"0 8px 25px rgba(0,0,0,.25)":"0 8px 25px rgba(34,211,238,.08)";}}
style={{flex:1,borderRadius:20,padding:"1.4rem",background:isDark?"rgba(8,17,34,.82)":"rgba(255,255,255,.75)",backdropFilter:"blur(18px)",border:"1px solid rgba(34,211,238,.15)",borderLeft:`4px solid ${CYAN}`,transition:".3s"}}>
<div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
<div style={{width:38,height:38,borderRadius:10,background:"rgba(34,211,238,.12)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
<Icon color={CYAN2} size={18}/>
</div>
<div style={{flex:1,minWidth:0}}>
<div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
<strong style={{color:isDark?"#67E8F9":"#0F172A"}}>{exp.role}</strong>
{exp.active&&<span style={{fontSize:11,padding:"2px 8px",borderRadius:999,background:"rgba(34,211,238,.12)",color:CYAN2,border:"1px solid rgba(34,211,238,.2)"}}>● Active</span>}
{exp.badge&&<span style={{fontSize:11,padding:"2px 8px",borderRadius:999,background:"rgba(34,211,238,.12)",color:CYAN2,border:"1px solid rgba(34,211,238,.2)"}}>{exp.badge}</span>}
</div>
<div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginTop:4}}>
<span style={{color:CYAN2,fontSize:13}}>{exp.company}</span>
<span style={{fontSize:11,padding:"4px 10px",borderRadius:999,background:isDark?"rgba(255,255,255,.05)":"#F8FAFC",border:"1px solid rgba(34,211,238,.15)",color:isDark?"#A5F3FC":"#0E7490",flexShrink:0}}>{exp.date}</span>
</div>
</div>
</div>
<p style={{marginTop:12,lineHeight:1.7,color:isDark?"#CFFAFE":"#475569",fontSize:13.5}}>{exp.description}</p>
</div>
</div>
)})}
</div>
</section>
);
}