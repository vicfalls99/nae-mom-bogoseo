import { useState } from "react";
import BodyReportKR from "./BodyReportKR";
import BodyReportEN from "./BodyReportEN";

const T = { navy:"#1A2744", dk:"#111B33", teal:"#4ECDC4", gold:"#F7C948", stone:"#8899AA" };

function Wave() {
  return (
    <svg viewBox="0 0 400 24" style={{width:"100%",display:"block",margin:"8px 0"}}>
      <path d="M0,12 C50,0 100,24 150,12 C200,0 250,24 300,12 C350,0 400,24 400,12"
        fill="none" stroke="#4ECDC4" strokeWidth="2.5" opacity="0.4"/>
    </svg>
  );
}

export default function App() {
  const [lang, setLang] = useState(null);

  if(lang === "kr") return <BodyReportKR onBack={()=>setLang(null)}/>;
  if(lang === "en") return <BodyReportEN onBack={()=>setLang(null)}/>;

  return (
    <div style={{minHeight:"100vh",background:T.navy,fontFamily:"'Noto Sans KR',sans-serif",
      color:"#F8F9FA",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 24px"}}>
      <div style={{fontSize:52,marginBottom:16}}>🌊</div>
      <div style={{fontSize:28,fontWeight:900,letterSpacing:"-0.5px",marginBottom:4,textAlign:"center"}}>
        내 몸 보고서
      </div>
      <div style={{fontSize:15,fontWeight:700,color:T.teal,marginBottom:12}}>My Body Report</div>
      <div style={{fontSize:18,color:"#F8F9FA",fontWeight:400,marginBottom:32,textAlign:"center",
        lineHeight:1.7,fontFamily:"'Noto Serif KR',serif"}}>
        몸이 보내는 편지를 읽다.
      </div>
      <Wave/>
      <div style={{width:"100%",maxWidth:360,marginTop:24}}>
        <button onClick={()=>setLang("kr")} style={{display:"block",width:"100%",padding:"18px",
          borderRadius:14,border:"none",cursor:"pointer",fontSize:17,fontWeight:700,
          background:T.teal,color:T.navy,marginBottom:12}}>
          🇰🇷 한국어
        </button>
        <button onClick={()=>setLang("en")} style={{display:"block",width:"100%",padding:"18px",
          borderRadius:14,border:"2px solid "+T.teal,cursor:"pointer",fontSize:17,fontWeight:700,
          background:"none",color:T.teal}}>
          🇺🇸 English
        </button>
      </div>
      <div style={{marginTop:40,fontSize:12,color:T.stone,textAlign:"center",lineHeight:2}}>
        Made by Breathe&Books<br/>
        <span style={{color:T.teal,fontSize:11}}>Goseong, Korea</span>
      </div>
    </div>
  );
}
