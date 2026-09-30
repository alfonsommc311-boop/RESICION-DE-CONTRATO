# PLAN — Resolución de Contrato PRO (app formativa, familia Experto/PRO)

## 1. Propósito
Que residentes, supervisores, coordinadores de obra y funcionarios de la Entidad entiendan y apliquen, sobre un caso real, la ruta que va del atraso de obra a la decisión entre **intervención económica** y **resolución del contrato** bajo la Ley 32069 y su Reglamento: regla del 80 %, programa acelerado y sus plazos, penalidades y tope, garantías, procedimiento y efectos.

## 2. Identidad
| Campo | Valor |
|---|---|
| Nombre visible | Resolución de Contrato PRO |
| applicationId | `com.alfonso.resolucioncontratopro` |
| Puerto InAppLocalhostServer | 9055 (9054 = JPRD PRO; reconfirmar en `ports.md`) |
| Prefijo Store | `rcp:` |
| Clonado de | Obras por Impuestos PRO (shell, motor, validador) |

## 3. Catálogo (14 áreas / 75 lecciones)
1. El caso y el problema · 2. Marco normativo · 3. Retraso y programa acelerado · 4. Penalidades y garantías · 5. Intervención económica · 6. Resolución del contrato · 7. Actores y decisiones · 8. Valorizaciones y control del avance · 9. Ampliaciones, suspensiones y paralización · 10. Diseño y construcción · 11. Calidad, seguridad y observaciones · 12. Después de resolver · 13. Casos resueltos · 14. Decidir bien (integradora, con examen).

## 4. Herramientas (15)
Del caso: caso, situacion (segunda vez bajo el 80 %), calculadoras (80 %, penalidad con F, plazos 7+5+7 hábiles), contrato (cláusulas y 27 penalidades en UIT), checklist, simulador por roles, glosario.
Patrón JPRD PRO (`rtools.js`): diagnóstico con semáforo y 3 acciones, ruta con fechas (14 hitos), plazos con feriados del Perú y cronómetro, liquidación preliminar, 9 escritos modelo, simulacro con puntaje (12), banco de 16 casos, perfil del administrador del contrato.

## 5. Hecho (v1.0)
- [x] Shell Flutter WebView + TTS, puerto propio, Impeller OFF.
- [x] Catálogo, motor, validador, guía de redacción y brief con hechos verificados.
- [x] 75 lecciones en 14 áreas (validador en 0 problemas).
- [x] 15 herramientas con guardado local.
- [x] Ícono propio (glifo `resolucion`, dorado→marrón con sello rojo), íconos adaptativos y splash.
- [x] Días hábiles con feriados del Perú.
- [x] Workflow Build APK → release `apk-latest`.

## 6. Pendiente
- [ ] Cotejar monto vigente y carta fianza (contrato vs informe) y actualizar valores por defecto.
- [ ] Firma de release (keystore).
- [ ] Fila en `ports.md` (9055, ícono dorado #ca8a04 → #1c1917, glifo contrato partido con sello rojo) y `apps_db.py construir && indexar` en la PC del usuario.
