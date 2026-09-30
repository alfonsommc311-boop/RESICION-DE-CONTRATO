# Resolución de Contrato PRO · Ley 32069

App formativa Android (Flutter WebView + voz, sin internet) sobre resolución de contrato e intervención económica de obra, construida sobre un caso real: Informe Mensual N° 03 (setiembre 2026), Contrato N° 008-2025-MML-OGA y TDR de Supervisión.

- **75 lecciones en 14 áreas** (regla del 80 %, programa acelerado, penalidades, garantías, intervención, resolución, actores, valorizaciones, ampliaciones, diseño y construcción, calidad, después de resolver, casos resueltos y examen), con audio, fichas y quiz.
- **15 herramientas**: el caso, mi situación, diagnóstico con semáforo, ruta con fechas, calculadoras, plazos con feriados del Perú, liquidación preliminar, 9 escritos modelo, contrato y TDR, checklists, simulacro con puntaje, simulador por roles, banco de 16 casos, perfil del administrador y glosario.

## Instalar en el celular
Descarga `resolucion-obra.apk` desde **Releases → Resolución Obra (APK)** y ábrelo en el celular (permitir orígenes desconocidos).

## Desarrollo
```
cd assets/web && node ../../scripts/validate_lessons.js   # lecciones: problemas=0
flutter pub get && flutter analyze && flutter test
scripts/build_apk.sh                                       # requiere Android SDK
```
Vista previa web: `cd assets/web && python3 -m http.server 9055` y abrir http://localhost:9055/.

Herramienta formativa; no es asesoría legal. Verificar la norma vigente y el contrato.
