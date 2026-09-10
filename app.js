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
  },

  rachmaninoff: {
    name: "Sergei Rachmaninoff",
    dates: "1873–1943",
    period: "ROMANTICISMO TARDÍO / SIGLO XX",
    work: "Vísperas (Vigilia de toda la noche), Op. 37",
    listen: "https://www.youtube.com/results?search_query=Rachmaninoff+All+Night+Vigil+Op+37"
  },
  stravinsky: {
    name: "Igor Stravinsky",
    dates: "1882–1971",
    period: "SIGLO XX",
    work: "Symphony of Psalms",
    listen: "https://www.youtube.com/results?search_query=Stravinsky+Symphony+of+Psalms"
  },
  britten: {
    name: "Benjamin Britten",
    dates: "1913–1976",
    period: "SIGLO XX",
    work: "War Requiem, Op. 66",
    listen: "https://www.youtube.com/results?search_query=Benjamin+Britten+War+Requiem+Op+66"
  },
  poulenc: {
    name: "Francis Poulenc",
    dates: "1899–1963",
    period: "SIGLO XX",
    work: "Gloria, FP 177",
    listen: "https://www.youtube.com/results?search_query=Francis+Poulenc+Gloria+FP+177"
  },
  messiaen: {
    name: "Olivier Messiaen",
    dates: "1908–1992",
    period: "SIGLO XX",
    work: "Cinq rechants",
    listen: "https://www.youtube.com/results?search_query=Olivier+Messiaen+Cinq+rechants"
  },
  part: {
    name: "Arvo Pärt",
    dates: "1935–",
    period: "CONTEMPORÁNEA",
    work: "Te Deum",
    listen: "https://www.youtube.com/results?search_query=Arvo+Part+Te+Deum"
  },
  lauridsen: {
    name: "Morten Lauridsen",
    dates: "1943–",
    period: "CONTEMPORÁNEA",
    work: "O Magnum Mysterium",
    listen: "https://www.youtube.com/results?search_query=Morten+Lauridsen+O+Magnum+Mysterium"
  },
  whitacre: {
    name: "Eric Whitacre",
    dates: "1970–",
    period: "CONTEMPORÁNEA",
    work: "Five Hebrew Love Songs",
    listen: "https://www.youtube.com/results?search_query=Eric+Whitacre+Five+Hebrew+Love+Songs"
  },
  esenvalds: {
    name: "Ēriks Ešenvalds",
    dates: "1977–",
    period: "CONTEMPORÁNEA",
    work: "Stars",
    listen: "https://www.youtube.com/results?search_query=Eriks+Esenvalds+Stars"
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
  statusEl.textContent = "Preparando los 33 compositores…";

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


const extendedInfo = {
  hildegard: {
    bio: "Abadesa benedictina, compositora, poeta, escritora y visionaria. Fue una de las figuras intelectuales y artísticas más extraordinarias de la Europa medieval.",
    legacy: "Compuso música vocal destinada principalmente a su comunidad religiosa. Sus melodías poseen una libertad y una amplitud poco comunes en el canto litúrgico de su época, y utilizan la voz como vehículo de contemplación y expresión espiritual.",
    listen: "Observa cómo la melodía parece elevarse y descender libremente alrededor de las palabras. Todavía no estamos ante un coro polifónico como el de siglos posteriores: una misma línea melódica concentra toda la expresión.",
    curiosity: "Hildegard describía muchas de sus obras como nacidas de las visiones que experimentaba desde niña. Música, poesía, naturaleza, espiritualidad y conocimiento formaban para ella parte de un mismo universo."
  },
  leonin: {
    bio: "Compositor francés asociado a la Escuela de Notre-Dame de París y uno de los primeros autores de polifonía cuyo nombre conocemos. La principal noticia sobre él procede del llamado Anónimo IV, un teórico medieval que lo elogió como maestro del organum.",
    legacy: "A Léonin se le atribuye la organización del Magnus Liber Organi, una gran colección destinada al servicio litúrgico. Su música representa un momento decisivo: sobre el canto llano aparece una segunda voz elaborada, y la tradición coral occidental empieza a adquirir una verdadera dimensión polifónica.",
    listen: "En Viderunt omnes escucha cómo una voz sostiene lentamente el canto gregoriano mientras otra se mueve con mucha mayor libertad por encima. Es como si una antigua línea de canto comenzara, por primera vez, a abrir espacio para otra voz independiente.",
    curiosity: "Mucho de lo que sabemos de Léonin fue escrito décadas después de su actividad. Su figura está envuelta en cierta incertidumbre histórica, pero su nombre quedó ligado para siempre al gran laboratorio musical que fue Notre-Dame de París."
  },
  perotin: {
    bio: "Compositor de la Escuela de Notre-Dame activo alrededor del cambio del siglo XII al XIII. Conocido como Perotinus Magnus, llevó mucho más lejos las técnicas polifónicas cultivadas por Léonin.",
    legacy: "Pérotin amplió el organum hasta tres y cuatro voces. Con él, la polifonía dejó de ser solamente una voz añadida al canto y comenzó a convertirse en una arquitectura sonora de varias líneas coordinadas, uno de los grandes pasos hacia la escritura coral occidental.",
    listen: "En Viderunt omnes presta atención a la sensación de espacio creada por cuatro voces: el tenor mantiene notas prolongadas mientras las voces superiores tejen figuras rítmicas entre sí. Compararlo con Léonin permite oír, casi de inmediato, cuánto había crecido la polifonía.",
    curiosity: "Viderunt omnes y Sederunt principes figuran entre los ejemplos más célebres del organum a cuatro voces que han llegado hasta nosotros. Su monumentalidad sonora parece hecha a la medida de la nueva catedral gótica de Notre-Dame."
  },
  machaut: {
    bio: "Poeta y compositor francés del siglo XIV, figura central del Ars Nova. Fue uno de los primeros grandes creadores de la historia occidental en dejar una obra extensa y cuidadosamente preservada bajo su propio nombre.",
    legacy: "Su Messe de Nostre Dame es una de las primeras versiones completas del Ordinario de la misa concebidas como un ciclo polifónico por un solo compositor. En ella, las distintas secciones empiezan a sentirse como partes de una obra mayor y coherente.",
    listen: "En la Messe de Nostre Dame escucha la densidad de las cuatro voces y el modo en que el ritmo organiza la polifonía. Frente a Léonin y Pérotin, la escritura ya no parece un experimento alrededor del canto llano: ahora posee una identidad formal mucho más definida.",
    curiosity: "Machaut no fue solo músico: también fue uno de los poetas más célebres de su tiempo. En su obra, poesía y música forman dos caras de una misma personalidad artística."
  },
  josquin: {
    bio: "Compositor franco-flamenco del Renacimiento, celebrado en toda Europa por la maestría con que trató las voces y el texto. Su prestigio fue tan grande que durante siglos muchas obras ajenas llegaron a circular bajo su nombre.",
    legacy: "Josquin convirtió la imitación entre voces en un recurso de enorme claridad expresiva. Las entradas sucesivas de cada línea crean una conversación musical en la que el texto puede escucharse y comprenderse con una naturalidad nueva.",
    listen: "En Il grillo escucha cómo las voces se imitan con gestos breves, ágiles y casi juguetones. Aunque es una pieza secular, permite percibir con gran claridad el dominio renacentista de la imitación y del equilibrio entre las partes.",
    curiosity: "Su fama fue tan extraordinaria que el impresor Ottaviano Petrucci publicó en 1502 un volumen dedicado enteramente a sus misas, algo excepcional para un compositor vivo."
  },
  victoria: {
    bio: "Sacerdote y compositor español del Renacimiento tardío, considerado una de las grandes figuras de la polifonía sacra. Desarrolló buena parte de su carrera entre Roma y España.",
    legacy: "Victoria llevó el lenguaje polifónico renacentista hacia una expresión intensamente espiritual y dramática. Su escritura conserva la claridad y el equilibrio contrapuntístico, pero con una especial sensibilidad por la emoción del texto litúrgico.",
    listen: "En O magnum mysterium observa cómo las entradas de las voces parecen surgir con serenidad y cómo la armonía se ilumina en momentos clave del texto. La música no busca exhibición: crea una atmósfera de asombro y contemplación.",
    curiosity: "A diferencia de muchos compositores de su época, Victoria se dedicó casi exclusivamente a la música sacra. Esa concentración contribuye a la personalidad tan coherente y reconocible de su obra."
  },
  palestrina: {
    bio: "Compositor italiano del Renacimiento y una de las figuras emblemáticas de la polifonía sacra. Trabajó durante gran parte de su vida en importantes instituciones musicales de Roma.",
    legacy: "Su estilo se convirtió en modelo de equilibrio contrapuntístico, fluidez melódica y claridad vocal. Durante siglos, el llamado stile antico tomó su escritura como referencia para enseñar y comprender el contrapunto coral.",
    listen: "En Sicut cervus escucha cómo cada voz entra con suavidad y cómo las líneas se entrelazan sin perder transparencia. El resultado parece continuo y sereno: ninguna voz domina, pero todas contribuyen a una sola arquitectura sonora.",
    curiosity: "La tradición llegó a presentarlo como el compositor que 'salvó' la polifonía durante el Concilio de Trento. La historia real es mucho más compleja, pero la leyenda muestra hasta qué punto su música llegó a representar el ideal de claridad de la polifonía sacra."
  },
  monteverdi: {
    bio: "Compositor italiano situado en el gran puente entre Renacimiento y Barroco. Trabajó primero en Mantua y más tarde en Venecia, donde fue maestro de capilla de San Marcos.",
    legacy: "Monteverdi transformó la escritura vocal al colocar la expresión del texto en el centro. En sus obras sacras conviven la antigua polifonía renacentista y el nuevo lenguaje concertante barroco, con contrastes de masas, solistas e instrumentos.",
    listen: "En el Vespro della Beata Vergine escucha los cambios de escala: momentos íntimos alternan con sonoridades monumentales. Fíjate también en cómo las voces dialogan con los instrumentos y cómo el espacio parece convertirse en parte de la música.",
    curiosity: "Monteverdi defendió una 'seconda pratica' en la que las reglas podían ceder ante las necesidades expresivas del texto. Esa idea provocó una de las polémicas musicales más célebres de su tiempo."
  },
  schutz: {
    bio: "Compositor alemán del primer Barroco y una figura esencial en la formación de la tradición coral germánica. Estudió en Venecia y asimiló profundamente el lenguaje italiano.",
    legacy: "Schütz llevó a tierras alemanas la expresividad y el sentido espacial aprendidos en Italia. Sus obras muestran cómo el texto bíblico puede convertirse en drama sonoro mediante contrastes de voces, grupos y colores tímbricos.",
    listen: "En Musikalische Exequien escucha la claridad con que las palabras organizan la música. Observa cómo los grupos vocales cambian de textura y cómo la obra combina recogimiento, retórica y una extraordinaria sensación de arquitectura espiritual.",
    curiosity: "Schütz estudió con Giovanni Gabrieli en Venecia. Ese contacto directo con la tradición policoral de San Marcos dejó una huella profunda en su manera de pensar el espacio y las voces."
  },
  bach: {
    bio: "Compositor alemán del Barroco tardío y una de las cumbres de la historia de la música occidental. Su actividad estuvo estrechamente ligada a la iglesia, la enseñanza y la vida musical de Leipzig.",
    legacy: "Bach llevó la escritura coral a una síntesis extraordinaria de contrapunto, armonía, retórica y teología musical. En sus coros cada voz posee independencia, pero todas participan de una construcción de enorme coherencia.",
    listen: "En la Misa en si menor presta atención a cómo el coro puede pasar de una textura contrapuntística muy densa a momentos de gran claridad homofónica. Escucha también cómo una idea musical puede viajar de voz en voz sin perder dirección.",
    curiosity: "La Misa en si menor no nació como una obra compuesta de principio a fin en un solo momento: Bach reunió y reelaboró música escrita a lo largo de muchos años para crear la gran versión que conocemos."
  },
  handel: {
    bio: "Compositor nacido en Alemania y establecido en Londres, donde desarrolló buena parte de su carrera. Fue maestro de la ópera y, más tarde, del oratorio inglés.",
    legacy: "Händel convirtió el coro en protagonista dramático. En sus oratorios, la masa coral puede representar pueblos, multitudes, creyentes o comentaristas de la acción, combinando monumentalidad, claridad y una enorme eficacia teatral.",
    listen: "En Messiah escucha cómo el coro alterna pasajes fugados con grandes acordes colectivos. Fíjate en la capacidad de Händel para hacer que una idea sencilla crezca hasta producir una sensación de celebración pública.",
    curiosity: "El célebre Hallelujah pertenece a Messiah, pero la costumbre de ponerse de pie durante su interpretación se asocia a una tradición posterior vinculada, según la leyenda, al rey Jorge II."
  },
    vivaldi: {
    bio: "Sacerdote, violinista y compositor veneciano del Barroco, conocido como el 'Prete Rosso'. Aunque hoy se le recuerda especialmente por sus conciertos, escribió también una importante producción de música sacra.",
    legacy: "En su música coral, Vivaldi trasladó al ámbito vocal la energía rítmica, el contraste y el brillo instrumental característicos de su estilo. Sus coros pueden alternar solemnidad, impulso teatral y una luminosidad sonora inmediatamente reconocible.",
    listen: "En Gloria RV 589 escucha el comienzo: el coro entra con una energía casi instrumental, apoyado por ritmos muy definidos. Después compara ese esplendor con los movimientos más íntimos; el contraste es una de las claves expresivas de la obra.",
    curiosity: "Buena parte de la música sacra de Vivaldi estuvo vinculada al Ospedale della Pietà de Venecia, institución célebre por la extraordinaria formación musical de las jóvenes que vivían allí."
  },
  haydn: {
    bio: "Compositor austríaco y figura fundamental del Clasicismo. Tras décadas al servicio de la familia Esterházy, alcanzó enorme prestigio internacional y en sus últimos años creó algunas de sus obras corales más ambiciosas.",
    legacy: "Haydn dio al oratorio clásico una escala monumental sin perder claridad. En sus grandes obras corales, el coro participa tanto en la narración como en la celebración colectiva, dentro de una arquitectura equilibrada y llena de contrastes.",
    listen: "En La Creación escucha el pasaje que conduce a 'Y se hizo la luz': Haydn prepara la llegada de la palabra 'Licht' con una tensión extraordinaria y la resuelve en una explosión sonora del coro y la orquesta. Es uno de los grandes efectos dramáticos del repertorio coral.",
    curiosity: "La Creación estuvo inspirada en parte por los grandes oratorios de Händel que Haydn escuchó durante sus viajes a Londres. Aquella experiencia contribuyó decisivamente a su deseo de escribir un oratorio de gran formato."
  },
  mozart: {
    bio: "Compositor austríaco del Clasicismo y una de las figuras centrales de la música occidental. Desde niño estuvo familiarizado con la música religiosa y a lo largo de su vida escribió misas, motetes, vísperas y otras obras para voces y orquesta.",
    legacy: "Mozart reunió tradición contrapuntística, claridad clásica y una extraordinaria sensibilidad teatral. En su escritura coral, el texto litúrgico puede adquirir una intensidad casi operística sin perder nobleza ni equilibrio formal.",
    listen: "En el Réquiem presta atención al contraste entre la gravedad del Introitus y la fuerza rítmica del Dies irae. En el Lacrimosa, escucha cómo las frases parecen avanzar con dificultad y crecer poco a poco hasta alcanzar una intensa expresión de duelo.",
    curiosity: "Mozart murió antes de terminar el Réquiem. La obra fue completada principalmente por su discípulo Franz Xaver Süssmayr, circunstancia que alimentó durante generaciones leyendas y debates sobre qué partes proceden directamente de Mozart."
  },
  beethoven: {
    bio: "Compositor alemán situado entre el Clasicismo y el Romanticismo. Transformó profundamente las formas heredadas y convirtió la experiencia musical en una expresión de enorme fuerza personal, ética y universal.",
    legacy: "Con Beethoven, el coro pudo entrar en territorios hasta entonces poco habituales. El final de la Novena Sinfonía integra solistas y coro dentro de una sinfonía de dimensiones monumentales, abriendo una posibilidad que influiría profundamente en los compositores posteriores.",
    listen: "En el cuarto movimiento de la Novena escucha primero cómo aparece gradualmente el tema de la 'Oda a la alegría'. Cuando finalmente entran las voces, la melodía ya resulta familiar: Beethoven convierte ese reconocimiento en una poderosa sensación de comunidad y fraternidad.",
    curiosity: "En el estreno de la Novena, Beethoven estaba ya profundamente sordo. La tradición cuenta que, al terminar, una de las intérpretes tuvo que hacerlo girar para que pudiera ver los aplausos del público."
      },
  schubert: {
  bio: "Compositor austríaco y una de las grandes figuras del primer Romanticismo. En su breve vida creó una obra extraordinariamente abundante, en la que la voz ocupa un lugar central. Además de sus célebres lieder, escribió misas, motetes y numerosas obras para conjuntos vocales.",
  legacy: "Schubert llevó al coro la sensibilidad íntima y lírica propia del Romanticismo. Sus páginas corales combinan melodías de gran naturalidad con una armonía capaz de cambiar de luz y de emoción en pocos compases.",
  listen: "En el Sanctus de la Misa en mi bemol mayor escucha cómo una idea inicialmente serena va creciendo hasta adquirir una amplitud casi sinfónica. Observa especialmente los contrastes entre momentos íntimos y grandes expansiones del coro.",
  curiosity: "Schubert murió con apenas 31 años. A pesar de su corta vida dejó más de seiscientas canciones, además de sinfonías, música de cámara, obras para piano y una importante producción coral y religiosa."
},
mendelssohn: {
  bio: "Compositor, pianista y director alemán, figura esencial del Romanticismo. Cultivó intensamente la música coral y tuvo además un papel decisivo en la recuperación de grandes obras del pasado, especialmente la música de Johann Sebastian Bach.",
  legacy: "Mendelssohn renovó la tradición coral combinando la claridad contrapuntística heredada de Bach con el lirismo romántico. Sus oratorios y motetes ayudaron a devolver al coro un lugar central en la vida musical europea del siglo XIX.",
  listen: "En Denn er hat seinen Engeln befohlen escucha la transparencia de las voces y la serenidad con que se despliega la armonía. Las frases parecen sostenerse unas a otras creando una sensación de protección y recogimiento.",
  curiosity: "En 1829, con apenas veinte años, Mendelssohn dirigió en Berlín una histórica interpretación de la Pasión según San Mateo de Bach. El acontecimiento fue fundamental para el redescubrimiento moderno de la música de Bach."
},
schumann: {
  bio: "Compositor alemán y una de las personalidades más representativas del Romanticismo. Aunque es especialmente conocido por su música para piano y sus canciones, también dedicó una parte importante de su producción a la música coral, tanto religiosa como secular.",
  legacy: "Schumann trasladó al coro la intensidad emocional y el lenguaje poético característicos del Romanticismo. Sus obras corales exploran el color armónico y la relación entre música y palabra con una sensibilidad profundamente literaria.",
  listen: "En Zigeunerleben escucha cómo Schumann utiliza cambios de dinámica, ritmo y textura para convertir al coro en narrador de una escena llena de movimiento. Las voces pasan rápidamente de la evocación al impulso casi teatral.",
  curiosity: "Antes de decidirse plenamente por la música, Schumann dudó entre convertirse en músico o escritor. Esa pasión por la literatura permaneció durante toda su vida y explica en parte la extraordinaria atención que concedía al texto."
},
brahms: {
  bio: "Compositor alemán del Romanticismo y uno de los grandes maestros de la escritura coral del siglo XIX. Profundo conocedor de la música antigua, estudió intensamente a Bach, Händel y los maestros del Renacimiento, integrando esa tradición en un lenguaje profundamente personal.",
  legacy: "Brahms consiguió unir el rigor del contrapunto antiguo con la riqueza armónica y emocional del Romanticismo. Su música coral puede ser monumental, íntima o contemplativa, y constituye uno de los grandes puentes entre la tradición y la modernidad.",
  listen: "En Ein deutsches Requiem escucha cómo Brahms utiliza el coro no para describir la muerte de manera dramática, sino para ofrecer consuelo a quienes permanecen vivos. Presta atención a la extraordinaria relación entre las palabras y el color de la armonía.",
  curiosity: "A diferencia del réquiem litúrgico tradicional en latín, Brahms seleccionó personalmente textos de la Biblia en alemán. Por eso Ein deutsches Requiem es una obra profundamente espiritual, pero no una misa de difuntos convencional."
}
};
const moreBtn=document.getElementById("moreBtn"), moreInfo=document.getElementById("moreInfo");
const bioText=document.getElementById("bioText"), legacyText=document.getElementById("legacyText");
const listenText=document.getElementById("listenText"), curiosityText=document.getElementById("curiosityText");
moreBtn.onclick=()=>{const opening=moreInfo.classList.contains("hidden");moreInfo.classList.toggle("hidden");moreBtn.textContent=opening?"− VER MENOS":"＋ SABER MÁS";};
function populateExtendedInfo(id){
 const x=extendedInfo[id];
 if(x){bioText.textContent=x.bio;legacyText.textContent=x.legacy;listenText.textContent=x.listen;curiosityText.textContent=x.curiosity;moreBtn.style.display="";}
 else{bioText.textContent=legacyText.textContent=listenText.textContent=curiosityText.textContent="";moreBtn.style.display="none";}
 moreInfo.classList.add("hidden");moreBtn.textContent="＋ SABER MÁS";
}function showCard(id) {
  const p = people[id];
  if (!p) return;

  periodEl.textContent = p.period;
  nameEl.textContent = p.name;
  datesEl.textContent = p.dates;
  workEl.textContent = p.work;
  listenEl.href = p.listen;
populateExtendedInfo(id);
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
    statusEl.textContent = "Apunta a uno de los 33 compositores";

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
statusEl.textContent = "Mapa Coral 03g · 33 compositores listo";
