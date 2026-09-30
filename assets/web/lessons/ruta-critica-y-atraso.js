Lesson.start({
  id: 'ruta-critica-y-atraso', area: 'Valorizaciones y control del avance', areaIcon: '📊', icon: '🛤️',
  title: 'Ruta crítica y atraso',
  subtitle: 'Se puede estar sobre el 80 % y aun así ir directo al incumplimiento del plazo.',
  norma: 'Art. 207 del Reglamento de la Ley 32069 y TDR de la Supervisión: el programa acelerado se ordena si el acumulado ejecutado es menor al 80 % del programado o si existe atraso en la ruta crítica. Verificar la norma vigente y el contrato.',
  intro: '<p>La <b>ruta crítica</b> es la cadena de actividades que no tiene holgura: si una de ellas se atrasa un día, la obra termina un día después. El TDR de la Supervisión, siguiendo el art. 207 del Reglamento, establece dos disparadores independientes del programa acelerado: la razón menor al 80 % <b>o</b> el atraso en la ruta crítica. Esta lección explica por qué el segundo existe, cómo se identifica y por qué, en el caso, ambos disparadores están activos a la vez.</p>',
  sections: [
    { h: 'Qué es la ruta crítica',
      html: '<p>En un cronograma de red (CPM), cada actividad tiene una fecha temprana y una tardía. La diferencia es su <b>holgura</b>. Las actividades con holgura cero forman la ruta crítica. Ejemplo típico en una edificación: excavación → cimentación → estructura → instalaciones empotradas → arquitectura → equipamiento → pruebas. Una actividad con holgura puede retrasarse sin mover el fin de obra; una crítica, no.</p>' },
    { h: 'Por qué el 80 % no basta',
      html: '<p>La regla del 80 % mira el <b>dinero</b> acumulado. Un contratista puede valorizar mucho en partidas no críticas (por ejemplo, adelantar cerco, veredas o trabajos provisionales) y mantener la razón sobre el 80 %, mientras la estructura o el equipamiento, que definen la fecha de término, están detenidos.</p><p>Por eso el TDR añade la segunda condición: <span class="hl">el atraso en la ruta crítica también obliga a ordenar el programa acelerado</span>, aunque la razón esté sobre el umbral.</p>' },
    { h: 'Cómo se prueba el atraso en la ruta crítica',
      html: '<ol><li>Tener el cronograma vigente (art. 206) con la ruta crítica identificada y aprobada.</li><li>Comparar las fechas reales de inicio y fin de cada actividad crítica con las programadas.</li><li>Anotar en el cuaderno de obra (incidencias) la actividad crítica atrasada y cuántos días.</li><li>Respaldarlo con valorizaciones, fotos fechadas y el modelo digital del avance.</li></ol><p>Un atraso en la ruta crítica mal documentado es fácil de discutir; uno anotado con fecha cierta y evidencia, no.</p>' },
    { h: 'El caso: los dos disparadores activos',
      html: '<table><tr><th>Disparador</th><th>Situación a setiembre 2026</th></tr><tr><td>Razón ejecutado ÷ programado</td><td>6.62 ÷ 48.07 = 13.8 % (bajo el 80 %)</td></tr><tr><td>Ruta crítica</td><td>Arquitectura, instalaciones sanitarias y equipamiento electrónico sin iniciar; estructura con observaciones pendientes (zapatas, encofrado, vaciado en altura)</td></tr></table><p>El equipamiento electrónico es la mayor parte del presupuesto y suele depender de la estructura y la arquitectura: su atraso arrastra el plazo de 120 días. En una obra así, la ruta crítica confirma lo que la razón ya mostraba.</p>' },
    { h: 'Ruta crítica y ampliaciones de plazo',
      html: '<p>La ruta crítica también es la puerta de las ampliaciones: solo un hecho no imputable al contratista que afecte la ruta crítica justifica más plazo (art. 192 del Reglamento; verificar la norma vigente y el contrato). En el caso no hay ampliaciones de plazo, de modo que el atraso se presume del contratista mientras no demuestre lo contrario. Ojo: la demora de la Entidad en pagar valorizaciones puede ser alegada por el contratista; se analiza en la lección de pago de valorizaciones. Esta lección es formativa y no reemplaza asesoría legal.</p>' }
  ],
  keypoints: [
    'La ruta crítica es la cadena de actividades sin holgura: su atraso mueve el fin de obra.',
    'El programa acelerado se ordena si la razón es menor al 80 % o si hay atraso en la ruta crítica: son disparadores independientes.',
    'Se puede cumplir el 80 % valorizando partidas no críticas y aun así ir camino al incumplimiento del plazo.',
    'El atraso crítico se prueba con cronograma vigente, anotación en cuaderno y evidencia fechada.',
    'En el caso ambos disparadores están activos: 13.8 % y componentes críticos sin iniciar.',
    'Solo el atraso no imputable que afecta la ruta crítica puede justificar una ampliación de plazo.'
  ],
  flashcards: [
    { q: '¿Qué es la holgura de una actividad?', a: 'Lo que puede retrasarse sin mover el fin de obra; en la ruta crítica es cero.' },
    { q: '¿Qué dos condiciones habilitan la orden del programa acelerado según el TDR?', a: 'Razón ejecutado ÷ programado menor al 80 %, o atraso en la ruta crítica.' },
    { q: '¿Por qué el 80 % puede engañar?', a: 'Porque mide dinero acumulado; se puede valorizar en partidas no críticas mientras las críticas están detenidas.' },
    { q: '¿Qué componentes críticos estaban sin iniciar en el caso?', a: 'Arquitectura, instalaciones sanitarias y equipamiento electrónico.' }
  ],
  quiz: [
    { q: 'La razón está en 85 %, pero la estructura (crítica) lleva 20 días de atraso injustificado. ¿Qué corresponde?', opts: ['Nada, porque se cumple el 80 %', 'Ordenar el programa acelerado por atraso en la ruta crítica', 'Resolver el contrato de inmediato'], correct: 1, why: 'El atraso en la ruta crítica es un disparador independiente del 80 %.' },
    { q: '¿Cuál es la mejor prueba de un atraso en la ruta crítica?', opts: ['Anotación en cuaderno con fecha cierta, comparación con el cronograma vigente y evidencia fechada', 'Un correo informal al residente', 'La opinión verbal de la Supervisión'], correct: 0, why: 'La anotación y la evidencia objetiva dan fecha cierta y son difíciles de discutir.' },
    { q: 'Un hecho no imputable al contratista afecta una actividad con holgura de 30 días y la retrasa 10. ¿Justifica ampliación?', opts: ['Sí, siempre', 'Sí, de 10 días', 'En principio no, porque no afecta la ruta crítica'], correct: 2, why: 'Si la actividad tiene holgura suficiente, el fin de obra no se mueve; verificar la norma vigente y el contrato.' }
  ]
});
