# CLAUDE.md – Resolución de Contrato PRO (reglas del proyecto)

App formativa Android de la familia «Experto/PRO» (Flutter WebView + TTS, sin internet), sobre resolución de contrato e intervención económica de obra bajo la Ley 32069, aplicada al caso de una obra municipal atrasada. Lee `PLAN.md` y `_brief/CASO.md` antes de tocar nada.

## Identidad
- Nombre: **Resolución de Contrato PRO** · `com.alfonso.resolucioncontratopro` · prefijo de storage `rcp` · puerto **9054** (9053 = Obras por Impuestos PRO; reconfirmar en `ports.md` antes de compilar).
- Colores: azul profundo del shell heredado con acento dorado (`assets/web/assets/styles.css`).
- Clon estructural de Obras por Impuestos PRO (shell + motor de lecciones + herramientas).

## Estructura
- `assets/web/index.html` home · `lesson.html` + `assets/engine.js` motor · `assets/catalog.js` catálogo (8 áreas, 39 lecciones) · `lessons/*.js` una lección por archivo (`Lesson.start({...})`).
- Herramientas del caso: `caso.html`, `situacion.html`, `calculadoras.html`, `contrato.html`, `checklist.html`, `simulador.html`, `glosario.html`; funciones puras en `assets/caso.js`.
- `lib/main.dart` shell Flutter (InAppLocalhostServer + flutter_tts). `_brief/` hechos verificados y guía de redacción. `scripts/validate_lessons.js` validador.

## Reglas de contenido
- Español didáctico. Artículos con número **solo** los CONFIRMADOS en `_brief/CASO.md`; lo demás por su nombre y con la coletilla «verificar la norma vigente y el contrato».
- La regla del 80 % es **ejecutado ÷ programado** (razón, no puntos). La **segunda vez** se mide contra el nuevo calendario acelerado y puede ser causal de resolución o intervención **sin apercibimiento**.
- Cifras del caso permitidas (informe N° 03, contrato, TDR). Partes solo como «la Entidad», «el contratista», «la Supervisión»; sin nombres de personas.
- Herramienta formativa, no reemplaza asesoría legal (disclaimer en home y herramientas). Fecha de corte visible en el home.
- Ids de lección ASCII kebab-case. HTML permitido en lecciones: p, b, ul/ol/li, table/tr/th/td, span.hl.

## Validación
`cd assets/web && node ../../scripts/validate_lessons.js` → debe dar `problemas=0 faltantes=0 huerfanos=0`.
`flutter pub get && flutter analyze && flutter test`. Vista previa web: `cd assets/web && python3 -m http.server 9054`.

## Compilación
`scripts/build_apk.sh` (requiere Android SDK). En GitHub, el workflow `Build APK` valida lecciones, compila y publica el APK en el release `apk-latest`.
