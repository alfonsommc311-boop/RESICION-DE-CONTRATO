Lesson.start({
  id: 'calendario-valorizado-y-curva-s', area: 'Valorizaciones y control del avance', areaIcon: '📊', icon: '📈',
  title: 'Calendario valorizado y curva S',
  subtitle: 'Dos curvas que se separan cuentan la historia de una obra antes que cualquier informe.',
  norma: 'Art. 206 del Reglamento de la Ley 32069 (calendarios) y art. 207 (monitoreo y control de obras, regla del 80 %). Verificar la norma vigente y el contrato.',
  intro: '<p>El <b>calendario de avance de obra valorizado</b> dice cuánto dinero de obra debería estar ejecutado al final de cada mes. Si se grafica el acumulado en el tiempo se obtiene la <b>curva S</b>: lenta al inicio, empinada en la etapa intensa y plana al final. Superponer la curva programada y la ejecutada es la forma más rápida de ver el atraso y, sobre todo, de detectarlo <b>antes</b> de que sea irrecuperable. En el caso, a setiembre de 2026 la curva programada llega a 48.07 % y la ejecutada apenas a 6.62 %.</p>',
  sections: [
    { h: 'Qué es el calendario valorizado',
      html: '<p>Es la programación mensual del avance expresada en soles y en porcentaje del monto de obra, derivada del cronograma de ejecución (art. 206 del Reglamento). Cada valorización real se contrasta con la cifra programada del mismo mes y, sobre todo, con el <b>acumulado</b>. El calendario vigente es la línea base: el programa acelerado que se ordene más adelante no sirve para reajustes ni para sustentar ampliaciones de plazo (para eso se usa el último calendario vigente), según el TDR.</p>' },
    { h: 'Por qué la curva tiene forma de S',
      html: '<ul><li><b>Arranque lento:</b> movilización, trazos, excavaciones y cimentaciones; poco monto por mes.</li><li><b>Tramo empinado:</b> estructuras, arquitectura, instalaciones y, en este caso, equipamiento electrónico; es donde se concentra el dinero.</li><li><b>Cierre plano:</b> acabados, pruebas y entrega.</li></ul><p>Una obra de 120 días no tiene mucho margen: si el arranque se retrasa, el tramo empinado tendría que ser imposiblemente vertical para recuperar.</p>' },
    { h: 'Leer las dos curvas',
      html: '<p>Hay dos lecturas complementarias:</p><table><tr><th>Lectura</th><th>Qué mide</th><th>Caso (setiembre 2026)</th></tr><tr><td>Brecha vertical</td><td>Cuánto avance falta hoy (puntos o soles)</td><td>48.07 − 6.62 = 41.45 puntos</td></tr><tr><td>Razón</td><td>Ritmo relativo (la regla del 80 %)</td><td>6.62 ÷ 48.07 = <b>13.8 %</b></td></tr><tr><td>Brecha horizontal</td><td>Cuánto tiempo va atrasada la obra</td><td>El 6.62 % ejecutado es lo que el calendario preveía para las primeras semanas</td></tr></table><p>La regla legal es la <b>razón</b>, no la brecha en puntos.</p>' },
    { h: 'Señales tempranas',
      html: '<ul><li>La curva ejecutada se aplana cuando la programada se empina.</li><li>Las valorizaciones mensuales bajan en lugar de subir (caso: S/ 382,859.77, S/ 291,423.65, S/ 253,374.98).</li><li>Partidas del tramo empinado sin fecha real de inicio (arquitectura, sanitarias, equipamiento electrónico).</li><li>La razón baja de un mes a otro aunque se mantenga por encima del 80 %.</li></ul><p>Detectar estas señales permite a la Supervisión alertar a la Entidad y al contratista preparar su recuperación antes de que se ordene el programa acelerado.</p>' },
    { h: 'La curva del nuevo calendario',
      html: '<p>Cuando se ordena el programa acelerado, aparece una <b>nueva curva programada</b>, más empinada. En el caso, el acelerado se ordenó en setiembre y en octubre se prevé volver a caer bajo el 80 %. Esa segunda caída se mide <span class="hl">contra el nuevo calendario acelerado</span> y puede ser causal de resolución o intervención económica <b>sin apercibimiento</b> (art. 207 y TDR). Por eso la Supervisión debe graficar ambas líneas y dejar claro con cuál compara cada mes. Las decisiones que de ello deriven requieren asesoría legal.</p>' }
  ],
  keypoints: [
    'El calendario valorizado fija cuánto debe estar ejecutado cada mes, en soles y en porcentaje (art. 206).',
    'La curva S acumulada es lenta al inicio, empinada en el centro y plana al final.',
    'La brecha en puntos muestra el tamaño del atraso, pero la regla del 80 % usa la razón ejecutado ÷ programado.',
    'En el caso: 6.62 ÷ 48.07 = 13.8 % a setiembre de 2026.',
    'Valorizaciones mensuales decrecientes mientras la programada se empina son una alarma temprana.',
    'La segunda caída bajo el 80 % se mide contra la curva del nuevo calendario acelerado y puede ser causal sin apercibimiento.'
  ],
  flashcards: [
    { q: '¿Qué representa la curva S?', a: 'El avance acumulado en el tiempo: lento al inicio, rápido en la etapa intensa y lento al final.' },
    { q: '¿Qué diferencia hay entre brecha vertical y razón?', a: 'La brecha vertical resta puntos (41.45 en el caso); la razón divide ejecutado entre programado (13.8 %) y es la que usa la regla del 80 %.' },
    { q: '¿Sirve el calendario acelerado para sustentar ampliaciones de plazo?', a: 'No; según el TDR, para eso se usa el último calendario vigente.' },
    { q: 'Tras el programa acelerado, ¿contra qué curva se mide la segunda caída?', a: 'Contra la del nuevo calendario acelerado.' }
  ],
  quiz: [
    { q: 'Una curva ejecutada que se aplana mientras la programada se empina indica:', opts: ['Que la obra está por terminar', 'Un atraso creciente que exige alerta temprana', 'Un error de la Supervisión'], correct: 1, why: 'Es la señal típica de que el ritmo real se aleja del comprometido justo en la etapa de mayor monto.' },
    { q: 'En el caso, ¿cuál es el indicador que corresponde a la regla del 80 % a setiembre?', opts: ['41.45 puntos', '48.07 %', '13.8 %'], correct: 2, why: 'La regla es la razón 6.62 ÷ 48.07 = 13.8 %.' },
    { q: 'En octubre, tras aprobarse el acelerado, la Supervisión debe comparar el ejecutado con:', opts: ['El nuevo calendario acelerado', 'El calendario original', 'El monto del adelanto directo'], correct: 0, why: 'La segunda medición se hace contra el nuevo calendario; esa caída puede ser causal sin apercibimiento.' }
  ]
});
