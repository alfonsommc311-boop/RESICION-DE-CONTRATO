Lesson.start({
  id: 'la-valorizacion-en-suma-alzada', area: 'Valorizaciones y control del avance', areaIcon: '📊', icon: '💵',
  title: 'La valorización en suma alzada',
  subtitle: 'En suma alzada no se paga lo que se midió: se paga lo que se avanzó de lo ofertado.',
  norma: 'Contrato de Diseño y Construcción a suma alzada; control del avance por valorizaciones según el art. 207 del Reglamento de la Ley 32069 y el calendario del art. 206. Verificar la norma vigente y el contrato.',
  intro: '<p>La <b>valorización</b> es la cuantificación económica del avance de obra en un periodo, normalmente mensual. En un contrato a <b>suma alzada</b>, como el de este caso, el precio total está fijado por el contratista para ejecutar la obra completa según el expediente técnico, de modo que la valorización no paga cantidades reales medidas sino el <b>porcentaje de avance</b> de cada partida del presupuesto contratado. Entender esta lógica es clave porque la valorización es, a la vez, el documento de pago y la <b>prueba central del atraso</b>: con ella se calcula la regla del 80 %. En el caso, las valorizaciones de julio, agosto y setiembre suman apenas un 6.62 % acumulado frente a un 48.07 % programado.</p>',
  sections: [
    { h: 'Qué es una valorización',
      html: '<p>Es el documento, elaborado con la Supervisión, que traduce en soles lo ejecutado en el periodo. Tiene tres usos a la vez:</p><ul><li><b>Pago:</b> es la base para que la Entidad pague al contratista (con las amortizaciones y deducciones que correspondan).</li><li><b>Control:</b> el acumulado valorizado se compara con el calendario valorizado programado (art. 206 y art. 207 del Reglamento).</li><li><b>Prueba:</b> fija con fecha cierta cuánto se avanzó; en una controversia sobre atraso o resolución es el primer documento que se revisa.</li></ul>' },
    { h: 'Suma alzada frente a precios unitarios',
      html: '<table><tr><th>Aspecto</th><th>Suma alzada</th><th>Precios unitarios</th></tr><tr><td>Qué fija el contratista</td><td>El precio total de la obra</td><td>El precio de cada unidad</td></tr><tr><td>Qué se valoriza</td><td>El porcentaje de avance de cada partida del presupuesto contratado</td><td>El metrado realmente ejecutado × precio unitario</td></tr><tr><td>Mayores metrados</td><td>No se pagan: son riesgo del contratista</td><td>Se pagan si están sustentados</td></tr></table><p>Por eso en suma alzada <span class="hl">el tope de cada partida es su monto contratado</span>: no se puede valorizar más del 100 % de una partida, aunque en campo se haya consumido más material.</p>' },
    { h: 'Cómo se mide el avance por partida',
      html: '<ol><li>Se toma el presupuesto contratado desagregado por partidas (en Diseño y Construcción, el que resulta del expediente técnico aprobado).</li><li>Para cada partida se determina el porcentaje efectivamente ejecutado en el periodo, con metrados de control, protocolos y verificación de la Supervisión.</li><li>Porcentaje × monto de la partida = monto valorizado de la partida.</li><li>La suma de partidas da la valorización del mes; su acumulado, dividido entre el monto de obra, da el <b>avance acumulado</b>.</li></ol><p>Ejemplo con el caso: 6.62 % de S/ 15\'597,006.85 equivale aproximadamente a S/ 1\'032,522 acumulados, muy lejos del 48.07 % programado (≈ S/ 7\'497,481).</p>' },
    { h: 'Las valorizaciones del caso',
      html: '<table><tr><th>Mes</th><th>Monto</th><th>Estado</th></tr><tr><td>Julio 2026</td><td>S/ 382,859.77</td><td>Observada, pendiente de pago</td></tr><tr><td>Agosto 2026</td><td>S/ 291,423.65</td><td>Pendiente de pago</td></tr><tr><td>Setiembre 2026</td><td>S/ 253,374.98</td><td>Pendiente de pago</td></tr><tr><td><b>Suma</b></td><td><b>S/ 927,658.40</b></td><td></td></tr></table><p>Observa la tendencia: cada mes se valoriza <b>menos</b> que el anterior, cuando el calendario exige lo contrario (acelerar). Además, los componentes de arquitectura, instalaciones sanitarias y equipamiento electrónico (la mayor parte del presupuesto) no tienen avance. El monto de obra usado en el informe (S/ 15\'597,006.85) difiere del contrato original: conviene cotejar cuál es el vigente antes de cualquier cálculo con efectos legales.</p>' },
    { h: 'Errores frecuentes',
      html: '<ul><li><b>Valorizar por consumo de material:</b> en suma alzada se paga el avance de la partida, no lo gastado.</li><li><b>Valorizar trabajos observados:</b> una partida ejecutada sin la calidad exigida (por ejemplo, zapatas vaciadas sin dosificación controlada y sin presencia de la Supervisión) no debería valorizarse hasta subsanar.</li><li><b>Adelantar porcentajes para «mejorar» el indicador:</b> inflar la valorización distorsiona el control del 80 % y expone a responsabilidades.</li><li><b>Olvidar las amortizaciones:</b> el adelanto directo (S/ 1\'559,700.69) se amortiza en las valorizaciones; verificar la norma vigente y el contrato.</li></ul>' }
  ],
  keypoints: [
    'La valorización es a la vez documento de pago, herramienta de control y prueba del avance.',
    'En suma alzada se valoriza el porcentaje de avance de cada partida del presupuesto contratado, no el metrado real.',
    'Ninguna partida puede valorizarse por encima del 100 % de su monto contratado; los mayores metrados son riesgo del contratista.',
    'El acumulado valorizado es el que se compara con el calendario para aplicar la regla del 80 % (art. 207).',
    'En el caso: julio S/ 382,859.77 (observada), agosto S/ 291,423.65 y setiembre S/ 253,374.98, todas pendientes de pago y cada una menor que la anterior.',
    'Lo ejecutado sin la calidad exigida no debe valorizarse hasta que se subsane.'
  ],
  flashcards: [
    { q: '¿Qué se paga en una valorización a suma alzada?', a: 'El porcentaje de avance de cada partida del presupuesto contratado, con tope en el 100 % de la partida.' },
    { q: '¿Se pagan mayores metrados en suma alzada?', a: 'No: el precio total es fijo y los mayores metrados son riesgo del contratista.' },
    { q: '¿Cuánto suman las valorizaciones de julio a setiembre del caso?', a: 'S/ 927,658.40 (382,859.77 + 291,423.65 + 253,374.98), todas pendientes de pago.' },
    { q: '¿Por qué la valorización es prueba del atraso?', a: 'Porque fija con fecha cierta el avance acumulado que se compara con el calendario valorizado para aplicar la regla del 80 %.' }
  ],
  quiz: [
    { q: 'En suma alzada, una partida de S/ 100,000 consumió 20 % más concreto del previsto y está terminada. ¿Cuánto se valoriza?', opts: ['S/ 120,000', 'S/ 100,000', 'Lo que diga el contratista'], correct: 1, why: 'En suma alzada el tope de la partida es su monto contratado; el mayor consumo es riesgo del contratista.' },
    { q: '¿Qué muestra la secuencia de valorizaciones del caso (julio > agosto > setiembre)?', opts: ['Que la obra se está desacelerando cuando el calendario exige acelerar', 'Que la obra va según lo previsto', 'Que la Entidad pagó de más'], correct: 0, why: 'Cada mes se valoriza menos que el anterior, mientras el programado acumulado sube hasta 48.07 %.' },
    { q: 'Unas zapatas se vaciaron sin dosificación controlada y sin presencia de la Supervisión. ¿Qué corresponde en la valorización?', opts: ['Valorizarlas al 100 % porque están vaciadas', 'Valorizarlas y descontar una penalidad', 'No valorizarlas hasta que se subsane la observación'], correct: 2, why: 'Lo ejecutado sin la calidad exigida queda observado y no debería valorizarse hasta su subsanación.' }
  ]
});
