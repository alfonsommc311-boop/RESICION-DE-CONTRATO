# Guía de redacción de lecciones — Resolución de Contrato PRO

Lee TAMBIÉN: `_brief/CASO.md` (hechos verificados), `CLAUDE.md` (reglas) y `assets/web/assets/catalog.js` (tu área).

## Formato exacto (un archivo `assets/web/lessons/<id>.js` por lección, UNA llamada `Lesson.start({...})`)
```
Lesson.start({
  id: '<id>', area: '<AREA EXACTA DEL CATÁLOGO>', areaIcon: '<ICONO DEL ÁREA EXACTO>', icon: '<icon de la lección>',
  title: '<Título EXACTO del catálogo>', subtitle: '<frase que engancha>', norma: '<referencia o principio clave en una frase>',
  intro: '<HTML 3-5 frases: qué y por qué>',
  sections: [ { h: '<Subtítulo>', html: '<HTML>' }, ... (4 a 6) ],
  keypoints: [ '<5-6 frases memorizables>' ],
  flashcards: [ { q:'...', a:'...' }, ... (4-5) ],
  quiz: [ { q:'...', opts:['..','..','..'], correct:<idx 0-based>, why:'...' }, ... (3-4; el examen integrador lleva 12) ]
});
```
`id`, `area`, `areaIcon` y `title` deben coincidir con el catálogo. El campo `norma` va siempre lleno.

## Reglas de HTML/JS
- HTML permitido SOLO: `<p> <b> <ul><li> <ol><li> <table><tr><th><td> <span class="hl">`. Nada de script/style/clases inventadas.
- Cadenas JS con comilla simple; atributos HTML con comilla doble. Escapa apóstrofes como `\'`. SIN comillas tipográficas curvas (usa « » si necesitas citar). Sin markdown ni texto fuera del objeto. El archivo empieza con `Lesson.start({` y termina con `});`.
- Varía el índice de la respuesta correcta entre preguntas.

## Rigor (innegociable)
- Español didáctico para ingenieros residentes, supervisores, coordinadores de obra y funcionarios de la Entidad. Explica SIEMPRE el porqué.
- Artículos con número SOLO los de la lista «CONFIRMADOS» de `CASO.md`. Todo lo demás, por su nombre o en general, con la coletilla **«verificar la norma vigente y el contrato»** al menos una vez por lección (en una sección o en `norma`).
- La regla del 80 % es **ejecutado ÷ programado** (razón), no diferencia de puntos. La **segunda vez** se mide contra el **nuevo calendario acelerado** y puede ser causal de resolución o intervención **sin apercibimiento**.
- Usa el caso real del brief con sus cifras (avance 6.62 % vs 48.07 %, monto S/ 15'597,006.85, 120 días, F = 0.25, penalidad diaria ≈ S/ 51,990, tope S/ 1'559,700.69 en ~30 días, fianza vence 28/10/2026), pero nombra a las partes solo como **la Entidad (una municipalidad)**, **el contratista (un consorcio)** y **la Supervisión**. No uses nombres de personas ni de empresas.
- No des como definitivo lo que `CASO.md` marca NO CONFIRMADO. Nunca prometas resultados en arbitraje.
- No reemplaza asesoría legal: dilo en una frase cuando la lección toque decisiones (resolver, intervenir, ejecutar garantías).

## Cierre
Antes de terminar, valida: `cd /home/user/RESICION-DE-CONTRATO/assets/web && node ../../scripts/validate_lessons.js 2>&1 | grep -E "<tus ids>|OK=|problemas"` (los FALTA de otras áreas se ignoran; corrige cualquier WARN/RUNTIME de tus archivos). Devuelve SOLO la lista de archivos creados.
