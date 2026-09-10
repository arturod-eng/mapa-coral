const people = {
  hildegard: {
    name: "Hildegard von Bingen",
    dates: "1098–1179",
    period: "EDAD MEDIA",
    work: "O vis aeternitatis",
    listen: "https://www.youtube.com/results?search_query=Hildegard+von+Bingen+O+vis+aeternitatis"
  },
  leonin: {
    name: "Léonin",
    dates: "c. 1150–c. 1201",
    period: "EDAD MEDIA",
    work: "Viderunt omnes",
    listen: "https://www.youtube.com/results?search_query=Leonin+Viderunt+omnes"
  },
  perotin: {
    name: "Pérotin",
    dates: "c. 1160–c. 1230",
    period: "EDAD MEDIA",
    work: "Viderunt omnes",
    listen: "https://www.youtube.com/results?search_query=Perotin+Viderunt+omnes"
  },
  machaut: {
    name: "Guillaume de Machaut",
    dates: "c. 1300–1377",
    period: "EDAD MEDIA",
    work: "Messe de Nostre Dame",
    listen: "https://www.youtube.com/results?search_query=Machaut+Messe+de+Nostre+Dame"
  },
  josquin: {
    name: "Josquin des Prez",
    dates: "c. 1450/55–1521",
    period: "RENACIMIENTO",
    work: "Il grillo (El grillo)",
    listen: "https://www.youtube.com/results?search_query=Josquin+des+Prez+Il+grillo"
  },
  victoria: {
    name: "Tomás Luis de Victoria",
    dates: "c. 1548–1611",
    period: "RENACIMIENTO",
    work: "O magnum mysterium",
    listen: "https://www.youtube.com/results?search_query=Tomas+Luis+de+Victoria+O+magnum+mysterium"
  },
  palestrina: {
    name: "Giovanni Pierluigi da Palestrina",
    dates: "c. 1525–1594",
    period: "RENACIMIENTO · DIRECTOR",
    work: "Sicut cervus",
    listen: "https://www.youtube.com/results?search_query=Palestrina+Sicut+cervus"
  },
  rutter: {
    name: "John Rutter",
    dates: "1945–",
    period: "CONTEMPORÁNEA",
    work: "For the Beauty of the Earth",
    listen: "https://www.youtube.com/results?search_query=John+Rutter+For+the+Beauty+of+the+Earth"
  },

  monteverdi: {
    name: "Claudio Monteverdi",
    dates: "1567–1643",
    period: "RENACIMIENTO / BARROCO",
    work: "Vespro della Beata Vergine",
    listen: "https://www.youtube.com/results?search_query=Claudio+Monteverdi+Vespro+della+Beata+Vergine"
  },
  schutz: {
    name: "Heinrich Schütz",
    dates: "1585–1672",
    period: "BARROCO",
    work: "Musikalische Exequien",
    listen: "https://www.youtube.com/results?search_query=Heinrich+Schutz+Musikalische+Exequien"
  },
  bach: {
    name: "Johann Sebastian Bach",
    dates: "1685–1750",
    period: "BARROCO",
    work: "Misa en si menor",
    listen: "https://www.youtube.com/results?search_query=Johann+Sebastian+Bach+Mass+in+B+minor"
  },
  handel: {
    name: "Georg Friedrich Händel",
    dates: "1685–1759",
    period: "BARROCO",
    work: "Messiah",
    listen: "https://www.youtube.com/results?search_query=Handel+Messiah"
  },
  vivaldi: {
    name: "Antonio Vivaldi",
    dates: "1678–1741",
    period: "BARROCO",
    work: "Gloria, RV 589",
    listen: "https://www.youtube.com/results?search_query=Vivaldi+Gloria+RV+589"
  },
  haydn: {
    name: "Joseph Haydn",
    dates: "1732–1809",
    period: "CLASICISMO",
    work: "La Creación",
    listen: "https://www.youtube.com/results?search_query=Joseph+Haydn+The+Creation"
  },
  mozart: {
    name: "Wolfgang Amadeus Mozart",
    dates: "1756–1791",
    period: "CLASICISMO",
    work: "Réquiem, K. 626",
    listen: "https://www.youtube.com/results?search_query=Mozart+Requiem+K+626"
  },
  beethoven: {
    name: "Ludwig van Beethoven",
    dates: "1770–1827",
    period: "CLASICISMO / ROMANTICISMO",
    work: "Missa solemnis",
    listen: "https://www.youtube.com/results?search_query=Beethoven+Missa+solemnis"
  },

  schubert: {
    name: "Franz Schubert",
    dates: "1797–1828",
    period: "ROMANTICISMO",
    work: "Misa n.º 6 en mi bemol mayor, D 950",
    listen: "https://www.youtube.com/results?search_query=Franz+Schubert+Mass+No+6+D+950"
  },
  mendelssohn: {
    name: "Felix Mendelssohn",
    dates: "1809–1847",
    period: "ROMANTICISMO",
    work: "Elijah (Elias), Op. 70",
    listen: "https://www.youtube.com/results?search_query=Felix+Mendelssohn+Elijah+Op+70"
  },
  schumann: {
    name: "Robert Schumann",
    dates: "1810–1856",
    period: "ROMANTICISMO",
    work: "Das Paradies und die Peri, Op. 50",
    listen: "https://www.youtube.com/results?search_query=Robert+Schumann+Das+Paradies+und+die+Peri+Op+50"
  },
  brahms: {
    name: "Johannes Brahms",
    dates: "1833–1897",
    period: "ROMANTICISMO",
    work: "Ein deutsches Requiem, Op. 45",
    listen: "https://www.youtube.com/results?search_query=Johannes+Brahms+Ein+deutsches+Requiem+Op+45"
  },
  bruckner: {
    name: "Anton Bruckner",
    dates: "1824–1896",
    period: "ROMANTICISMO",
    work: "Ave Maria, WAB 6",
    listen: "https://www.youtube.com/results?search_query=Anton+Bruckner+Ave+Maria+WAB+6"
  },
  verdi: {
    name: "Giuseppe Verdi",
    dates: "1813–1901",
    period: "ROMANTICISMO",
    work: "Messa da Requiem",
    listen: "https://www.youtube.com/results?search_query=Giuseppe+Verdi+Messa+da+Requiem"
  },
  faure: {
    name: "Gabriel Fauré",
    dates: "1845–1924",
    period: "ROMANTICISMO / MODERNIDAD",
    work: "Requiem, Op. 48",
    listen: "https://www.youtube.com/results?search_query=Gabriel+Faure+Requiem+Op+48"
  },
  debussy: {
    name: "Claude Debussy",
    dates: "1862–1918",
    period: "IMPRESIONISMO / MODERNIDAD",
    work: "Trois chansons de Charles d’Orléans",
    listen: "https://www.youtube.com/results?search_query=Claude+Debussy+Trois+chansons+de+Charles+d+Orleans"
  }
};

