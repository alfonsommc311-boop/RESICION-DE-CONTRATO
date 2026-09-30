Lesson.start({
  id: 'atraso-imputable-y-no-imputable', area: 'Ampliaciones, suspensiones y paralización', areaIcon: '⏸️', icon: '⚖️',
  title: 'Atraso imputable y no imputable',
  subtitle: 'Antes de penalizar, resolver o ampliar, hay que responder una sola pregunta: ¿de quién es cada día de atraso?',
  norma: 'Cláusula 15: el retraso se justifica con ampliación aprobada o acreditando que no es imputable; mora: art. 120; resolución: art. 68 (68.1) de la Ley 32069 y art. 122 del Reglamento. Criterios de atribución en detalle: verificar la norma vigente y el contrato.',
  intro: '<p>Todas las herramientas de esta app, desde la penalidad por mora hasta la resolución, dependen de una clasificación previa: qué parte del atraso es <b>imputable al contratista</b> y qué parte no. Si la Entidad penaliza o resuelve por un atraso que en realidad causó ella, arriesga perder la controversia; si deja pasar un atraso imputable, renuncia a sus derechos. Esta lección da un método para separar responsabilidades día por día, explica la concurrencia y aplica el análisis al caso, donde el avance era 6.62 % frente a 48.07 % programado.</p>',
  sections: [
    { h: 'Tres categorías de atraso',
      html: '<table><tr><th>Categoría</th><th>Ejemplos</th><th>Consecuencia</th></tr><tr><td>Imputable al contratista</td><td>Falta de personal o equipo, impago a proveedores, trabajos rehechos, errores del propio diseño</td><td>Mora, regla del 80 %, posible resolución o intervención</td></tr><tr><td>Imputable a la Entidad</td><td>Demora en aprobar entregables, entregar terreno o absolver consultas en la ruta crítica</td><td>Puede dar ampliación y gastos generales (art. 201.1)</td></tr><tr><td>No imputable a ninguna</td><td>Fuerza mayor o caso fortuito acreditados, hechos de autoridad</td><td>Puede dar ampliación o suspensión; tratamiento económico según la norma</td></tr></table>' },
    { h: 'Método: reconstruir la cronología',
      html: '<ol><li>Tomar el <b>último calendario vigente</b> (no el acelerado) e identificar la ruta crítica.</li><li>Listar cada evento de atraso con su fuente: asiento del cuaderno, carta, oficio, informe mensual.</li><li>Asignar a cada evento su responsable y los días en que afectó la ruta crítica.</li><li>Detectar <b>periodos concurrentes</b> en que hubo causas de ambas partes.</li><li>Sumar por categoría y contrastar con el atraso total medido (ejecutado ÷ programado).</li></ol><p>Lo que no tenga soporte documental difícilmente podrá atribuirse a la otra parte.</p>' },
    { h: 'La concurrencia de causas',
      html: '<p>Es frecuente que en un mismo periodo haya atraso de ambas partes: por ejemplo, la Entidad demora una aprobación mientras el contratista, de todos modos, no tenía personal en obra. En ese caso, el contratista no puede atribuir todo a la Entidad, porque aun sin la demora de ella la obra no habría avanzado. El tratamiento de la concurrencia (si da ampliación sin gastos generales, si se prorratea, etc.) depende de la norma vigente y el contrato, y es terreno habitual de controversia.</p>' },
    { h: 'El caso: ¿de quién es el atraso de 41.45 puntos?',
      html: '<p>La Supervisión, en el informe N° 03, atribuye el desempeño deficiente a fallas de coordinación, demoras en pagos a proveedores y desconocimiento del Reglamento y los TDR. Se suman observaciones técnicas pendientes (zapatas vaciadas sin dosificación controlada ni presencia de la Supervisión, cambio de encofrado sin sustento, vaciado en altura sin procedimiento aprobado) y componentes sin iniciar (arquitectura, sanitarias y equipamiento electrónico). Todo apunta a <b>atraso imputable</b>.</p><p>Del lado de la Entidad aparecen las valorizaciones pendientes de pago (S/ 382,859.77 observada, S/ 291,423.65 y S/ 253,374.98). Para que cuenten como atraso no imputable, el contratista tendría que acreditar su efecto en la ruta crítica y haberlo tramitado; sin ampliaciones solicitadas ni aprobadas, el atraso seguía tratándose como injustificado.</p>' },
    { h: 'Por qué esta clasificación protege a la Entidad',
      html: '<ul><li>Sostiene la penalidad por mora (art. 120) frente a un reclamo posterior.</li><li>Da solidez al requerimiento previo a la resolución (art. 122) y a la decisión del art. 68.1.</li><li>Permite anticipar los argumentos del contratista y corregir a tiempo las obligaciones propias (pagos, aprobaciones).</li></ul><p>Un expediente con la cronología bien atribuida no garantiza el resultado de un arbitraje, pero es la mejor base posible. La decisión final requiere asesoría legal.</p>' }
  ],
  keypoints: [
    'El atraso puede ser imputable al contratista, imputable a la Entidad o no imputable a ninguna parte.',
    'La atribución se hace día por día sobre la ruta crítica del último calendario vigente, no del acelerado.',
    'Sin soporte documental (cuaderno, cartas, informes) un atraso difícilmente se traslada a la otra parte.',
    'En la concurrencia, el contratista no puede cargar a la Entidad días en que él tampoco habría avanzado.',
    'En el caso, la Supervisión atribuyó el atraso a causas propias del contratista; no había ampliaciones.',
    'Las valorizaciones impagas son el flanco de la Entidad: debe regularizar lo que corresponda y documentar.'
  ],
  flashcards: [
    { q: '¿Cuáles son las tres categorías de atraso?', a: 'Imputable al contratista, imputable a la Entidad y no imputable a ninguna de las partes.' },
    { q: '¿Qué es la concurrencia de causas?', a: 'Periodos en que el atraso tiene causas de ambas partes a la vez; su tratamiento depende de la norma y el contrato.' },
    { q: '¿A qué atribuyó la Supervisión el atraso del caso?', a: 'A fallas de coordinación, demoras en pagos a proveedores y desconocimiento del Reglamento y los TDR del contratista.' },
    { q: '¿Qué calendario se usa para atribuir el atraso?', a: 'El último calendario vigente; el programa acelerado no sirve para sustentar ampliaciones.' },
    { q: '¿Cuál es el flanco débil de la Entidad en el caso?', a: 'Las valorizaciones de julio, agosto y setiembre pendientes de pago.' }
  ],
  quiz: [
    { q: 'La Entidad demoró 12 días en aprobar un entregable, pero en esos días el contratista tampoco tenía personal en obra. ¿Cómo se clasifica?', opts: ['Atraso imputable solo a la Entidad', 'Concurrencia de causas, cuyo tratamiento depende de la norma y el contrato', 'Fuerza mayor'], correct: 1, why: 'Hay causas de ambas partes en el mismo periodo; el contratista no puede cargar todo a la Entidad.' },
    { q: '¿Cuál de estos hechos del caso es atraso imputable al contratista?', opts: ['Vaciado de zapatas sin dosificación controlada que debe corregirse', 'Una demora acreditada de la Entidad en la ruta crítica', 'Un hecho de fuerza mayor acreditado'], correct: 0, why: 'Corregir trabajos defectuosos propios es atraso imputable.' },
    { q: '¿Por qué conviene a la Entidad reconstruir la cronología del atraso antes de resolver?', opts: ['Porque garantiza ganar el arbitraje', 'Porque sustituye la asesoría legal', 'Porque sostiene la mora y la resolución y permite anticipar los argumentos del contratista'], correct: 2, why: 'Es la mejor base probatoria, aunque nunca garantiza el resultado ni reemplaza la asesoría legal.' }
  ]
});
