Lesson.start({
  id: 'expediente-tecnico-y-monto-de-obra', area: 'Diseño y construcción', areaIcon: '📐', icon: '📚',
  title: 'Expediente técnico y monto de obra',
  subtitle: 'El monto que se firma no es el monto que se construye: se ajusta con el expediente.',
  norma: 'Art. 175.1 del Reglamento de la Ley 32069 (monto de obra estimado que se ajusta con el expediente técnico) y cláusula 16 del contrato (terminación anticipada por el art. 121 si el presupuesto del expediente supera el porcentaje del numeral 175.1). Verificar la norma vigente y el contrato.',
  intro: '<p>En diseño y construcción, cuando se firma el contrato el expediente técnico todavía no existe. Por eso el <b>monto de obra es un estimado</b> que se ajusta cuando el expediente se aprueba (art. 175.1 del Reglamento). En el caso, el contrato decía S/ 12\'627,981.34 para la obra, pero el informe de setiembre trabaja con <b>S/ 15\'597,006.85</b>. Esta lección explica por qué ocurre, qué límites tiene ese ajuste y por qué es indispensable saber cuál es el monto vigente antes de calcular penalidades, topes o garantías.</p>',
  sections: [
    { h: 'Estimado al firmar, definitivo al aprobar',
      html: '<p>El contrato del caso fija el componente obra en <b>S/ 12\'627,981.34</b> como estimado. Cuando la Entidad aprueba el expediente técnico, su presupuesto se convierte en la referencia del componente obra, dentro de los límites del numeral 175.1 del Reglamento. El monto total del contrato original (S/ 12\'961,415.86) incluye además los S/ 333,434.52 del diseño.</p>' },
    { h: 'La discrepancia del caso',
      html: '<table><tr><th>Fuente</th><th>Monto de obra</th></tr><tr><td>Contrato original</td><td>S/ 12\'627,981.34 (estimado)</td></tr><tr><td>Informe N° 03 de la Supervisión</td><td>S/ 15\'597,006.85</td></tr><tr><td>Diferencia</td><td>S/ 2\'969,025.51 (≈ 23.5 % más)</td></tr></table><p>La explicación más probable es que el informe usa el presupuesto del expediente aprobado, pero <span class="hl">hay que cotejarlo con el documento de aprobación</span> antes de darlo por vigente. El adelanto directo pagado (S/ 1\'559,700.69) es exactamente el 10 % de S/ 15\'597,006.85, lo que sugiere que ese es el monto con el que se viene operando.</p>' },
    { h: 'Por qué importa el monto vigente',
      html: '<ul><li><b>Penalidad por mora:</b> con S/ 15\'597,006.85, F = 0.25 y 120 días, ≈ S/ 51,990 por día; con el monto original sería menor.</li><li><b>Tope del 10 %:</b> se calcula sobre el monto del contrato vigente; con el monto del informe, el tope de la obra es S/ 1\'559,700.69, alcanzable en unos 30 días de mora.</li><li><b>Garantía de fiel cumplimiento:</b> el contrato registra S/ 1\'296,141.59 y el informe una fianza de S/ 1\'631,123.80; la diferencia es coherente con un monto actualizado.</li><li><b>Regla del 80 %:</b> los porcentajes de avance se calculan sobre el presupuesto vigente.</li></ul><p>Un error en la base contamina todos los cálculos y es un flanco fácil en una controversia.</p>' },
    { h: 'El límite: cuando el expediente supera el porcentaje',
      html: '<p>La cláusula 16 prevé la <b>terminación anticipada</b> por el art. 121 del Reglamento, entre otros supuestos, cuando el presupuesto del expediente supera el porcentaje del numeral 175.1 o faltan recursos presupuestales. No es una resolución por culpa: es una salida cuando el proyecto ya no cabe en lo previsto. El porcentaje exacto y el procedimiento deben leerse en la norma; verificar la norma vigente y el contrato.</p>' },
    { h: 'Qué revisar en la práctica',
      html: '<ol><li>Ubicar el acto de aprobación del expediente técnico y su presupuesto.</li><li>Verificar si se emitió la adenda o documento que actualiza el monto de obra.</li><li>Confirmar que las garantías cubren el monto actualizado.</li><li>Recalcular penalidad diaria y tope con el monto vigente, dejando constancia de la fuente.</li></ol><p>Material formativo: la determinación del monto vigente para decisiones contractuales requiere asesoría legal.</p>' }
  ],
  keypoints: [
    'En diseño y construcción el monto de obra al firmar es un estimado que se ajusta con el expediente aprobado (art. 175.1).',
    'Contrato: obra S/ 12\'627,981.34; informe N° 03: S/ 15\'597,006.85. Hay que cotejar cuál es el vigente.',
    'El adelanto pagado (S/ 1\'559,700.69) es el 10 % de S/ 15\'597,006.85, indicio de que ese es el monto operativo.',
    'Penalidades, tope del 10 %, garantías y avance dependen del monto vigente.',
    'Si el presupuesto del expediente supera el porcentaje del 175.1, cabe la terminación anticipada del art. 121.',
    'Todo cálculo debe citar la fuente del monto usado; verificar la norma vigente y el contrato.'
  ],
  flashcards: [
    { q: '¿Qué artículo establece que el monto de obra es un estimado ajustable con el expediente?', a: 'El art. 175.1 del Reglamento de la Ley 32069.' },
    { q: '¿Qué dos montos de obra aparecen en el caso?', a: 'S/ 12\'627,981.34 en el contrato original y S/ 15\'597,006.85 en el informe N° 03.' },
    { q: '¿Qué indicio apoya que se opera con S/ 15\'597,006.85?', a: 'El adelanto directo pagado, S/ 1\'559,700.69, es exactamente el 10 % de ese monto.' },
    { q: '¿Qué pasa si el presupuesto del expediente supera el porcentaje del 175.1?', a: 'Puede proceder la terminación anticipada por el art. 121 (cláusula 16).' }
  ],
  quiz: [
    { q: 'Antes de calcular el tope del 10 % de penalidades, lo primero es:', opts: ['Usar siempre el monto del contrato original', 'Confirmar cuál es el monto del contrato vigente', 'Promediar los dos montos'], correct: 1, why: 'El tope se calcula sobre el monto vigente; usar una base equivocada debilita toda la decisión.' },
    { q: 'La diferencia entre S/ 15\'597,006.85 y S/ 12\'627,981.34 es aproximadamente:', opts: ['S/ 2\'969,025.51', 'S/ 333,434.52', 'S/ 1\'559,700.69'], correct: 0, why: '15\'597,006.85 − 12\'627,981.34 = 2\'969,025.51, alrededor de 23.5 % más.' },
    { q: 'Si el expediente supera el porcentaje del numeral 175.1, la salida prevista es:', opts: ['Resolver por culpa del contratista', 'Aplicar penalidad por mora', 'La terminación anticipada del art. 121'], correct: 2, why: 'La cláusula 16 vincula ese supuesto con la terminación anticipada, que no es una resolución por incumplimiento.' }
  ]
});
