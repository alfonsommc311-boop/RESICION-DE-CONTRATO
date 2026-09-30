# CLAUDE.md – Resolución de Contrato (Ley 32069)

App Flutter (Android) de aprendizaje sobre resolución de contrato e intervención económica de obra, basada en el caso de la Central Distrital de Seguridad Ciudadana (MML, Cercado de Lima).

## Estructura
- `lib/logic.dart` – cálculos puros (F, penalidad, regla del 80 %, plazos). Tiene tests en `test/logic_test.dart`.
- `lib/data.dart` – contenido: penalidades, quiz, checklists, glosario, simulador.
- `lib/screens/` – una pantalla por módulo; `lib/main.dart` – inicio con grilla de módulos.
- `_brief/` – resumen de los documentos fuente.
- `index.html`, `sw.js`, `manifest.json`, `icons/` – versión web instalable (PWA), independiente de Flutter.

## Comandos
- `flutter pub get && flutter analyze && flutter test`
- `scripts/build_apk.sh` (requiere Android SDK). En GitHub, el workflow `Build APK` compila y sube el APK como artefacto.

## Reglas
- Español en todo el contenido visible.
- No inventar números de artículo: citar solo los confirmados en el contrato, el TDR o la norma (ver `_brief/CASO.md`).
- La regla del 80 % es ejecutado ÷ programado (no puntos porcentuales) y la segunda vez se mide contra el nuevo calendario.
- Herramienta educativa, no asesoría legal.
