Lesson.start({
  id: 'errores-de-diseno-y-responsabilidad', area: 'Diseño y construcción', areaIcon: '📐', icon: '🧯',
  title: 'Errores de diseño y responsabilidad',
  subtitle: 'Quien diseña y construye no puede culpar al plano: el plano es suyo.',
  norma: 'Responsabilidad del contratista por su diseño en el sistema de diseño y construcción; vicios ocultos por 7 años (cláusula 14; art. 69 de la Ley 32069 y art. 216 del Reglamento). Verificar la norma vigente y el contrato.',
  intro: '<p>En una obra tradicional, un error de planos suele abrir la puerta a adicionales o ampliaciones de plazo a favor del contratista. En <b>diseño y construcción</b> la lógica se invierte: el contratista elaboró el expediente, así que <b>responde por lo que diseñó</b>. Esta lección explica qué consecuencias tiene un error de diseño en plazo y costo, qué no puede alegarse como causa no imputable y cómo se documenta, con los pendientes reales del caso.</p>',
  sections: [
    { h: 'El principio: responde quien diseñó',
      html: '<p>Si un plano omite un ducto, un metrado se queda corto o una cisterna no cabe donde se dibujó, la corrección es, en principio, carga del contratista: <b>rediseña, reprograma y asume el costo</b> dentro de la suma alzada. La aprobación de la Entidad no convierte el error en suyo, porque la revisión no sustituye la responsabilidad del proyectista. El alcance exacto depende del contrato; verificar la norma vigente y el contrato.</p>' },
    { h: 'Consecuencias en plazo',
      html: '<ul><li>Un error de diseño que detiene un frente <b>no justifica</b>, por regla general, una ampliación de plazo, porque no es ajeno al contratista.</li><li>El tiempo perdido cuenta como retraso y alimenta la penalidad por mora (cláusula 15, art. 120 del Reglamento).</li><li>Baja la razón ejecutado ÷ programado y puede activar la regla del 80 % (art. 207).</li></ul><p>En el caso, el ejecutado de 6.62 % frente a 48.07 % programado convive con observaciones de diseño abiertas: <span class="hl">el contratista difícilmente podrá usarlas como excusa</span>.</p>' },
    { h: 'Consecuencias en costo',
      html: '<table><tr><th>Situación</th><th>Obra tradicional</th><th>Diseño y construcción</th></tr><tr><td>Metrado insuficiente</td><td>Posible adicional</td><td>En suma alzada, lo asume el contratista</td></tr><tr><td>Rediseño por incompatibilidad</td><td>Costo de la Entidad</td><td>Costo del contratista</td></tr><tr><td>Demolición de lo mal ejecutado</td><td>Depende de la causa</td><td>Del contratista si se debe a su diseño</td></tr></table><p>Esto explica por qué un diseño débil presiona la caja del contratista, algo coherente con las demoras en pagos a proveedores que reporta la Supervisión.</p>' },
    { h: 'Casos del expediente real',
      html: '<ul><li><b>Electrónica:</b> planos, metrados, puesta a tierra, APU y software de analítica de video observados.</li><li><b>Sanitarias:</b> planimetría reformulada, ducto sanitario, cisterna y trámites ante la empresa de agua.</li><li><b>Estructuras:</b> la modificación de zapatas observada por la Supervisión muestra el riesgo de cambiar el diseño en obra sin sustento aprobado.</li></ul><p>Cada uno debe quedar registrado con fecha en el cuaderno de incidencias e informes, porque es prueba de que el atraso tiene origen en la propia prestación del contratista.</p>' },
    { h: 'Después de la recepción: vicios ocultos',
      html: '<p>La responsabilidad no termina con la entrega. La cláusula 14 fija <b>7 años</b> por vicios ocultos, en línea con el art. 69 de la Ley 32069 y el art. 216 del Reglamento. En diseño y construcción el contratista responde tanto por defectos de ejecución como por defectos de su diseño. Material formativo: reclamar o imputar responsabilidades requiere asesoría legal.</p>' }
  ],
  keypoints: [
    'En diseño y construcción el contratista responde por los errores del expediente que él mismo elaboró.',
    'La aprobación de la Entidad no traslada el error de diseño a la Entidad.',
    'Un error de diseño propio no justifica, por regla general, ampliación de plazo ni adicional.',
    'El tiempo perdido por rediseño es retraso: suma penalidad y baja la razón del 80 %.',
    'Las observaciones abiertas de electrónica y sanitarias del caso son responsabilidad del contratista y deben documentarse.',
    'Por vicios ocultos, incluso de diseño, responde 7 años (cl. 14, art. 69 de la Ley y art. 216 del Reglamento); verificar la norma vigente y el contrato.'
  ],
  flashcards: [
    { q: '¿Quién asume, en principio, un error de planos en diseño y construcción?', a: 'El contratista, porque elaboró el diseño.' },
    { q: '¿Un error de diseño propio sustenta una ampliación de plazo?', a: 'Por regla general no, porque no es una causa ajena al contratista.' },
    { q: '¿Cuánto dura la responsabilidad por vicios ocultos en el contrato?', a: '7 años (cláusula 14; art. 69 de la Ley 32069 y art. 216 del Reglamento).' },
    { q: '¿Qué observación estructural del caso ilustra el riesgo de cambiar el diseño en obra?', a: 'La modificación de zapatas sin sustento aprobado.' },
    { q: '¿Por qué documentar las observaciones de diseño?', a: 'Porque prueban que el atraso se origina en la propia prestación del contratista.' }
  ],
  quiz: [
    { q: 'El contratista pide ampliación de plazo porque su propio plano sanitario no era compatible con la cisterna:', opts: ['Procede: es un error de planos', 'En principio no procede: el diseño es suyo', 'Procede si la Entidad aprobó el plano'], correct: 1, why: 'En diseño y construcción el error de diseño es riesgo del contratista; la aprobación no lo traslada.' },
    { q: 'Un metrado insuficiente en una obra a suma alzada de diseño y construcción:', opts: ['Lo asume, en principio, el contratista', 'Genera automáticamente un adicional', 'Reduce la penalidad'], correct: 0, why: 'El contratista diseñó y cotizó a suma alzada; la diferencia de metrado es, en principio, su riesgo.' },
    { q: 'Un defecto de diseño detectado 4 años después de la recepción:', opts: ['Ya no es exigible', 'Solo es exigible si es de ejecución', 'Puede reclamarse como vicio oculto dentro de los 7 años'], correct: 2, why: 'La cláusula 14 fija 7 años y el contratista responde también por su diseño.' }
  ]
});
