Lesson.start({
  id: 'el-componente-diseno', area: 'Diseño y construcción', areaIcon: '📐', icon: '✏️',
  title: 'El componente diseño',
  subtitle: '45 días para entregar un expediente que permita construir sin detenerse.',
  norma: 'Contrato, cláusula 10 (adelanto directo del 30 % del componente diseño) y cláusula 15 (penalidad por mora con F de consultoría); art. 120 del Reglamento para la penalidad por mora. Verificar la norma vigente y el contrato.',
  intro: '<p>El <b>componente diseño</b> es la primera prestación del contrato: en <b>45 días</b> el contratista debe entregar el expediente técnico de todas las especialidades. Tiene monto propio (S/ 333,434.52), adelanto propio (30 %) y penalidad propia. Esta lección explica qué se entrega, cómo se observa y por qué un expediente con observaciones abiertas es el origen de muchos atrasos de obra, como ocurre en el caso.</p>',
  sections: [
    { h: 'Plazo, monto y adelanto',
      html: '<table><tr><th>Concepto</th><th>Valor en el caso</th></tr><tr><td>Plazo del diseño</td><td>45 días</td></tr><tr><td>Monto del diseño</td><td>S/ 333,434.52</td></tr><tr><td>Adelanto directo (cl. 10)</td><td>30 % del diseño ≈ S/ 100,030.36</td></tr></table><p>El adelanto del diseño es proporcionalmente mayor que el de la obra (10 %) porque la consultoría concentra su gasto al inicio: profesionales, estudios y levantamientos. Como todo adelanto, se garantiza y se amortiza; verificar la norma vigente y el contrato.</p>' },
    { h: 'Qué se entrega',
      html: '<p>El expediente técnico debe permitir construir sin improvisar. Como mínimo, por cada especialidad:</p><ul><li><b>Memoria descriptiva</b> y especificaciones técnicas.</li><li><b>Planos</b> de detalle compatibilizados.</li><li><b>Metrados</b> sustentados.</li><li><b>Análisis de precios unitarios (APU)</b> y presupuesto.</li><li>Cronograma y, cuando corresponda, estudios y factibilidades de servicios.</li></ul><p>En un proyecto de seguridad ciudadana, la especialidad de <b>electrónica</b> (cámaras, redes, software de analítica, puesta a tierra) es tan crítica como la de estructuras.</p>' },
    { h: 'Observaciones: el caso real',
      html: '<p>Según el informe N° 03, seguían pendientes de subsanar:</p><table><tr><th>Especialidad</th><th>Observaciones pendientes</th></tr><tr><td>Electrónica</td><td>Planos, metrados, sistema de puesta a tierra, APU y software de analítica de video.</td></tr><tr><td>Sanitarias</td><td>Planimetría reformulada, ducto sanitario, cisterna y trámites ante la empresa de agua.</td></tr></table><p><span class="hl">Cada observación abierta es un frente que no puede construirse con certeza.</span> Y la electrónica, precisamente, representa la mayor parte del presupuesto.</p>' },
    { h: 'Por qué las observaciones se vuelven atraso',
      html: '<ol><li>Sin plano aprobado, la Supervisión no debe liberar la partida.</li><li>Sin metrado ni APU aprobados, no hay base clara para valorizar.</li><li>Sin trámites ante la empresa de agua, las conexiones sanitarias quedan en suspenso.</li><li>Todo ello se traduce en menos valorización ejecutada frente a la programada: en el caso, 6.62 % frente a 48.07 %.</li></ol><p>Como el diseño es del contratista, la demora en subsanar sus propias observaciones difícilmente puede alegarse como causa no imputable.</p>' },
    { h: 'Penalidad del componente diseño',
      html: '<p>La cláusula 15 aplica la fórmula 0.10 × monto ÷ (F × plazo). Para consultorías: F = 0.40 si el plazo es ≤ 60 días y 0.25 si es mayor. Con 45 días, el diseño usaría F = 0.40: 0.10 × 333,434.52 ÷ (0.40 × 45) ≈ <b>S/ 1,852 por día</b>. Es un cálculo ilustrativo: cómo se computa el retraso de cada entregable y sus observaciones depende del contrato y del art. 120 del Reglamento; verificar la norma vigente y el contrato.</p>' }
  ],
  keypoints: [
    'El diseño dura 45 días y vale S/ 333,434.52 en el contrato del caso.',
    'El adelanto directo del diseño es el 30 % de ese componente (cláusula 10), frente al 10 % de la obra.',
    'El expediente debe traer, por especialidad, memoria, especificaciones, planos, metrados, APU y presupuesto.',
    'En el caso siguen abiertas observaciones de electrónica (planos, metrados, puesta a tierra, APU, software de analítica) y de sanitarias.',
    'Una observación abierta impide liberar partidas y valorizar: se convierte en atraso de obra.',
    'El diseño se penaliza como consultoría (F = 0.40 si el plazo es ≤ 60 días); verificar la norma vigente y el contrato.'
  ],
  flashcards: [
    { q: '¿Cuánto es el adelanto directo del componente diseño?', a: 'El 30 % del monto del diseño (cláusula 10): unos S/ 100,030.36 en el caso.' },
    { q: '¿Qué observaciones de electrónica siguen pendientes?', a: 'Planos, metrados, puesta a tierra, análisis de precios unitarios y software de analítica de video.' },
    { q: '¿Qué pendientes sanitarios reporta el informe?', a: 'Planimetría reformulada, ducto sanitario, cisterna y trámites ante la empresa de agua.' },
    { q: '¿Qué F corresponde a una consultoría de 45 días según la cláusula 15?', a: 'F = 0.40 (plazo ≤ 60 días).' }
  ],
  quiz: [
    { q: '¿Por qué el adelanto del diseño (30 %) es mayor que el de la obra (10 %)?', opts: ['Porque el diseño es más barato', 'Porque la consultoría concentra su gasto al inicio', 'Porque no se amortiza'], correct: 1, why: 'Profesionales, estudios y levantamientos se pagan al principio; el adelanto igualmente se garantiza y amortiza.' },
    { q: 'Una partida electrónica cuyo plano sigue observado:', opts: ['Puede ejecutarse igual y regularizarse después', 'Se paga como adicional', 'No debería liberarse hasta tener el plano aprobado'], correct: 2, why: 'Sin plano aprobado no hay base técnica ni para ejecutar ni para valorizar.' },
    { q: 'Penalidad diaria ilustrativa del diseño con F = 0.40 y 45 días:', opts: ['≈ S/ 1,852', '≈ S/ 51,990', '≈ S/ 10,000'], correct: 0, why: '0.10 × 333,434.52 ÷ (0.40 × 45) ≈ S/ 1,852. Los S/ 51,990 corresponden a la obra.' }
  ]
});
