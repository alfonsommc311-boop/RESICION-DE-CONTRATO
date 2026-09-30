var CATALOG = [
  { area: 'El caso y el problema', icon: '🏗️', acc: 'a1',
    desc: 'Una obra pública atrasada, un informe de supervisión y una decisión que se acerca: qué está pasando y cómo leerlo.',
    lessons: [
      { id: 'la-obra-y-su-atraso', icon: '🏗️', t: 'La obra y su atraso', d: 'Diseño y construcción, suma alzada, 120 días de plazo y un avance que no acompaña al calendario.' },
      { id: 'leer-el-informe-mensual', icon: '📄', t: 'Leer el informe mensual de la Supervisión', d: 'Qué buscar en la ficha resumen, en el avance físico y económico y en las incidencias.' },
      { id: 'como-se-mide-el-avance', icon: '📏', t: 'Cómo se mide el avance', d: 'Programado, ejecutado, puntos porcentuales y la razón ejecutado entre programado: no son lo mismo.' },
      { id: 'senales-de-alerta-temprana', icon: '🚨', t: 'Señales de alerta temprana', d: 'Observaciones sin subsanar, componentes sin iniciar, pagos pendientes y garantías por vencer.' },
      { id: 'quien-es-quien-en-la-obra', icon: '👥', t: 'Quién es quién en la obra', d: 'Entidad, contratista, supervisión, residente, coordinador: roles y responsabilidades de cada uno.' }
    ] },
  { area: 'Marco normativo', icon: '📜', acc: 'a2',
    desc: 'La ley, su reglamento, el contrato y los términos de referencia: de dónde salen las reglas que aplican al caso.',
    lessons: [
      { id: 'la-ley-32069-y-su-reglamento', icon: '📜', t: 'La Ley 32069 y su Reglamento', d: 'La Ley General de Contrataciones Públicas y el Reglamento aprobado por Decreto Supremo 009-2025-EF: qué regulan y cómo se leen.' },
      { id: 'el-contrato-como-primera-norma', icon: '🖋️', t: 'El contrato como primera norma', d: 'Monto, plazos, garantías, adelantos, penalidades y resolución: las cláusulas que deciden el caso.' },
      { id: 'los-terminos-de-referencia-de-la-supervision', icon: '🧾', t: 'Los términos de referencia de la Supervisión', d: 'Qué obligan a hacer al supervisor cuando la obra se atrasa y qué debe informar a la Entidad.' },
      { id: 'articulos-que-si-podemos-citar', icon: '🔎', t: 'Artículos que sí podemos citar', d: 'Los artículos confirmados en el contrato y el TDR, y por qué no se inventan los demás.' },
      { id: 'controversias-conciliacion-y-arbitraje', icon: '⚖️', t: 'Controversias: conciliación y arbitraje', d: 'Qué pasa cuando el contratista discute la decisión de la Entidad y por qué importan los plazos.' }
    ] },
  { area: 'Retraso y programa acelerado', icon: '⏱️', acc: 'a3',
    desc: 'La regla del 80 %, la orden del programa acelerado, sus plazos y qué significa caer por segunda vez.',
    lessons: [
      { id: 'la-regla-del-80-por-ciento', icon: '📉', t: 'La regla del 80 %', d: 'Cuándo la valorización acumulada ejecutada es menor al 80 % de la programada y qué se activa.' },
      { id: 'la-orden-del-programa-acelerado', icon: '📢', t: 'La orden del programa acelerado', d: 'Quién la da, cómo se anota en el cuaderno de incidencias y qué debe contener el nuevo programa.' },
      { id: 'los-plazos-siete-cinco-y-siete', icon: '🗓️', t: 'Los plazos: siete, cinco y siete', d: 'Siete días del contratista, cinco de la Supervisión y siete hábiles de la Entidad; si nadie observa, queda aprobado.' },
      { id: 'la-segunda-vez-bajo-el-80', icon: '🔁', t: 'La segunda vez bajo el 80 %', d: 'Se mide contra el nuevo calendario y puede ser causal de resolución o intervención sin apercibimiento.' },
      { id: 'ampliacion-de-plazo-y-retraso-justificado', icon: '🧭', t: 'Ampliación de plazo y retraso justificado', d: 'Cuándo el atraso no es imputable al contratista y por qué el programa acelerado no sirve para pedir ampliación.' }
    ] },
  { area: 'Penalidades y garantías', icon: '💸', acc: 'a4',
    desc: 'La penalidad por mora, el tope del 10 %, las otras penalidades del contrato y las cartas fianza que respaldan todo.',
    lessons: [
      { id: 'la-penalidad-por-mora', icon: '🧮', t: 'La penalidad por mora', d: 'La fórmula 0.10 por monto entre F por plazo, el factor F según el plazo y cómo se aplica día a día.' },
      { id: 'el-tope-del-10-por-ciento', icon: '🧱', t: 'El tope del 10 %', d: 'Mora más otras penalidades hasta el 10 % del monto vigente; al llegar, la Entidad puede resolver.' },
      { id: 'las-otras-penalidades-del-contrato', icon: '📋', t: 'Las otras penalidades del contrato', d: 'Veintisiete supuestos en UIT: residente ausente, valorizaciones tardías, cuaderno sin anotar, cartel, EPP.' },
      { id: 'cartas-fianza-y-renovacion', icon: '🏦', t: 'Cartas fianza y renovación', d: 'Fiel cumplimiento y adelantos: vigencia, renovación y ejecución cuando no se renuevan a tiempo.' },
      { id: 'adelantos-y-amortizacion', icon: '💰', t: 'Adelantos y amortización', d: 'Adelanto directo y de materiales, cómo se amortizan en cada valorización y qué pasa si el contrato termina.' }
    ] },
  { area: 'Intervención económica', icon: '🛟', acc: 'a5',
    desc: 'La alternativa a resolver: la Entidad toma la conducción económica de la obra para terminarla sin romper el contrato.',
    lessons: [
      { id: 'que-es-la-intervencion-economica', icon: '🛟', t: 'Qué es la intervención económica', d: 'Una medida de la Entidad, de oficio o a pedido, por razones técnicas y económicas, para culminar la obra.' },
      { id: 'cuando-conviene-intervenir', icon: '🤔', t: 'Cuándo conviene intervenir y cuándo no', d: 'Obra avanzada, contratista con capacidad técnica pero sin caja, riesgo de paralización larga.' },
      { id: 'como-se-ejecuta-la-intervencion', icon: '🛠️', t: 'Cómo se ejecuta la intervención', d: 'Interventor, cuenta de la obra, pagos directos, control de recursos y cierre de la medida.' },
      { id: 'riesgos-de-la-intervencion', icon: '⚠️', t: 'Riesgos de la intervención', d: 'Costo de gestión, responsabilidad de los funcionarios, conflictos con proveedores y cómo mitigarlos.' }
    ] },
  { area: 'Resolución del contrato', icon: '💥', acc: 'a6',
    desc: 'Causales, procedimiento, efectos y liquidación: cómo se termina un contrato de obra sin perder el arbitraje.',
    lessons: [
      { id: 'causales-de-resolucion', icon: '📌', t: 'Causales de resolución', d: 'Incumplimiento injustificado, tope de penalidades, paralización y las causales especiales de obra.' },
      { id: 'el-requerimiento-por-carta-notarial', icon: '✉️', t: 'El requerimiento por carta notarial', d: 'La vía general: requerir el cumplimiento con plazo y apercibimiento antes de resolver.' },
      { id: 'resolver-sin-apercibimiento', icon: '⚡', t: 'Resolver sin apercibimiento', d: 'Los casos en que la norma no exige requerimiento previo, como la segunda vez bajo el 80 %.' },
      { id: 'efectos-de-la-resolucion', icon: '🛑', t: 'Efectos de la resolución', d: 'Paralización inmediata, constatación física, inventario y custodia de la obra.' },
      { id: 'liquidacion-y-ejecucion-de-garantias', icon: '🧾', t: 'Liquidación y ejecución de garantías', d: 'Saldos, penalidades, adelantos no amortizados y las garantías que responden por el incumplimiento.' },
      { id: 'terminacion-anticipada-sin-culpa', icon: '🤝', t: 'Terminación anticipada sin culpa', d: 'Cuando el contrato termina por falta de presupuesto, pérdida de viabilidad o un componente que hace innecesario el siguiente.' }
    ] },
  { area: 'Actores y decisiones', icon: '🧭', acc: 'a7',
    desc: 'Qué debe hacer cada parte, qué prueba cuenta y cómo se toma una decisión defendible.',
    lessons: [
      { id: 'que-hace-la-supervision', icon: '🔭', t: 'Qué hace la Supervisión', d: 'Medir, anotar, ordenar el programa acelerado, informar a la Entidad y sustentar con datos.' },
      { id: 'que-hace-la-entidad', icon: '🏛️', t: 'Qué hace la Entidad', d: 'Aprobar el programa, pagar lo que debe, requerir, decidir entre intervenir o resolver y documentar.' },
      { id: 'que-hace-el-contratista', icon: '👷', t: 'Qué hace el contratista', d: 'Cómo evitar la resolución: recursos reales, observaciones subsanadas, garantías vigentes y reclamos por escrito.' },
      { id: 'pagos-pendientes-y-mora-de-la-entidad', icon: '⏳', t: 'Pagos pendientes y mora de la Entidad', d: 'Valorizaciones sin pagar: el principal argumento de defensa del contratista y cómo neutralizarlo.' },
      { id: 'el-cuaderno-de-incidencias-como-prueba', icon: '📓', t: 'El cuaderno de incidencias como prueba', d: 'Anotaciones oportunas, cartas con acuse, informes fechados: lo que gana o pierde un arbitraje.' }
    ] },
  { area: 'Valorizaciones y control del avance', icon: '📊', acc: 'a9',
    desc: 'Cómo se valoriza en suma alzada, cómo se controla el avance y por qué la valorización es la prueba central del atraso.',
    lessons: [
      { id: 'la-valorizacion-en-suma-alzada', icon: '💵', t: 'La valorización en suma alzada', d: 'Qué se paga, cómo se mide el avance por partida y por qué no se paga por metrado real.' },
      { id: 'calendario-valorizado-y-curva-s', icon: '📈', t: 'Calendario valorizado y curva S', d: 'Cómo leer la curva programada contra la ejecutada y detectar el atraso antes de que sea tarde.' },
      { id: 'ruta-critica-y-atraso', icon: '🛤️', t: 'Ruta crítica y atraso', d: 'Por qué el atraso en la ruta crítica también activa el programa acelerado aunque el 80 % se cumpla.' },
      { id: 'observar-una-valorizacion', icon: '🔍', t: 'Observar una valorización', d: 'Metrados que no corresponden, partidas no ejecutadas y cómo la Supervisión deja constancia.' },
      { id: 'pago-de-valorizaciones-y-plazos', icon: '🏧', t: 'Pago de valorizaciones y sus plazos', d: 'El circuito de pago, qué pasa si la Entidad se demora y cómo afecta al atraso del contratista.' },
      { id: 'modelo-digital-y-evidencia-del-avance', icon: '🧊', t: 'Modelo digital y evidencia del avance', d: 'Fotos fechadas, protocolos y un modelo BIM de lo ejecutado como prueba objetiva del avance real.' }
    ] },
  { area: 'Ampliaciones, suspensiones y paralización', icon: '⏸️', acc: 'a10',
    desc: 'Cuándo el atraso tiene justificación, cómo se pide más plazo y cuándo una paralización se vuelve causal.',
    lessons: [
      { id: 'causales-de-ampliacion-de-plazo', icon: '📅', t: 'Causales de ampliación de plazo', d: 'Hechos no imputables al contratista que afectan la ruta crítica: qué cuenta y qué no.' },
      { id: 'como-se-pide-una-ampliacion', icon: '📝', t: 'Cómo se pide una ampliación', d: 'Anotación, cuantificación, sustento con el calendario vigente y plazos para pedir y responder.' },
      { id: 'suspension-del-plazo-de-ejecucion', icon: '⏸️', t: 'Suspensión del plazo de ejecución', d: 'Cuándo las partes suspenden el plazo, qué se documenta y cómo se reinicia.' },
      { id: 'paralizacion-injustificada', icon: '🚧', t: 'Paralización injustificada', d: 'Cuándo detener la obra sin causa se vuelve incumplimiento y causal de resolución.' },
      { id: 'mayores-gastos-generales', icon: '🧾', t: 'Mayores gastos generales', d: 'Qué se reconoce cuando se amplía el plazo y por qué un retraso justificado no siempre se paga.' },
      { id: 'atraso-imputable-y-no-imputable', icon: '⚖️', t: 'Atraso imputable y no imputable', d: 'Cómo separar lo que es responsabilidad del contratista de lo que causó la Entidad o un tercero.' }
    ] },
  { area: 'Diseño y construcción', icon: '📐', acc: 'a11',
    desc: 'Las particularidades de un contrato en que el contratista diseña y construye: riesgos, entregables y responsabilidades.',
    lessons: [
      { id: 'que-es-diseno-y-construccion', icon: '📐', t: 'Qué es diseño y construcción', d: 'Un solo contratista para el expediente técnico y la obra: ventajas, riesgos y quién responde por qué.' },
      { id: 'el-componente-diseno', icon: '✏️', t: 'El componente diseño', d: 'Plazo de 45 días, adelanto del 30 %, entregables y observaciones al expediente técnico.' },
      { id: 'expediente-tecnico-y-monto-de-obra', icon: '📚', t: 'Expediente técnico y monto de obra', d: 'Por qué el monto de obra es un estimado y cómo cambia al aprobarse el expediente.' },
      { id: 'errores-de-diseno-y-responsabilidad', icon: '🧯', t: 'Errores de diseño y responsabilidad', d: 'Cuando el diseño falla, el contratista responde por lo que diseñó: consecuencias en plazo y costo.' },
      { id: 'compatibilizacion-de-especialidades', icon: '🧩', t: 'Compatibilización de especialidades', d: 'Estructuras, arquitectura, sanitarias, eléctricas y electrónica: cómo las incompatibilidades frenan la obra.' },
      { id: 'componentes-sin-iniciar', icon: '🕳️', t: 'Componentes sin iniciar', d: 'Arquitectura, sanitarias y equipamiento electrónico pendientes: qué riesgo representan para el plazo.' }
    ] },
  { area: 'Calidad, seguridad y observaciones', icon: '🦺', acc: 'a12',
    desc: 'Las observaciones técnicas que construyen el expediente de incumplimiento y cómo se documentan.',
    lessons: [
      { id: 'protocolos-y-liberacion-de-vaciados', icon: '🧪', t: 'Protocolos y liberación de vaciados', d: 'Por qué ningún elemento se vacía sin protocolo firmado y qué pasa cuando se hace sin la Supervisión.' },
      { id: 'no-conformidades-y-subsanacion', icon: '❗', t: 'No conformidades y subsanación', d: 'Cómo se abre una observación, qué plazo se da para subsanar y cómo se cierra.' },
      { id: 'cambios-sin-sustento-tecnico', icon: '🔀', t: 'Cambios sin sustento técnico', d: 'Encofrados, dosificaciones o geometrías modificadas sin aprobación: riesgo técnico y contractual.' },
      { id: 'seguridad-y-salud-en-el-trabajo', icon: '🦺', t: 'Seguridad y salud en el trabajo', d: 'Trabajo en altura, ATS y PETAR: cuando un incumplimiento de seguridad también es incumplimiento del contrato.' },
      { id: 'ambiental-y-arqueologia', icon: '🏺', t: 'Ambiental y arqueología', d: 'Monitoreo arqueológico, residuos y hallazgos: cuándo justifican paralizaciones y cuándo no.' },
      { id: 'la-observacion-como-prueba', icon: '📎', t: 'La observación como prueba', d: 'Cómo una serie de observaciones bien documentadas sostiene una decisión de resolver o intervenir.' }
    ] },
  { area: 'Después de resolver', icon: '🔚', acc: 'a13',
    desc: 'Qué pasa con la obra, el saldo, las garantías y los funcionarios cuando el contrato ya terminó.',
    lessons: [
      { id: 'constatacion-fisica-e-inventario', icon: '📋', t: 'Constatación física e inventario', d: 'Quién asiste, qué se registra y por qué esta acta decide la liquidación y la continuidad.' },
      { id: 'saldo-de-obra-y-nuevo-contratista', icon: '🏗️', t: 'Saldo de obra y nuevo contratista', d: 'Cómo se contrata lo que falta, con qué expediente y en cuánto tiempo.' },
      { id: 'custodia-y-seguridad-de-la-obra', icon: '🔒', t: 'Custodia y seguridad de la obra', d: 'La obra paralizada se deteriora y se roba: quién la cuida mientras se decide.' },
      { id: 'sanciones-administrativas-al-contratista', icon: '🚫', t: 'Sanciones administrativas al contratista', d: 'Por qué una resolución por causa del contratista puede terminar en sanción, y por qué debe quedar consentida.' },
      { id: 'control-gubernamental-y-responsabilidad', icon: '🏛️', t: 'Control gubernamental y responsabilidad', d: 'El órgano de control, los funcionarios y la obra paralizada: qué se revisa y cómo protegerse.' },
      { id: 'obra-inconclusa-y-lecciones', icon: '🏚️', t: 'Obra inconclusa y lecciones', d: 'Cómo evitar que la resolución deje una obra abandonada y qué aprender para el siguiente contrato.' }
    ] },
  { area: 'Casos resueltos', icon: '🧩', acc: 'a14',
    desc: 'Casos ilustrativos, paso a paso, con la decisión, el porqué y lo que se pudo hacer mejor.',
    lessons: [
      { id: 'caso-el-contratista-que-no-presento-el-programa', icon: '📭', t: 'Caso: el contratista que no presentó el programa', d: 'Orden del programa acelerado sin respuesta en siete días: qué hizo la Entidad y por qué.' },
      { id: 'caso-la-fianza-que-vencio', icon: '⌛', t: 'Caso: la fianza que venció', d: 'Una carta fianza sin renovar en plena crisis de atraso: ejecutar, requerir o esperar.' },
      { id: 'caso-la-entidad-que-no-pagaba', icon: '💸', t: 'Caso: la Entidad que no pagaba', d: 'Resolución por atraso con valorizaciones impagas: cómo terminó en arbitraje y qué se pudo evitar.' },
      { id: 'caso-intervencion-que-salvo-la-obra', icon: '🛟', t: 'Caso: la intervención que salvó la obra', d: 'Contratista técnicamente capaz pero sin caja: la Entidad intervino y la obra se terminó.' },
      { id: 'caso-tope-de-penalidades', icon: '🧱', t: 'Caso: el tope de penalidades', d: 'La mora llegó al 10 % en treinta días: resolución por acumulación y liquidación.' },
      { id: 'caso-resolucion-anulada-en-arbitraje', icon: '⚖️', t: 'Caso: resolución anulada en arbitraje', d: 'Una resolución sin procedimiento completo: por qué se cayó y qué costo tuvo para la Entidad.' }
    ] },
  { area: 'Decidir bien (integradora)', icon: '🎓', acc: 'a8',
    desc: 'Ruta de decisión, errores que se pagan caro, un caso resuelto y el examen final.',
    lessons: [
      { id: 'ruta-de-decision-en-30-dias', icon: '🗺️', t: 'Ruta de decisión en 30 días', d: 'Del informe mensual a la decisión: medir, ordenar, esperar plazos, informar, decidir, documentar.' },
      { id: 'errores-que-cuestan-el-arbitraje', icon: '🧨', t: 'Errores que cuestan el arbitraje', d: 'Resolver sin procedimiento, no pagar, dejar vencer garantías, no anotar, medir mal el 80 %.' },
      { id: 'caso-resuelto-segunda-vez', icon: '🧩', t: 'Caso resuelto: segunda vez bajo el 80 %', d: 'Setiembre con programa acelerado, octubre otra vez bajo el umbral: qué haría cada actor, paso a paso.' },
      { id: 'examen-integrador', icon: '🎓', t: 'Examen integrador', d: 'Doce preguntas que cruzan todas las áreas para comprobar que dominas el tema.' }
    ] }
];
