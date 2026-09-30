# PLAN — Resolución de Contrato PRO (app formativa, familia Experto/PRO)

## 1. Propósito
Que residentes, supervisores, coordinadores de obra y funcionarios de la Entidad entiendan y apliquen, sobre un caso real, la ruta que va del atraso de obra a la decisión entre **intervención económica** y **resolución del contrato** bajo la Ley 32069 y su Reglamento: regla del 80 %, programa acelerado y sus plazos, penalidades y tope, garantías, procedimiento y efectos.

## 2. Identidad
| Campo | Valor |
|---|---|
| Nombre visible | Resolución de Contrato PRO |
| applicationId | `com.alfonso.resolucioncontratopro` |
| Puerto InAppLocalhostServer | 9054 (reconfirmar en `ports.md`) |
| Prefijo Store | `rcp:` |
| Clonado de | Obras por Impuestos PRO (shell, motor, validador) |

## 3. Catálogo (8 áreas / 39 lecciones)
1. El caso y el problema · 2. Marco normativo · 3. Retraso y programa acelerado · 4. Penalidades y garantías · 5. Intervención económica · 6. Resolución del contrato · 7. Actores y decisiones · 8. Decidir bien (integradora, con examen).

## 4. Herramientas del caso
caso.html (datos e hitos), situacion.html (segunda vez bajo el 80 %: fechas y verificaciones), calculadoras.html (80 %, penalidad con F, plazos 7+5+7 hábiles), contrato.html (cláusulas y 27 penalidades en UIT), checklist.html, simulador.html (por roles), glosario.html.

## 5. Hecho (v1.0)
- [x] Shell Flutter WebView + TTS, puerto propio, Impeller OFF.
- [x] Catálogo, motor, validador, guía de redacción y brief con hechos verificados.
- [x] 39 lecciones (validador en 0 problemas).
- [x] 7 herramientas con guardado local.
- [x] Workflow Build APK → release `apk-latest`.

## 6. Pendiente
- [ ] Cotejar monto vigente y carta fianza (contrato vs informe) y actualizar valores por defecto.
- [ ] Feriados en el cálculo de días hábiles.
- [ ] Ícono propio con `scripts/make_icon.py` + flutter_launcher_icons; firma de release (keystore).
- [ ] Escritos modelo (carta notarial de requerimiento, solicitud de ampliación, informe de la Supervisión a la Entidad).
- [ ] Fila en `ports.md` (9054) y `apps_db.py construir && indexar` en la PC del usuario.
