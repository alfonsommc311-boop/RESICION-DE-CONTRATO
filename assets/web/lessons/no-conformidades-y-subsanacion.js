Lesson.start({
  id: 'no-conformidades-y-subsanacion', area: 'Calidad, seguridad y observaciones', areaIcon: '🦺', icon: '❗',
  title: 'No conformidades y subsanación',
  subtitle: 'Una observación sin plazo ni cierre es solo una queja.',
  norma: 'Obligaciones de calidad del contrato y del expediente técnico, control de la Supervisión según su TDR y cuaderno de incidencias como registro; verificar la norma vigente y el contrato.',
  intro: '<p>Una <b>no conformidad</b> es todo trabajo, material o procedimiento que no cumple lo especificado. Abrirla bien, darle un plazo razonable y cerrarla con evidencia es lo que distingue un control serio de una lista de quejas. En el caso real, el informe de setiembre arrastra <b>cuatro observaciones pendientes de subsanar</b> y documentación de calidad incompleta (certificados de calidad y fichas técnicas). Esta lección enseña el ciclo completo: detectar, registrar, exigir, verificar y cerrar.</p>',
  sections: [
    { h: 'Las observaciones pendientes del caso',
      html: '<table><tr><th>Observación</th><th>Naturaleza</th></tr><tr><td>Vaciado de dos zapatas con concreto preparado en obra, sin dosificación controlada y sin presencia de la Supervisión</td><td>Calidad del concreto y control</td></tr><tr><td>Cambio de encofrado metálico a fenólico sin sustento</td><td>Cambio no aprobado</td></tr><tr><td>Vaciado parcial en altura de columnas y placas sin procedimiento aprobado</td><td>Procedimiento constructivo</td></tr><tr><td>Modificación de la forma de zapatas en un eje</td><td>Geometría distinta a planos</td></tr></table><p>A ello se suman los <b>certificados de calidad y fichas técnicas pendientes</b> de materiales. Todas siguen abiertas en setiembre.</p>' },
    { h: 'Cómo se abre una no conformidad',
      html: '<ol><li><b>Detectar y evidenciar:</b> fotos fechadas, ubicación exacta (eje, nivel, elemento), mediciones.</li><li><b>Registrar:</b> anotar en el cuaderno de incidencias y comunicar por escrito al contratista.</li><li><b>Describir contra el requisito:</b> qué dice el plano o la especificación y qué se encontró. Sin requisito citado no hay no conformidad.</li><li><b>Exigir acción y plazo:</b> qué debe hacer el contratista (sustentar, ensayar, corregir o demoler) y en cuánto tiempo.</li></ol>' },
    { h: 'El plazo de subsanación',
      html: '<p>El plazo lo fija la Supervisión según la complejidad de la corrección, salvo que el contrato o el expediente fijen uno; verificar la norma vigente y el contrato. Debe ser <b>razonable y cierto</b>: una fecha concreta, no «a la brevedad». Un plazo cierto permite después afirmar que el contratista <b>no subsanó</b>, que es lo que convierte una observación técnica en un incumplimiento documentado. Si el contratista pide más tiempo, la respuesta también se registra.</p>' },
    { h: 'Cómo se cierra',
      html: '<p>Una observación se cierra solo con <b>evidencia objetiva</b>: resultados de ensayos, sustento técnico aprobado, protocolo de corrección firmado o constatación en campo. El cierre se anota en el cuaderno con la misma precisión que la apertura. Nunca se cierra por el paso del tiempo ni porque el elemento ya está cubierto. Si el contratista corrige, la observación se cierra, pero el antecedente queda: sirve para medir el patrón de desempeño.</p>' },
    { h: 'Consecuencias de no subsanar',
      html: '<ul><li>Pueden aplicar otras penalidades de la cláusula 15: <b>materiales fuera de especificación (0.3 UIT)</b>, <b>prácticas antitécnicas (0.3 UIT)</b>; se suman a la mora para el <b>tope del 10 %</b>.</li><li>Los trabajos no conformes no deberían valorizarse como correctamente ejecutados hasta su subsanación; verificar la norma vigente y el contrato.</li><li>El incumplimiento reiterado de obligaciones puede sumar al sustento de la resolución conforme al <b>art. 68 (num. 68.1) de la Ley 32069</b>, con el procedimiento del <b>art. 122 del Reglamento</b>.</li></ul><p>Esta lección es material educativo; las decisiones de resolver o intervenir requieren asesoría legal.</p>' }
  ],
  keypoints: [
    'Una no conformidad se describe contra un requisito concreto: plano, especificación o procedimiento aprobado.',
    'Se abre con evidencia, anotación en el cuaderno, comunicación escrita y un plazo cierto.',
    'Un plazo cierto permite después afirmar que el contratista no subsanó.',
    'Solo se cierra con evidencia objetiva, nunca por el paso del tiempo.',
    'En el caso hay cuatro observaciones abiertas más certificados de calidad y fichas técnicas pendientes.',
    'Las otras penalidades aplicables se suman a la mora para el tope del 10 %.'
  ],
  flashcards: [
    { q: '¿Qué es una no conformidad?', a: 'Un trabajo, material o procedimiento que no cumple el requisito especificado en planos, especificaciones o procedimientos aprobados.' },
    { q: '¿Cuántas observaciones pendientes registra el informe de setiembre?', a: 'Cuatro: zapatas vaciadas sin control, cambio de encofrado, vaciado parcial en altura y modificación de zapatas; además faltan certificados y fichas técnicas.' },
    { q: '¿Por qué el plazo de subsanación debe ser una fecha cierta?', a: 'Porque permite acreditar después que el contratista no subsanó, convirtiendo la observación en incumplimiento documentado.' },
    { q: '¿Con qué se cierra una observación?', a: 'Con evidencia objetiva (ensayos, sustento aprobado, protocolo de corrección o constatación) anotada en el cuaderno.' }
  ],
  quiz: [
    { q: 'Una observación se registró hace dos meses y el elemento ya fue tarrajeado. ¿Está cerrada?', opts: ['Sí, por el tiempo transcurrido', 'Sí, porque ya no se ve', 'No, solo se cierra con evidencia objetiva de subsanación'], correct: 2, why: 'El paso del tiempo o el ocultamiento del elemento no subsanan nada.' },
    { q: '¿Qué redacción de plazo es la adecuada?', opts: ['«Subsanar a la brevedad»', '«Subsanar hasta el día fijado, con presentación de ensayos»', '«Subsanar cuando el avance lo permita»'], correct: 1, why: 'Solo una fecha cierta y una acción concreta permiten verificar el incumplimiento.' },
    { q: 'Las otras penalidades por prácticas antitécnicas:', opts: ['Se suman a la mora para el tope del 10 %', 'No cuentan para el tope', 'Reemplazan a la penalidad por mora'], correct: 0, why: 'La cláusula 15 suma mora y otras penalidades para el tope del 10 % del monto vigente.' }
  ]
});
