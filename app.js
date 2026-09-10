const goBtn=document.getElementById("go");
const statusEl=document.getElementById("status");
const startScreen=document.getElementById("startscreen");
const video=document.getElementById("video");

async function startDiagnostic(){
  goBtn.textContent="Botón funciona ✅";
  statusEl.textContent="Paso 1: botón detectado";
  goBtn.disabled=true;

  await new Promise(r=>setTimeout(r,500));

  try{
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
      statusEl.textContent="Paso 2: cámara NO disponible";
      alert("El botón funciona, pero este navegador no expone getUserMedia.");
      goBtn.disabled=false;
      return;
    }

    statusEl.textContent="Paso 2: solicitando cámara…";
    const stream=await navigator.mediaDevices.getUserMedia({
      video:{facingMode:{ideal:"environment"}},
      audio:false
    });

    statusEl.textContent="Paso 3: cámara concedida ✅";
    video.srcObject=stream;
    await video.play();

    startScreen.style.display="none";
    statusEl.textContent="Diagnóstico correcto: botón + cámara ✅";
  }catch(e){
    statusEl.textContent="Paso 3: error de cámara";
    alert("El botón sí funciona. El error está al abrir la cámara:\n\n"+e.name+": "+e.message);
    goBtn.disabled=false;
  }
}

goBtn.onclick=()=>alert("BOTÓN DETECTADO");
statusEl.textContent="Diagnóstico 03c listo";