const ids = Object.keys(people);

const goBtn = document.getElementById("go");
const startScreen = document.getElementById("startscreen");
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const statusEl = document.getElementById("status");
const card = document.getElementById("card");
const periodEl = document.getElementById("period");
const nameEl = document.getElementById("name");
const datesEl = document.getElementById("dates");
const workEl = document.getElementById("work");
const listenEl = document.getElementById("listen");

let running = false;
let cvReady = false;
let refs = {};
let lastWinner = null;
let stableCount = 0;
let lastShown = null;
let busy = false;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForOpenCV(timeoutMs = 20000) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    try {
      if (window.cv && typeof cv.Mat === "function" && typeof cv.ORB === "function") {
        cvReady = true;
        return true;
      }
    } catch (e) {}
    await sleep(250);
  }
  return false;
}

function imageLoaded(img) {
  if (img.complete && img.naturalWidth > 0) return Promise.resolve();
  return new Promise((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error("No se pudo cargar " + img.src));
  });
}

function orbFromMat(src, maxSide = 520) {
  let work = new cv.Mat();
  let gray = new cv.Mat();

  const scale = Math.min(1, maxSide / Math.max(src.cols, src.rows));
  if (scale < 1) {
    cv.resize(
      src,
      work,
      new cv.Size(Math.max(1, Math.round(src.cols * scale)),
                  Math.max(1, Math.round(src.rows * scale))),
      0, 0, cv.INTER_AREA
    );
  } else {
    src.copyTo(work);
  }

  if (work.channels() === 4) {
    cv.cvtColor(work, gray, cv.COLOR_RGBA2GRAY);
  } else if (work.channels() === 3) {
    cv.cvtColor(work, gray, cv.COLOR_RGB2GRAY);
  } else {
    work.copyTo(gray);
  }

  const keypoints = new cv.KeyPointVector();
  const descriptors = new cv.Mat();
  const mask = new cv.Mat();

  const orb = new cv.ORB(1100);
  orb.detectAndCompute(gray, mask, keypoints, descriptors);

  mask.delete();
  gray.delete();
  work.delete();
  orb.delete();

  return { keypoints, descriptors };
}

async function buildReferences() {
  statusEl.textContent = "Preparando los 24 compositores…";

  for (const id of ids) {
    const img = document.getElementById("ref-" + id);
    if (!img) throw new Error("Falta la imagen de referencia: " + id);

    await imageLoaded(img);

    const src = cv.imread(img);
    const feat = orbFromMat(src, 520);
    src.delete();

    if (!feat.descriptors || feat.descriptors.rows < 12) {
      feat.keypoints.delete();
      feat.descriptors.delete();
      throw new Error("Muy pocos puntos visuales en " + id);
    }

    refs[id] = feat;
  }
}

