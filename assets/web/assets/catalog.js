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
  { area: 'Decidir bien (integradora)', icon: '🎓', acc: 'a8',
    desc: 'Ruta de decisión, errores que se pagan caro, un caso resuelto y el examen final.',
    lessons: [
      { id: 'ruta-de-decision-en-30-dias', icon: '🗺️', t: 'Ruta de decisión en 30 días', d: 'Del informe mensual a la decisión: medir, ordenar, esperar plazos, informar, decidir, documentar.' },
      { id: 'errores-que-cuestan-el-arbitraje', icon: '🧨', t: 'Errores que cuestan el arbitraje', d: 'Resolver sin procedimiento, no pagar, dejar vencer garantías, no anotar, medir mal el 80 %.' },
      { id: 'caso-resuelto-segunda-vez', icon: '🧩', t: 'Caso resuelto: segunda vez bajo el 80 %', d: 'Setiembre con programa acelerado, octubre otra vez bajo el umbral: qué haría cada actor, paso a paso.' },
      { id: 'examen-integrador', icon: '🎓', t: 'Examen integrador', d: 'Doce preguntas que cruzan todas las áreas para comprobar que dominas el tema.' }
    ] }
];
