MAPA CORAL · PROTOTIPO WEBAR 01
================================

Qué hace
-------
Reconoce tres zonas visuales del Mapa Maestro 09 usando la cámara:
1. Hildegard von Bingen
2. Giovanni Pierluigi da Palestrina
3. John Rutter

Cuando reconoce una, muestra una tarjeta flotante con fechas, período,
obra representativa y un botón para escucharla.

Cómo probarlo en iPhone
-----------------------
La cámara del navegador exige HTTPS. Por eso no basta con abrir index.html
directamente desde Archivos.

Opción sencilla:
1. Sube ESTA CARPETA completa a un hosting estático HTTPS (GitHub Pages,
   Netlify, Cloudflare Pages, etc.).
2. Abre la URL publicada en Safari.
3. Pulsa "Comenzar la magia" y permite acceso a la cámara.
4. Apunta al retrato correspondiente en el Mapa Maestro 09.
5. Para esta prueba inicial, mantén el iPhone aproximadamente paralelo al mapa.

Archivos
--------
index.html       interfaz
style.css        diseño
app.js           reconocimiento visual
targets/         tres recortes exactos del Mapa Maestro 09

Nota técnica
------------
Es una prueba de concepto deliberadamente conservadora: no modifica el mapa.
Usa OpenCV.js y comparación multiescala de imagen. Si la prueba visual resulta
satisfactoria, la siguiente versión puede migrar a seguimiento de imagen más
robusto y extenderse a los 33 compositores.
