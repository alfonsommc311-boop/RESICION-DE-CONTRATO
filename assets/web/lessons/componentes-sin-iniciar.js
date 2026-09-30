Lesson.start({
  id: 'componentes-sin-iniciar', area: 'Diseño y construcción', areaIcon: '📐', icon: '🕳️',
  title: 'Componentes sin iniciar',
  subtitle: 'Lo que no ha empezado es justamente lo que más pesa en el presupuesto.',
  norma: 'Control de avance por el art. 207 del Reglamento (regla del 80 % y atraso en la ruta crítica) y calendarios del art. 206; en caso de segunda caída bajo el 80 % del nuevo calendario, causal de resolución o intervención económica sin apercibimiento. Verificar la norma vigente y el contrato.',
  intro: '<p>El informe N° 03 de la Supervisión (setiembre 2026) reporta que <b>arquitectura, instalaciones sanitarias y equipamiento electrónico</b> no se habían iniciado, y que el equipamiento electrónico es <b>la mayor parte del presupuesto</b>. Con 120 días de plazo y la obra iniciada el 08/07/2026, eso significa que casi todo el valor del contrato queda comprimido en el tiempo restante. Esta lección explica por qué los componentes sin iniciar son el mayor riesgo para el plazo y cómo se conectan con la regla del 80 % y la segunda vez.</p>',
  sections: [
    { h: 'Qué no ha empezado',
      html: '<table><tr><th>Componente</th><th>Estado</th><th>Obstáculo de diseño</th></tr><tr><td>Arquitectura</td><td>Sin iniciar</td><td>Depende de estructuras y de las instalaciones que aloja</td></tr><tr><td>Instalaciones sanitarias</td><td>Sin iniciar</td><td>Planimetría reformulada, ducto, cisterna y trámites ante la empresa de agua</td></tr><tr><td>Equipamiento electrónico</td><td>Sin iniciar</td><td>Planos, metrados, puesta a tierra, APU y software de analítica de video observados</td></tr></table><p>Los tres tienen algo en común: <span class="hl">su diseño no está cerrado</span>.</p>' },
    { h: 'Por qué el electrónico es el más crítico',
      html: '<ul><li>Es la <b>mayor parte del presupuesto</b>: mientras no se ejecute, la valorización no puede acercarse a lo programado.</li><li>Suele requerir <b>adquisición e importación</b> de equipos y software, con plazos de entrega largos.</li><li>Su instalación va al final, sobre obra civil y arquitectura terminadas, así que cualquier atraso previo lo empuja más.</li></ul><p>Por eso el ejecutado de 6.62 % frente a 48.07 % programado (razón de 13.8 %) es difícil de revertir sin el equipamiento electrónico en marcha.</p>' },
    { h: 'Efecto en la ruta crítica',
      html: '<p>El art. 207, recogido en el TDR, habilita la orden de programa acelerado no solo por la regla del 80 %, sino también por <b>atraso en la ruta crítica</b>. Componentes sin iniciar que dependen de un diseño observado están casi con seguridad en la ruta crítica: cada día sin cerrar el expediente es un día que se pierde al final de la obra.</p>' },
    { h: 'El programa acelerado y la segunda vez',
      html: '<p>En setiembre ya se ordenó el programa acelerado. Para que sea creíble debe mostrar <b>cuándo se cierran las observaciones de diseño</b> y cuándo arrancan los tres componentes, con compras y frentes paralelos. Si en octubre la valorización ejecutada vuelve a quedar bajo el 80 % del <b>nuevo calendario acelerado</b>, eso <b>puede ser causal de resolución o intervención económica sin apercibimiento</b>. Un programa acelerado que no resuelve los componentes sin iniciar anticipa esa segunda caída.</p>' },
    { h: 'Qué pedir a cada actor',
      html: '<table><tr><th>Actor</th><th>Acción</th></tr><tr><td>Contratista</td><td>Cerrar observaciones de electrónica y sanitarias; colocar órdenes de compra del equipamiento; abrir frentes de arquitectura.</td></tr><tr><td>Supervisión</td><td>Verificar hitos semanales de los componentes sin iniciar y anotarlos en el cuaderno de incidencias.</td></tr><tr><td>Entidad</td><td>Pronunciarse a tiempo sobre el expediente y evaluar con asesoría legal si corresponde resolver o intervenir.</td></tr></table><p>Material formativo: no reemplaza asesoría legal; verificar la norma vigente y el contrato.</p>' }
  ],
  keypoints: [
    'A setiembre 2026 no se habían iniciado arquitectura, instalaciones sanitarias ni equipamiento electrónico.',
    'El equipamiento electrónico es la mayor parte del presupuesto: sin él, la valorización no alcanza lo programado.',
    'Los tres componentes dependen de un diseño con observaciones abiertas.',
    'Componentes sin iniciar con diseño observado comprometen la ruta crítica, condición independiente del art. 207.',
    'El programa acelerado debe fijar fechas para cerrar el diseño y arrancar cada componente.',
    'Si se vuelve a caer bajo el 80 % del nuevo calendario, puede resolverse o intervenirse sin apercibimiento.'
  ],
  flashcards: [
    { q: '¿Qué componentes no se habían iniciado según el informe N° 03?', a: 'Arquitectura, instalaciones sanitarias y equipamiento electrónico.' },
    { q: '¿Cuál de ellos es la mayor parte del presupuesto?', a: 'El equipamiento electrónico.' },
    { q: '¿Por qué el electrónico es especialmente riesgoso para el plazo?', a: 'Pesa más en el presupuesto, requiere adquisiciones largas y se instala al final, sobre obra civil terminada.' },
    { q: '¿Contra qué calendario se mide la segunda caída bajo el 80 %?', a: 'Contra el nuevo calendario acelerado; puede ser causal de resolución o intervención sin apercibimiento.' }
  ],
  quiz: [
    { q: 'Con el equipamiento electrónico sin iniciar, la razón ejecutado ÷ programado:', opts: ['Mejora sola al final de la obra', 'Difícilmente puede acercarse al 80 %, porque falta la mayor parte del presupuesto', 'No se ve afectada'], correct: 1, why: 'Mientras no se valorice el componente de mayor peso, el ejecutado seguirá muy por debajo de lo programado.' },
    { q: 'Un programa acelerado creíble para el caso debe incluir:', opts: ['Fechas para cerrar las observaciones de diseño y arrancar cada componente', 'Solo más cuadrillas de concreto', 'Una ampliación de plazo'], correct: 0, why: 'Sin diseño cerrado no hay forma de iniciar arquitectura, sanitarias ni electrónica.' },
    { q: 'Si en octubre la obra vuelve a quedar bajo el 80 % del calendario acelerado:', opts: ['Se requiere un nuevo apercibimiento de 30 días', 'Se ordena otro programa acelerado sin más consecuencias', 'Puede ser causal de resolución o intervención económica sin apercibimiento'], correct: 2, why: 'Así lo recoge el TDR siguiendo el art. 207: la segunda vez se mide contra el nuevo calendario.' },
    { q: 'El atraso en la ruta crítica, según el art. 207 recogido en el TDR:', opts: ['Solo cuenta si la razón es menor al 80 %', 'Es una condición independiente que también habilita la orden del programa acelerado', 'No tiene relevancia'], correct: 1, why: 'El TDR menciona la regla del 80 % «o» el atraso en la ruta crítica.' }
  ]
});