function ratioMatches(descA, descB) {
  if (!descA || !descB || descA.empty() || descB.empty()) return 0;

  const matcher = new cv.BFMatcher(cv.NORM_HAMMING, false);
  const matches = new cv.DMatchVectorVector();

  try {
    matcher.knnMatch(descA, descB, matches, 2);

    let good = 0;
    for (let i = 0; i < matches.size(); i++) {
      const pair = matches.get(i);
      if (pair.size() >= 2) {
        const m = pair.get(0);
        const n = pair.get(1);
        if (m.distance < 0.72 * n.distance) good++;
      }
      pair.delete();
    }
    return good;
  } finally {
    matches.delete();
    matcher.delete();
  }
}

function showCard(id) {
  const p = people[id];
  if (!p) return;

  periodEl.textContent = p.period;
  nameEl.textContent = p.name;
  datesEl.textContent = p.dates;
  workEl.textContent = p.work;
  listenEl.href = p.listen;

  card.classList.remove("hidden");
  lastShown = id;
}

function hideCard() {
  card.classList.add("hidden");
  lastShown = null;
}

async function analyseFrame() {
  if (!running || busy || !cvReady || video.readyState < 2) return;
  busy = true;

  let src = null;
  let feat = null;

  try {
    const vw = video.videoWidth || 640;
    const vh = video.videoHeight || 480;
    const scale = Math.min(1, 720 / Math.max(vw, vh));

    canvas.width = Math.max(1, Math.round(vw * scale));
    canvas.height = Math.max(1, Math.round(vh * scale));

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    src = cv.imread(canvas);
    feat = orbFromMat(src, 640);

    if (feat.descriptors.rows < 12) {
      statusEl.textContent = "Acerca un retrato al centro de la cámara";
      stableCount = 0;
      return;
    }

    const results = [];

    for (const id of ids) {
      const good = ratioMatches(feat.descriptors, refs[id].descriptors);
      const denom = Math.max(
        1,
        Math.min(feat.keypoints.size(), refs[id].keypoints.size())
      );
      const score = good / denom;
      results.push({ id, good, score });
    }

    results.sort((a, b) => b.good - a.good || b.score - a.score);

    const best = results[0];
    const second = results[1] || { good: 0, score: 0 };

    const strongEnough = best.good >= 11;
    const clearLead = (best.good - second.good >= 3) || (best.score - second.score >= 0.018);

    if (strongEnough && clearLead) {
      if (lastWinner === best.id) {
        stableCount++;
      } else {
        lastWinner = best.id;
        stableCount = 1;
      }

      statusEl.textContent =
        "Viendo: " + people[best.id].name +
        " · coincidencias " + best.good;

      if (stableCount >= 2 && lastShown !== best.id) {
        showCard(best.id);
      }
    } else {
      stableCount = 0;
      lastWinner = null;
      statusEl.textContent = "Buscando compositor…";

      if (lastShown) {
        setTimeout(() => {
          if (stableCount === 0) hideCard();
        }, 1200);
      }
    }
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Error al reconocer la imagen";
  } finally {
    if (feat) {
      try { feat.keypoints.delete(); } catch (e) {}
      try { feat.descriptors.delete(); } catch (e) {}
    }
    if (src) {
      try { src.delete(); } catch (e) {}
    }
    busy = false;
  }
}

async function startMagic() {
  if (running) return;

  goBtn.disabled = true;
  goBtn.textContent = "Preparando…";
  statusEl.textContent = "Cargando reconocimiento visual…";

  try {
    const ok = await waitForOpenCV();
    if (!ok) throw new Error("OpenCV no terminó de cargar.");

    if (!Object.keys(refs).length) {
      await buildReferences();
    }

    statusEl.textContent = "Solicitando cámara…";

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error("Este navegador no permite acceso a la cámara.");
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    });

    video.srcObject = stream;
    await video.play();

    startScreen.style.display = "none";
    running = true;
    statusEl.textContent = "Apunta a uno de los 24 compositores";

    setInterval(analyseFrame, 650);

  } catch (err) {
    console.error(err);
    statusEl.textContent = "No se pudo iniciar";
    goBtn.disabled = false;
    goBtn.textContent = "✨ Comenzar la magia";
    alert("No se pudo iniciar:\n\n" + (err.message || err));
  }
}

goBtn.onclick = startMagic;
statusEl.textContent = "Mapa Coral 03f · 24 compositores listo";
