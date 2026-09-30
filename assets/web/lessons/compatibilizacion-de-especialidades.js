Lesson.start({
  id: 'compatibilizacion-de-especialidades', area: 'Diseño y construcción', areaIcon: '📐', icon: '🧩',
  title: 'Compatibilización de especialidades',
  subtitle: 'Un ducto que choca con una viga detiene tres frentes a la vez.',
  norma: 'Obligación del contratista de entregar un expediente técnico compatibilizado en el sistema de diseño y construcción; control de la Supervisión según el art. 207 del Reglamento. Verificar la norma vigente y el contrato.',
  intro: '<p>Un expediente técnico no es una suma de planos independientes: estructuras, arquitectura, instalaciones sanitarias, eléctricas y electrónica deben <b>encajar entre sí</b>. Eso es la <b>compatibilización</b>. Cuando falla, aparecen interferencias (un ducto que atraviesa una viga, una cisterna sin espacio, una bandeja de cables sin recorrido) que obligan a detener el trabajo y rediseñar. En diseño y construcción esta tarea es del contratista. Esta lección explica cómo se hace, cómo se detectan las incompatibilidades y cómo frenan la obra del caso.</p>',
  sections: [
    { h: 'Qué es compatibilizar',
      html: '<p>Compatibilizar es superponer las especialidades y resolver los conflictos <b>antes</b> de construir:</p><ul><li><b>Estructuras vs sanitarias:</b> pases de tuberías en vigas y losas, ubicación de la cisterna y del ducto sanitario.</li><li><b>Estructuras vs electrónica:</b> pases para canalizaciones, soportes de cámaras, cuartos técnicos.</li><li><b>Arquitectura vs todas:</b> falsos cielos, alturas libres, tabiques que alojan instalaciones.</li><li><b>Eléctricas vs electrónica:</b> puesta a tierra, tableros, separación de circuitos.</li></ul>' },
    { h: 'Por qué la incompatibilidad frena la obra',
      html: '<ol><li>Se detecta el conflicto en campo.</li><li>La Supervisión no libera la partida afectada.</li><li>Se rediseña, se revisa y se vuelve a aprobar.</li><li>Mientras tanto, se detienen también las partidas que dependen de ella.</li></ol><p>El efecto es en cadena: <span class="hl">una sola interferencia puede paralizar estructuras, sanitarias y electrónica a la vez</span>, y eso baja la valorización ejecutada frente a la programada.</p>' },
    { h: 'El caso: señales de falta de compatibilización',
      html: '<table><tr><th>Pendiente</th><th>Especialidades que cruza</th></tr><tr><td>Planimetría sanitaria reformulada</td><td>Sanitarias, arquitectura, estructuras</td></tr><tr><td>Ducto sanitario</td><td>Sanitarias, estructuras, arquitectura</td></tr><tr><td>Cisterna</td><td>Sanitarias, estructuras</td></tr><tr><td>Puesta a tierra</td><td>Electrónica, eléctricas, estructuras</td></tr><tr><td>Modificación de zapatas</td><td>Estructuras y todo lo que se apoya en ellas</td></tr></table><p>Que la planimetría sanitaria haya tenido que <b>reformularse</b> indica que el diseño original no estaba compatibilizado con el resto del proyecto.</p>' },
    { h: 'Cómo se previene',
      html: '<ul><li>Reuniones de compatibilización con todos los especialistas antes de entregar el expediente.</li><li>Superposición de planos o modelado 3D para detectar interferencias.</li><li>Un cuadro de interferencias con responsable y fecha de cierre.</li><li>Que la Supervisión verifique la compatibilización al revisar el expediente y no solo cada especialidad por separado.</li></ul>' },
    { h: 'Quién responde y cómo se documenta',
      html: '<p>En diseño y construcción, la incompatibilidad es, por regla general, responsabilidad del contratista: no genera por sí sola ampliación de plazo ni adicional. La Supervisión debe anotar en el cuaderno de incidencias cada frente detenido, la especialidad involucrada y la fecha, porque esos registros sostienen luego el control del 80 % (art. 207) y cualquier decisión posterior; verificar la norma vigente y el contrato. Material formativo: no reemplaza asesoría legal.</p>' }
  ],
  keypoints: [
    'Compatibilizar es hacer que estructuras, arquitectura, sanitarias, eléctricas y electrónica encajen antes de construir.',
    'Una interferencia detectada en campo detiene la partida afectada y todas las que dependen de ella.',
    'En el caso, la planimetría sanitaria reformulada, el ducto, la cisterna y la puesta a tierra son señales de falta de compatibilización.',
    'En diseño y construcción la compatibilización es obligación del contratista.',
    'Se previene con reuniones de especialistas, superposición o modelado 3D y un cuadro de interferencias.',
    'Cada frente detenido debe anotarse en el cuaderno de incidencias; verificar la norma vigente y el contrato.'
  ],
  flashcards: [
    { q: '¿Qué es la compatibilización de especialidades?', a: 'Superponer y coordinar todas las especialidades del expediente para resolver sus conflictos antes de construir.' },
    { q: '¿Qué indica que la planimetría sanitaria tuviera que reformularse?', a: 'Que el diseño original no estaba compatibilizado con las demás especialidades.' },
    { q: '¿Quién responde por una incompatibilidad en diseño y construcción?', a: 'Por regla general, el contratista, que elaboró el expediente.' },
    { q: 'Nombra una herramienta para detectar interferencias.', a: 'La superposición de planos o el modelado 3D, junto con un cuadro de interferencias.' }
  ],
  quiz: [
    { q: 'El ducto sanitario atraviesa una viga que no tiene pase previsto. Lo correcto es:', opts: ['Picar la viga y seguir', 'Detener la partida, rediseñar y aprobar la solución antes de ejecutar', 'Valorizar la partida como ejecutada'], correct: 1, why: 'Intervenir un elemento estructural sin diseño aprobado es un riesgo técnico y contractual.' },
    { q: 'Una incompatibilidad del expediente elaborado por el contratista:', opts: ['Justifica automáticamente una ampliación de plazo', 'Es un adicional a cargo de la Entidad', 'Es, por regla general, riesgo del contratista'], correct: 2, why: 'En diseño y construcción el contratista diseñó y debió compatibilizar.' },
    { q: '¿Qué pendiente del caso cruza electrónica, eléctricas y estructuras?', opts: ['La puesta a tierra', 'Los trámites ante la empresa de agua', 'La cisterna'], correct: 0, why: 'La puesta a tierra involucra electrónica y eléctricas, y requiere coordinación con la cimentación.' }
  ]
});
