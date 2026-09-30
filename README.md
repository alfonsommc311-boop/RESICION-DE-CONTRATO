# Resolución de Contrato de Obra · Ley 32069

App de aprendizaje (Flutter / Android) basada en el Contrato N° 008-2025-MML-OGA, el TDR de Supervisión y el Informe Mensual N° 03.

## Instalar el APK en el celular
1. En GitHub: pestaña **Actions** → último run de **Build APK** → descargar el artefacto `resolucion-obra-apk` (zip con `app-release.apk`).
2. Pasarlo al celular, abrirlo y permitir "instalar apps de origen desconocido".

## Compilar localmente
```
flutter pub get
flutter test
scripts/build_apk.sh
```

## Versión web instalable (PWA)
`index.html` funciona en cualquier navegador y se instala desde Chrome (Instalar aplicación) o Safari (Agregar a pantalla de inicio). Para publicarla: Settings → Pages → Deploy from a branch → carpeta `/ (root)`.

Herramienta educativa; no es asesoría legal.
