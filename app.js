const people={
  hildegard:{name:"Hildegard von Bingen",dates:"1098–1179",period:"EDAD MEDIA",work:"O vis aeternitatis",url:"https://www.youtube.com/results?search_query=Hildegard+von+Bingen+O+vis+aeternitatis"},
  palestrina:{name:"Giovanni Pierluigi da Palestrina",dates:"c. 1525–1594",period:"RENACIMIENTO · DIRECTOR",work:"Sicut cervus",url:"https://www.youtube.com/results?search_query=Palestrina+Sicut+cervus"},
  rutter:{name:"John Rutter",dates:"1945–",period:"CONTEMPORÁNEA",work:"For the Beauty of the Earth",url:"https://www.youtube.com/results?search_query=John+Rutter+For+the+Beauty+of+the+Earth"}
};
const video=document.getElementById("video"), canvas=document.getElementById("canvas"),
ctx=canvas.getContext("2d"), statusEl=document.getElementById("status"), card=document.getElementById("card");
let refs=[], running=false, lastHit=0;

function waitCV(){return new Promise(resolve=>{let t=setInterval(()=>{if(window.cvReady&&window.cv&&cv.Mat){clearInterval(t);resolve()}},100)})}
function showCard(key,score){
  const p=people[key]; document.getElementById("period").textContent=p.period;
  document.getElementById("name").textContent=p.name; document.getElementById("dates").textContent=p.dates;
  document.getElementById("work").textContent=p.work; document.getElementById("listen").href=p.url;
  card.classList.remove("hidden"); statusEl.textContent="✓ Reconocido · "+Math.round(score*100)+"%";
  lastHit=Date.now();
}
async function buildRefs(){
  refs=[];
  for(const key of Object.keys(people)){
    const src=cv.imread("ref-"+key), gray=new cv.Mat(); cv.cvtColor(src,gray,cv.COLOR_RGBA2GRAY);
    refs.push({key,mat:gray}); src.delete();
  }
}
async function start(){
  document.getElementById("go").disabled=true; statusEl.textContent="Solicitando cámara…";
  const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},audio:false});
  video.srcObject=stream; await video.play(); await waitCV(); await buildRefs();
  document.getElementById("start").style.display="none"; running=true; scan();
}
document.getElementById("go").onclick=()=>start().catch(e=>{alert("No pude abrir la cámara. Abre el sitio por HTTPS y permite acceso a la cámara.\n\n"+e.message);document.getElementById("go").disabled=false});

function scan(){
  if(!running)return;
  const vw=640, vh=Math.round(640*video.videoHeight/video.videoWidth);
  canvas.width=vw; canvas.height=vh; ctx.drawImage(video,0,0,vw,vh);
  let frame=cv.imread(canvas), gray=new cv.Mat(); cv.cvtColor(frame,gray,cv.COLOR_RGBA2GRAY); frame.delete();
  let best={key:null,score:-1,rect:null};
  for(const r of refs){
    for(const s of [0.32,0.40,0.50,0.62,0.76,0.92,1.08]){
      const w=Math.round(r.mat.cols*s),h=Math.round(r.mat.rows*s);
      if(w<45||h<45||w>=gray.cols||h>=gray.rows)continue;
      let templ=new cv.Mat(); cv.resize(r.mat,templ,new cv.Size(w,h),0,0,cv.INTER_AREA);
      let result=new cv.Mat(); cv.matchTemplate(gray,templ,result,cv.TM_CCOEFF_NORMED);
      let mm=cv.minMaxLoc(result);
      if(mm.maxVal>best.score)best={key:r.key,score:mm.maxVal,rect:{x:mm.maxLoc.x,y:mm.maxLoc.y,w,h}};
      templ.delete();result.delete();
    }
  }
  gray.delete();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if(best.score>0.58){
    ctx.strokeStyle="#e7c476";ctx.lineWidth=4;ctx.strokeRect(best.rect.x,best.rect.y,best.rect.w,best.rect.h);
    showCard(best.key,best.score);
  }else{
    statusEl.textContent="Buscando Hildegard · Palestrina · Rutter…";
    if(Date.now()-lastHit>1800)card.classList.add("hidden");
  }
  setTimeout(scan,650);
}