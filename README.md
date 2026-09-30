# Resolución de Contrato PRO · Ley 32069

App formativa Android (Flutter WebView + voz, sin internet) sobre resolución de contrato e intervención económica de obra, construida sobre un caso real: Informe Mensual N° 03 (setiembre 2026), Contrato N° 008-2025-MML-OGA y TDR de Supervisión.

- **39 lecciones** en 8 áreas (regla del 80 %, programa acelerado, penalidades, garantías, intervención, resolución, actores, examen), con audio, fichas y quiz.
- **7 herramientas del caso**: el caso, mi situación (segunda vez bajo el 80 %), calculadoras, contrato y TDR, checklists, simulador por roles y glosario.

## Instalar en el celular
Descarga `resolucion-obra.apk` desde **Releases → Resolución Obra (APK)** y ábrelo en el celular (permitir orígenes desconocidos).

## Desarrollo
```
cd assets/web && node ../../scripts/validate_lessons.js   # lecciones: problemas=0
flutter pub get && flutter analyze && flutter test
scripts/build_apk.sh                                       # requiere Android SDK
```
Vista previa web: `cd assets/web && python3 -m http.server 9054` y abrir http://localhost:9054/.

Herramienta formativa; no es asesoría legal. Verificar la norma vigente y el contrato.
