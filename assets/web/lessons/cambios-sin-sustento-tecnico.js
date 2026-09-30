Lesson.start({
  id: 'cambios-sin-sustento-tecnico', area: 'Calidad, seguridad y observaciones', areaIcon: '🦺', icon: '🔀',
  title: 'Cambios sin sustento técnico',
  subtitle: 'En Diseño y Construcción el contratista diseña, pero no cambia lo aprobado a su antojo.',
  norma: 'Expediente técnico aprobado, especificaciones técnicas y control de la Supervisión; los cambios requieren sustento y aprobación previa según el contrato. Verificar la norma vigente y el contrato.',
  intro: '<p>La obra del caso es de <b>Diseño y Construcción</b> a <b>suma alzada</b>: el contratista elaboró el expediente técnico, pero una vez aprobado, ese expediente es la regla que debe cumplir. El informe de setiembre registra tres cambios sin aprobación: <b>encofrado metálico reemplazado por fenólico sin sustento</b>, <b>vaciado parcial en altura de columnas y placas sin procedimiento aprobado</b> y <b>modificación de la forma de zapatas en un eje</b>. Esta lección explica por qué estos cambios son un riesgo técnico y contractual, y cómo debe tramitarse un cambio legítimo.</p>',
  sections: [
    { h: 'Por qué el diseñador no puede cambiar libremente',
      html: '<p>Que el contratista haya diseñado no le da licencia para modificar en campo. El expediente aprobado es la base del precio a suma alzada, de las especificaciones y del control de la Supervisión. Cambiarlo sin aprobación rompe la trazabilidad: la Entidad recibiría una obra distinta de la que aprobó, sin memoria de cálculo que la respalde. Todo cambio pasa por <b>sustento técnico</b>, revisión de la Supervisión y aprobación antes de ejecutarse.</p>' },
    { h: 'Los tres cambios del caso',
      html: '<table><tr><th>Cambio</th><th>Riesgo técnico</th></tr><tr><td>Encofrado metálico a fenólico</td><td>Distinto acabado, rigidez y número de usos; posibles deformaciones y juntas si no se diseña el apuntalamiento.</td></tr><tr><td>Vaciado parcial en altura de columnas y placas</td><td>Juntas frías no previstas, segregación, cangrejeras y falta de continuidad si no hay procedimiento aprobado.</td></tr><tr><td>Forma de zapatas modificada en un eje</td><td>Cambia la transmisión de cargas al suelo; sin memoria de cálculo no se sabe si la cimentación es segura.</td></tr></table>' },
    { h: 'Cómo se tramita un cambio legítimo',
      html: '<ol><li>El contratista identifica la necesidad (constructiva, de suministro o de diseño).</li><li>Presenta <b>sustento técnico</b>: memoria, planos, cálculos, fichas técnicas del material o procedimiento propuesto.</li><li>La Supervisión evalúa y se pronuncia por escrito; si corresponde, eleva a la Entidad.</li><li>Solo con aprobación se ejecuta, y se actualizan planos y protocolos.</li></ol><p>Si el cambio afecta costo o plazo, se evalúa por las vías del contrato; a suma alzada, un cambio de método por conveniencia del contratista no genera pago adicional. Verificar la norma vigente y el contrato.</p>' },
    { h: 'Consecuencias contractuales',
      html: '<ul><li>La Supervisión puede exigir sustento posterior, ensayos o la reconstrucción conforme a lo aprobado, a costo del contratista.</li><li>Pueden aplicar otras penalidades de la cláusula 15: <b>prácticas antitécnicas (0.3 UIT)</b> o <b>materiales fuera de especificación (0.3 UIT)</b>.</li><li>Los vicios que aparezcan después pueden reclamarse por <b>vicios ocultos</b> (7 años según la cláusula 14; art. 69 de la Ley y art. 216 del Reglamento).</li><li>Sumados al atraso, muestran un patrón de desorden técnico que puede sumar al sustento de una decisión de la Entidad.</li></ul>' },
    { h: 'Qué debe registrar la Supervisión',
      html: '<p>Para cada cambio: qué decía el expediente, qué se ejecutó, fecha y ubicación, fotos, la comunicación exigiendo sustento, el plazo dado y la respuesta del contratista. Esa secuencia convierte una discrepancia técnica en prueba. Esta lección es material educativo; las decisiones de resolver o intervenir requieren asesoría legal.</p>' }
  ],
  keypoints: [
    'En Diseño y Construcción, el expediente aprobado obliga también al contratista que lo diseñó.',
    'Todo cambio requiere sustento técnico y aprobación antes de ejecutarse.',
    'Encofrado, vaciado parcial en altura y geometría de zapatas se cambiaron en el caso sin aprobación.',
    'Cambiar la forma de una zapata sin memoria de cálculo deja la cimentación sin respaldo técnico.',
    'A suma alzada, un cambio de método por conveniencia del contratista no genera pago adicional.',
    'Pueden aplicar penalidades por prácticas antitécnicas o materiales fuera de especificación (0.3 UIT).'
  ],
  flashcards: [
    { q: '¿Qué tres cambios sin aprobación registra el informe de setiembre?', a: 'Encofrado metálico a fenólico, vaciado parcial en altura de columnas y placas, y modificación de la forma de zapatas en un eje.' },
    { q: '¿Qué riesgo trae un vaciado parcial en altura sin procedimiento?', a: 'Juntas frías no previstas, segregación, cangrejeras y falta de continuidad del elemento.' },
    { q: '¿Qué debe contener el sustento de un cambio?', a: 'Memoria, planos, cálculos y fichas técnicas del material o procedimiento propuesto.' },
    { q: '¿Cuánto dura la responsabilidad por vicios ocultos según la cláusula 14?', a: 'Siete años.' }
  ],
  quiz: [
    { q: 'El contratista diseñó la obra. ¿Puede cambiar la forma de una zapata en campo sin aprobación?', opts: ['Sí, porque es el diseñador', 'No, el expediente aprobado lo obliga y el cambio requiere sustento y aprobación', 'Sí, si mantiene el volumen de concreto'], correct: 1, why: 'Una vez aprobado, el expediente es la regla; el cambio sin aprobación rompe la trazabilidad y el respaldo técnico.' },
    { q: 'En una obra a suma alzada, el contratista cambia de encofrado por conveniencia propia. ¿Genera adicional?', opts: ['No, es un cambio de método a su cuenta y riesgo', 'Sí, siempre', 'Sí, si el nuevo encofrado es más caro'], correct: 0, why: 'A suma alzada, el cambio de método por conveniencia del contratista no genera pago adicional; verificar el contrato.' },
    { q: '¿Qué es lo primero que debe registrar la Supervisión ante un cambio no aprobado?', opts: ['Nada, hasta que haya una falla', 'Solo una foto', 'Qué decía el expediente, qué se ejecutó, dónde, cuándo, y la exigencia de sustento con plazo'], correct: 2, why: 'La secuencia completa convierte la discrepancia técnica en prueba.' }
  ]
});
