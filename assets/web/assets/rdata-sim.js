window.RC = window.RC || {};
window.RC.sim = [
 {q:'La Supervisión reporta programado acumulado 48.07 % y ejecutado 6.62 %. ¿Cómo se mide el 80 %?',o:[
  {t:'Resto: 48.07 - 6.62 = 41.45 puntos; como el atraso supera 20 puntos, se incumple.',p:1,c:'Llega a la conclusión correcta por el camino equivocado: el umbral no se mide en puntos.'},
  {t:'Divido ejecutado entre programado: 6.62 / 48.07 = 13.8 %, muy por debajo del 80 %.',p:2,c:'Correcto: la regla del 80 % es una razón entre ejecutado y programado acumulados.'},
  {t:'Comparo el ejecutado con el 80 % del plazo transcurrido.',p:0,c:'El plazo transcurrido no es el parámetro; se compara con la valorización programada.'}]},
 {q:'Se ordenó el programa acelerado. ¿Cómo controla los plazos del trámite?',o:[
  {t:'Llevo un control de 7 días para que el contratista presente, 5 para el pronunciamiento de la Supervisión y 7 hábiles para que la Entidad observe.',p:2,c:'Correcto: y si la Entidad no observa en su plazo, el programa se considera aprobado.'},
  {t:'Espero a que la Supervisión me avise cuando todo esté listo.',p:0,c:'Riesgoso: si la Entidad deja vencer sus 7 días hábiles, el programa queda aprobado sin su revisión.'},
  {t:'Controlo solo el plazo del contratista, porque los demás son internos.',p:1,c:'Incompleto: el plazo de la Entidad también tiene efecto (aprobación por silencio).'}]},
 {q:'En octubre la medición vuelve a quedar bajo el 80 %. ¿Contra qué calendario se mide?',o:[
  {t:'Contra el calendario original del contrato, que es el vigente para todo.',p:0,c:'Error: la segunda medición se hace contra el nuevo calendario acelerado.'},
  {t:'Contra el promedio entre el calendario original y el acelerado.',p:1,c:'No hay promedios: la regla es clara sobre el nuevo calendario.'},
  {t:'Contra el nuevo calendario acelerado aprobado; si el ejecutado es menor al 80 % de su programado, la Supervisión lo anota e informa.',p:2,c:'Correcto, conforme al art. 207 del Reglamento y a los TDR.'}]},
 {q:'Confirmada la segunda vez bajo el 80 %, ¿necesita apercibir al contratista antes de resolver o intervenir?',o:[
  {t:'Sí, siempre debe darle un nuevo plazo para ponerse al día.',p:1,c:'Es prudente en otras causales, pero en este supuesto el contrato y los TDR permiten actuar sin apercibimiento.'},
  {t:'No: ese retraso puede ser causal de resolución o intervención sin necesidad de apercibimiento, con el informe de la Supervisión como sustento.',p:2,c:'Correcto: aun así, documente bien la medición y la decisión.'},
  {t:'No hace falta ningún documento; basta la decisión del área usuaria.',p:0,c:'Riesgoso: sin informe ni sustento la decisión es fácil de cuestionar.'}]},
 {q:'Si en lugar de esta causal la Entidad usara la vía general por incumplimiento, ¿qué paso es indispensable?',o:[
  {t:'Enviar un correo electrónico al residente de obra.',p:0,c:'No cumple la formalidad del procedimiento de resolución.'},
  {t:'Anotar el requerimiento solo en el cuaderno de incidencias.',p:1,c:'El cuaderno ayuda como prueba, pero no reemplaza la carta notarial.'},
  {t:'Requerir por carta notarial el cumplimiento dentro de un plazo, bajo apercibimiento de resolver, conforme al art. 122 del Reglamento.',p:2,c:'Correcto: el plazo exacto del requerimiento, verificar la norma vigente y el contrato.'}]},
 {q:'Debe calcular la penalidad diaria por mora (obra de 120 días). ¿Qué fórmula usa?',o:[
  {t:'0.10 x monto / (0.25 x 120), sobre el monto del contrato vigente.',p:2,c:'Correcto: para obras de 61 a 120 días el factor F es 0.25 (cláusula 15 y art. 120 del Reglamento).'},
  {t:'0.10 x monto / (0.15 x 120), porque con el diseño el plazo total supera 120 días.',p:1,c:'Revise: la penalidad del componente obra usa su plazo; verifique el contrato antes de sumar plazos.'},
  {t:'Un porcentaje fijo diario que decida la Entidad.',p:0,c:'La penalidad sigue la fórmula pactada; no es discrecional.'}]},
 {q:'La suma de penalidades se acerca al máximo. ¿Qué hace?',o:[
  {t:'Sigo aplicando penalidades sin límite hasta el final.',p:0,c:'Existe un tope del 10 % del monto del contrato vigente, sumando mora y otras penalidades.'},
  {t:'Pido a la Supervisión el control acumulado de mora y otras penalidades y evalúo que llegar al 10 % habilita resolver.',p:2,c:'Correcto: el tope es otra posible causal de resolución.'},
  {t:'Controlo solo la penalidad por mora.',p:1,c:'Incompleto: las otras penalidades también suman para el tope.'}]},
 {q:'La fianza de fiel cumplimiento vence el 28/10/2026. ¿Qué acción toma?',o:[
  {t:'Espero a decidir sobre la resolución y luego veo la fianza.',p:0,c:'Riesgoso: si vence sin renovarse, la Entidad pierde su principal respaldo.'},
  {t:'Requiero la renovación por escrito con anticipación y, si no se renueva antes del vencimiento, la ejecuto (cláusula 9 y art. 118 del Reglamento).',p:2,c:'Correcto: el calendario de garantías debe correr en paralelo a la decisión de fondo.'},
  {t:'Solicito al contratista que me confirme verbalmente que la renovará.',p:1,c:'Insuficiente: necesita constancia escrita y control de la fecha.'}]},
 {q:'Tres valorizaciones (julio, agosto y setiembre) siguen pendientes de pago por la Entidad. ¿Cómo lo maneja?',o:[
  {t:'Las ignoro: el atraso es del contratista.',p:0,c:'Riesgoso: el contratista puede alegar que el impago contribuyó al atraso.'},
  {t:'Pago todas sin revisar para evitar reclamos.',p:1,c:'Pagar lo que tiene observaciones técnicas sin sustento también es un riesgo.'},
  {t:'Pago lo conforme, motivo por escrito las observaciones pendientes y dejo constancia en el expediente.',p:2,c:'Correcto: ordena la posición de la Entidad antes de resolver o intervenir.'}]},
 {q:'¿Intervención económica o resolución del contrato?',o:[
  {t:'Evalúo con informe técnico: la intervención (art. 208) conviene si el contratista aún puede terminar con control de recursos; la resolución, si su capacidad está agotada.',p:2,c:'Correcto: con 13.8 % de avance y componentes sin iniciar, compare costos y tiempos de ambas vías.'},
  {t:'Resuelvo siempre, porque es la única salida.',p:1,c:'Puede ser la decisión final, pero debe compararse con la intervención.'},
  {t:'No hago nada hasta el fin del plazo contractual.',p:0,c:'Riesgoso: la inacción agrava el daño y deja vencer garantías.'}]},
 {q:'Resuelto o intervenido el contrato, ¿qué hace con la obra y con la prueba?',o:[
  {t:'Cierro el acceso a la obra de inmediato, sin actas.',p:0,c:'Sin constatación ni inventario no hay base para liquidar ni para defenderse.'},
  {t:'Realizo constatación física e inventario con la Supervisión y el contratista, y respaldo cada hecho con el cuaderno de incidencias.',p:2,c:'Correcto: el cuaderno de incidencias y las actas son la prueba central ante una controversia.'},
  {t:'Tomo fotografías y las guardo en el área usuaria.',p:1,c:'Ayuda, pero no reemplaza el acta de constatación ni las anotaciones del cuaderno.'}]},
 {q:'Surge la falta de recursos presupuestales para continuar la obra. ¿Qué figura corresponde?',o:[
  {t:'Resolver por incumplimiento del contratista.',p:0,c:'Error: la falta de presupuesto no es incumplimiento del contratista.'},
  {t:'Suspender la obra indefinidamente sin comunicarlo.',p:1,c:'Evita decidir, pero deja la situación sin base legal ni plazo.'},
  {t:'Evaluar la terminación anticipada del art. 121 del Reglamento, sustentada con documentos presupuestales.',p:2,c:'Correcto: es una figura distinta de la resolución por incumplimiento; verificar la norma vigente y el contrato.'}]}
];
