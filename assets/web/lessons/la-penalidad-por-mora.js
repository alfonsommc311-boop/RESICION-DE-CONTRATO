Lesson.start({
  id: 'la-penalidad-por-mora', area: 'Penalidades y garantías', areaIcon: '💸', icon: '🧮',
  title: 'La penalidad por mora',
  subtitle: 'Cada día de atraso tiene un precio exacto, y en este caso es de casi S/ 52,000.',
  norma: 'Cláusula 15 del contrato y artículo 120 del Reglamento (D.S. 009-2025-EF): penalidad diaria = 0.10 × monto ÷ (F × plazo). Verificar la norma vigente y el contrato.',
  intro: '<p>La <b>penalidad por mora</b> es la sanción automática que paga el contratista por cada día de retraso injustificado en la ejecución de la prestación. No requiere probar un daño: la fórmula ya está pactada en la <b>cláusula 15</b> del contrato y sigue el <b>artículo 120 del Reglamento</b>. Entenderla es indispensable porque marca el ritmo con el que el contrato se acerca al <b>tope del 10 %</b> y, con él, a la posibilidad de resolver. En esta lección aprenderás la fórmula, el factor F, el cálculo con las cifras del caso y cómo se aplica día a día.</p>',
  sections: [
    { h: 'La fórmula de la cláusula 15',
      html: '<p>La penalidad diaria se calcula así:</p><p><span class="hl">Penalidad diaria = 0.10 × monto ÷ (F × plazo en días)</span></p><ul><li><b>Monto:</b> el monto del contrato vigente (o del ítem que debió ejecutarse). Si hubo adicionales o deductivos aprobados, se usa el monto actualizado.</li><li><b>F:</b> un factor que depende del plazo, para que la penalidad sea proporcional a la duración de la obra.</li><li><b>Plazo:</b> el plazo vigente en días calendario (incluye las ampliaciones aprobadas).</li></ul><p>El 0.10 del numerador es el mismo 10 % del tope: la fórmula está diseñada para que, en un número de días igual a F × plazo, la mora consuma todo el margen disponible.</p>' },
    { h: 'El factor F según el plazo',
      html: '<p>El contrato fija F según el tipo de prestación y su plazo:</p><table><tr><th>Prestación</th><th>Plazo</th><th>F</th></tr><tr><td>Obra</td><td>Hasta 60 días</td><td>0.40</td></tr><tr><td>Obra</td><td>De 61 a 120 días</td><td><b>0.25</b></td></tr><tr><td>Obra</td><td>Más de 120 días</td><td>0.15</td></tr><tr><td>Consultoría</td><td>Hasta 60 días</td><td>0.40</td></tr><tr><td>Consultoría</td><td>Más de 60 días</td><td>0.25</td></tr></table><p>¿Por qué F baja cuando el plazo sube? Porque F multiplica al plazo en el denominador: si solo creciera el plazo, la penalidad diaria en obras largas sería insignificante. El factor menor compensa y mantiene la sanción proporcional. En el caso, la obra tiene <b>120 días calendario</b>, así que <b>F = 0.25</b>.</p>' },
    { h: 'El ejemplo numérico del caso',
      html: '<p>Con las cifras del informe de setiembre (monto de obra S/ 15\'597,006.85, plazo 120 días, F = 0.25):</p><ol><li>Numerador: 0.10 × 15\'597,006.85 = <b>S/ 1\'559,700.69</b>.</li><li>Denominador: 0.25 × 120 = <b>30</b>.</li><li>Penalidad diaria: 1\'559,700.69 ÷ 30 = <span class="hl">S/ 51,990.02 por día</span>.</li></ol><p>Observa que el numerador es exactamente el tope del 10 %. Por eso, con F = 0.25 y 120 días, bastan <b>30 días de atraso</b> para agotar el tope de <b>S/ 1\'559,700.69</b>. El contrato original fija un monto de obra distinto (S/ 12\'627,981.34): antes de aplicar la penalidad hay que cotejar cuál es el monto vigente, porque cambia el resultado.</p>' },
    { h: 'Cómo se aplica día a día',
      html: '<ul><li><b>Cuándo empieza:</b> la mora se cuenta desde el día siguiente al vencimiento del plazo vigente. Mientras el plazo corre, aunque el avance sea bajo, no hay mora; hay atraso, que se gestiona con el programa acelerado y la regla del 80 %.</li><li><b>Quién la calcula:</b> la Supervisión lleva el control de penalidades (según el TDR) y la Entidad las aplica.</li><li><b>Cómo se cobra:</b> se deduce de las valorizaciones, de los pagos pendientes, de la liquidación final o, si no alcanza, de la garantía de fiel cumplimiento.</li><li><b>Días calendario:</b> el plazo y la mora se cuentan en días calendario, no hábiles.</li></ul><p>Consejo práctico: registra en el cuaderno de obra la fecha de vencimiento del plazo y cada día de mora; una penalidad mal sustentada se discute en arbitraje y nadie puede prometer el resultado.</p>' },
    { h: 'Cuándo el retraso no genera mora',
      html: '<p>La cláusula 15 admite dos formas de justificar el retraso:</p><ul><li><b>Ampliación de plazo aprobada:</b> si la Entidad aprueba una ampliación, el nuevo plazo mueve la fecha desde la que se cuenta la mora.</li><li><b>Retraso no imputable:</b> el contratista acredita que la demora se debe a hechos ajenos (por ejemplo, falta de entrega del terreno o demoras de la Entidad).</li></ul><p>En el caso no hay ampliaciones de plazo ni adicionales; además, la Entidad tiene tres valorizaciones pendientes de pago. Ese impago no borra el atraso del contratista, pero podría usarse como argumento de retraso no imputable en parte, por lo que ambas partes deben documentar sus posiciones. Esta lección es educativa y no reemplaza la asesoría legal; verificar la norma vigente y el contrato.</p>' }
  ],
  keypoints: [
    'Penalidad diaria = 0.10 × monto ÷ (F × plazo); está en la cláusula 15 y sigue el artículo 120 del Reglamento.',
    'F para obras: 0.40 (hasta 60 días), 0.25 (61 a 120 días) y 0.15 (más de 120 días).',
    'En el caso: 0.10 × 15\'597,006.85 ÷ (0.25 × 120) = S/ 51,990.02 por día.',
    'El numerador es el tope del 10 %: con F = 0.25 y 120 días, el tope se agota en 30 días de mora.',
    'La mora corre desde el vencimiento del plazo vigente; antes de eso hay atraso, no mora.',
    'El retraso se justifica solo con ampliación de plazo aprobada o acreditando que no es imputable al contratista.'
  ],
  flashcards: [
    { q: '¿Cuál es la fórmula de la penalidad por mora?', a: 'Penalidad diaria = 0.10 × monto ÷ (F × plazo en días calendario).' },
    { q: '¿Qué F corresponde a una obra de 120 días?', a: 'F = 0.25 (rango de 61 a 120 días).' },
    { q: '¿Cuánto es la penalidad diaria del caso?', a: 'Aproximadamente S/ 51,990.02 por día, con monto S/ 15\'597,006.85 y plazo de 120 días.' },
    { q: '¿En cuántos días de mora se alcanza el tope en el caso?', a: 'En unos 30 días, porque el tope de S/ 1\'559,700.69 entre S/ 51,990.02 da 30.' },
    { q: '¿De dónde se descuenta la penalidad?', a: 'De las valorizaciones, los pagos, la liquidación o la garantía de fiel cumplimiento.' }
  ],
  quiz: [
    { q: 'Una obra tiene plazo de 90 días. ¿Qué factor F se aplica en la fórmula de mora?', opts: ['0.40', '0.25', '0.15'], correct: 1, why: 'Para obras, F = 0.25 cuando el plazo está entre 61 y 120 días.' },
    { q: 'Con monto S/ 15\'597,006.85, plazo 120 días y F = 0.25, la penalidad diaria es:', opts: ['S/ 51,990.02', 'S/ 129,975.06', 'S/ 15,597.01'], correct: 0, why: '0.10 × 15\'597,006.85 = 1\'559,700.69; dividido entre 0.25 × 120 = 30 da S/ 51,990.02.' },
    { q: 'El avance ejecutado es 6.62 % frente a 48.07 % programado, pero el plazo aún no vence. ¿Ya corre la penalidad por mora?', opts: ['Sí, desde que el avance cae bajo el 80 %', 'Sí, pero solo la mitad', 'No; hay atraso, pero la mora corre desde el vencimiento del plazo'], correct: 2, why: 'La mora sanciona el retraso respecto del plazo vigente. El atraso durante la ejecución se maneja con el programa acelerado y la regla del 80 %.' },
    { q: '¿Cómo puede el contratista evitar la penalidad por un retraso?', opts: ['Presentando un programa acelerado', 'Con ampliación de plazo aprobada o acreditando que el retraso no le es imputable', 'Pagando la garantía de fiel cumplimiento'], correct: 1, why: 'La cláusula 15 solo admite esas dos vías; el programa acelerado no sustenta ampliaciones.' }
  ]
});
