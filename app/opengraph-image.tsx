import {ImageResponse} from "next/og";
export const alt="Chris in Me Gospel Arena — A place to belong. A faith to grow.";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){
return new ImageResponse(
 <div style={{width:"100%",height:"100%",background:"#29382f",color:"#fff8ee",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"76px 85px",position:"relative"}}>
 <div style={{position:"absolute",right:-120,top:-160,border:"1px solid #d5b99555",borderRadius:"50%",width:740,height:740}}/>
 <div style={{position:"absolute",right:-40,top:-80,border:"1px solid #d5b99555",borderRadius:"50%",width:520,height:520}}/>
 <div style={{display:"flex",alignItems:"center",fontSize:23,letterSpacing:5,fontWeight:700}}><span style={{border:"2px solid #d8c9ad",width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",marginRight:18,fontSize:26}}>+</span>CHRIS IN ME <span style={{opacity:.55,fontSize:17,marginLeft:18}}> / GOSPEL ARENA</span></div>
 <div style={{display:"flex",flexDirection:"column",gap:18}}><span style={{fontSize:19,letterSpacing:5,color:"#dac6a3"}}>FAITH. COMMUNITY. BELONGING.</span><div style={{display:"flex",flexDirection:"column",fontSize:79,fontWeight:600,lineHeight:1.07,letterSpacing:-3}}><span>A place to belong.</span><span>A faith to grow.</span></div></div>
 <div style={{fontSize:17,opacity:.7,letterSpacing:1}}>AN ORIGINAL DIGITAL EXPERIENCE BY BESPOKE TECHNOLOGIES</div>
 </div>,{...size});
}
