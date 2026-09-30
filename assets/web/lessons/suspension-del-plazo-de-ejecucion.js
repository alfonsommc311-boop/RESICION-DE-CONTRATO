Lesson.start({
  id: 'suspension-del-plazo-de-ejecucion', area: 'Ampliaciones, suspensiones y paralización', areaIcon: '⏸️', icon: '⏸️',
  title: 'Suspensión del plazo de ejecución',
  subtitle: 'Suspender es congelar el reloj por acuerdo y por escrito; dejar de trabajar sin acta no suspende nada.',
  norma: 'La suspensión del plazo por acuerdo de las partes ante eventos no atribuibles se regula en el Reglamento de la Ley 32069 (describir en general; verificar la norma vigente y el contrato). Retraso justificado: cláusula 15; calendarios: art. 206.',
  intro: '<p>A diferencia de la ampliación, que <b>añade días</b> al plazo, la suspensión <b>detiene el conteo</b> mientras dura un evento que impide ejecutar y que no es atribuible a ninguna de las partes, o cuando ambas lo acuerdan. Es una herramienta útil y a la vez delicada: una suspensión mal documentada puede encubrir una paralización del contratista o dejar a la Entidad sin argumentos para aplicar mora. Esta lección explica cuándo procede, cómo se formaliza, cómo se reinicia y qué efectos tiene sobre penalidades, garantías y el control del 80 %.</p>',
  sections: [
    { h: 'Suspensión, ampliación y paralización: tres cosas distintas',
      html: '<table><tr><th>Figura</th><th>Qué pasa con el plazo</th><th>Cómo nace</th></tr><tr><td>Suspensión</td><td>Se congela; se reanuda donde quedó</td><td>Acuerdo documentado de las partes ante un evento que impide ejecutar</td></tr><tr><td>Ampliación</td><td>Se alarga la fecha de término</td><td>Solicitud del contratista aprobada por la Entidad</td></tr><tr><td>Paralización de hecho</td><td>Sigue corriendo</td><td>El contratista deja de trabajar sin acuerdo</td></tr></table><p>La tercera es la peligrosa: si no hay acta de suspensión, el reloj no se detiene y la mora sigue acumulándose.</p>' },
    { h: 'Cuándo procede (en términos generales)',
      html: '<p>La norma permite, en general, que las partes acuerden suspender el plazo cuando se produce un evento no atribuible a ellas que impide la ejecución, y en otros supuestos que el Reglamento contempla. Los supuestos exactos y sus requisitos deben verificarse en la norma vigente y el contrato.</p><ul><li><b>Sí suelen encajar:</b> eventos de fuerza mayor que impiden trabajar (desastres, disposiciones de autoridad que cierran la zona), hallazgos que obligan a detener por orden de la autoridad competente.</li><li><b>No encajan:</b> falta de materiales o de personal del contratista, observaciones técnicas pendientes de subsanar, conflictos con proveedores.</li></ul>' },
    { h: 'El acta de suspensión: qué debe decir',
      html: '<ul><li>La <b>causa</b> concreta y por qué impide ejecutar.</li><li>La <b>fecha de inicio</b> de la suspensión y, si se conoce, la condición para reanudar.</li><li>Los <b>frentes afectados</b>: una suspensión puede ser total o solo de algunas partidas.</li><li>Las <b>obligaciones durante la suspensión</b>: custodia de la obra, seguridad, señalización, vigencia de seguros.</li><li>El tratamiento de <b>costos</b>, si las partes lo pactan, con remisión a la norma.</li></ul><p>Debe firmarse por quienes tienen facultades y anotarse en el cuaderno de obra.</p>' },
    { h: 'Reinicio y efectos',
      html: '<p>Cuando cesa la causa, se firma un <b>acta de reinicio</b> y se actualiza el calendario (art. 206): las fechas posteriores se corren tantos días como duró la suspensión. Consecuencias prácticas:</p><ol><li>La mora no corre durante la suspensión, pero sí antes y después.</li><li>El control del 80 % (art. 207) se aplica contra el calendario actualizado.</li><li>Las <b>garantías</b> deben seguir vigentes: una suspensión que extiende la obra obliga a revisar vencimientos. En el caso, la fianza de fiel cumplimiento del informe N° 03 vence el 28/10/2026, y la cláusula 9 permite ejecutarla si no se renueva antes (art. 118).</li><li>Durante la suspensión rige la otra penalidad N° 20: ejecutar partidas con obra paralizada (1 UIT).</li></ol>' },
    { h: 'Aplicación al caso',
      html: '<p>A setiembre de 2026 no había suspensiones ni ampliaciones registradas. Si en octubre el contratista, ya bajo el programa acelerado, propusiera suspender el plazo, la Entidad y la Supervisión deberían preguntarse si la causa es realmente ajena o si se busca detener la mora y evitar la medición del segundo incumplimiento del 80 % contra el nuevo calendario.</p><p>Aceptar una suspensión sin causa real equivale a renunciar a derechos de la Entidad; decidirlo requiere asesoría legal.</p>' }
  ],
  keypoints: [
    'La suspensión congela el plazo; la ampliación lo alarga; la paralización de hecho no detiene el reloj.',
    'Sin acta de suspensión firmada y anotada en el cuaderno, el plazo sigue corriendo y la mora también.',
    'La causa debe impedir ejecutar y no ser atribuible a las partes; los problemas del contratista no califican.',
    'Al reiniciar se firma acta y se actualiza el calendario; el control del 80 % se mide contra él.',
    'Toda suspensión obliga a revisar la vigencia de las garantías, como la fianza que vence el 28/10/2026.',
    'Los supuestos exactos de suspensión deben verificarse en la norma vigente y el contrato.'
  ],
  flashcards: [
    { q: '¿Qué diferencia a la suspensión de la ampliación de plazo?', a: 'La suspensión detiene el conteo del plazo; la ampliación añade días a la fecha de término.' },
    { q: '¿Qué pasa si el contratista deja de trabajar sin acta de suspensión?', a: 'El plazo sigue corriendo: es una paralización de hecho y la mora se acumula.' },
    { q: '¿Qué documento cierra la suspensión?', a: 'El acta de reinicio, seguida de la actualización del calendario.' },
    { q: '¿Qué penalidad castiga ejecutar partidas con obra paralizada?', a: 'La otra penalidad N° 20 de la cláusula 15: 1 UIT.' }
  ],
  quiz: [
    { q: 'El contratista no tiene fierro por falta de pago a su proveedor y pide suspender el plazo. ¿Procede?', opts: ['Sí, porque no puede trabajar', 'No, porque la causa es atribuible al propio contratista', 'Sí, si la Supervisión lo firma'], correct: 1, why: 'La suspensión exige un evento no atribuible a las partes; la logística es riesgo del contratista.' },
    { q: 'Una suspensión de 20 días se acuerda cerca del vencimiento de la fianza de fiel cumplimiento. ¿Qué debe revisar la Entidad?', opts: ['Que la fianza se renueve y siga vigente', 'Nada: la suspensión también suspende la fianza', 'Que se devuelva la fianza'], correct: 0, why: 'Las garantías deben mantenerse vigentes; la cláusula 9 permite ejecutarlas si no se renuevan antes de vencer.' },
    { q: 'Tras el reinicio, ¿contra qué se mide la regla del 80 %?', opts: ['Contra el calendario original sin cambios', 'Contra el programa acelerado anterior sin actualizar', 'Contra el calendario actualizado que corre las fechas por los días de suspensión'], correct: 2, why: 'El calendario se actualiza al reiniciar y pasa a ser la base del control.' }
  ]
});
