// Contenido educativo: penalidades del contrato, quiz, checklists, glosario y simulador.

class Penalidad {
  const Penalidad(this.supuesto, this.calculo, [this.uit]);
  final String supuesto;
  final String calculo;
  final double? uit;
}

const penalidadesObra = <Penalidad>[
  Penalidad('Sustitución de un integrante del plantel técnico por segunda vez', '6 UIT por sustitución', 6),
  Penalidad('No ejecutar con el personal clave/no clave acreditado', '0.5 UIT por personal', 0.5),
  Penalidad('No anotar hechos relevantes en el cuaderno (a más tardar al día siguiente)', '0.1 UIT por día', 0.1),
  Penalidad('No presentar valorizaciones en el plazo', '1 UIT por día de retraso', 1),
  Penalidad('Incumplir el contenido mínimo de valorizaciones', '1 UIT por oportunidad', 1),
  Penalidad('Incumplir conservación y señalización de la obra', '0.3 UIT por día', 0.3),
  Penalidad('Ausencia permanente del Ing. Residente', '0.3 UIT por día', 0.3),
  Penalidad('Ausencia de personal clave y no clave', '0.3 UIT por día y persona', 0.3),
  Penalidad('No presentar el PAC en 10 días desde el acta de inicio', '1 UIT por día', 1),
  Penalidad('No presentar Plan de Manejo Ambiental en 7 días', '1 UIT por día', 1),
  Penalidad('No presentar Plan de Seguridad y Salud en 7 días', '1 UIT por día', 1),
  Penalidad('No presentar cronogramas actualizados en 5 días', '1 UIT por día', 1),
  Penalidad('No dotar de EPP al personal', '0.3 UIT por ocurrencia', 0.3),
  Penalidad('Materiales fuera de especificaciones técnicas', '0.3 UIT por ocurrencia', 0.3),
  Penalidad('No presentar equipos acreditados', '0.3 UIT por ocurrencia y día', 0.3),
  Penalidad('Impago a personal (si la Entidad está al día en pagos)', '0.5 UIT por oportunidad', 0.5),
  Penalidad('No emplear dispositivos de seguridad peatonal/señalización', '1 UIT por oportunidad', 1),
  Penalidad('Profesionales no habilitados en su colegio', '1 UIT por oportunidad', 1),
  Penalidad('No mantener pólizas de seguros vigentes', '0.1 UIT por oportunidad', 0.1),
  Penalidad('Ejecutar partidas sin autorización con obra paralizada', '1 UIT por oportunidad', 1),
  Penalidad('No colocar cartel de obra en 7 días', '1 UIT por oportunidad', 1),
  Penalidad('No presentar planos post construcción, metrados finales y ensayos en 10 días', '1 UIT por día', 1),
  Penalidad('Solicitar recepción sin haber culminado partidas', '0.5 UIT por incidencia', 0.5),
  Penalidad('Prácticas antitécnicas', '0.3 UIT por ocurrencia', 0.3),
  Penalidad('Daños a terceros por mala ejecución', '0.3 UIT por ocurrencia', 0.3),
  Penalidad('Incorrecta eliminación de desmontes', '0.2 UIT por ocurrencia', 0.2),
  Penalidad('Liquidación incompleta, con errores o fuera de plazo', '0.3 UIT por ocurrencia', 0.3),
];

class Pregunta {
  const Pregunta(this.texto, this.opciones, this.correcta, this.explicacion);
  final String texto;
  final List<String> opciones;
  final int correcta;
  final String explicacion;
}

const preguntas = <Pregunta>[
  Pregunta(
    'Primera vez que el ejecutado acumulado cae bajo 80 % del programado. ¿Qué corresponde (art. 207)?',
    ['Resolver de inmediato', 'Ordenar nuevo programa acelerado; el contratista lo presenta en 7 días', 'Intervención económica directa'],
    1,
    'Correcto, y se anota en el cuaderno de incidencias.',
  ),
  Pregunta(
    'El contratista vuelve a estar bajo 80 % respecto del nuevo calendario. ¿Qué puede hacer la Entidad?',
    ['Resolver o intervenir económicamente, sin necesidad de apercibimiento', 'Esperar la liquidación', 'Solo aplicar penalidad'],
    0,
    'Según el TDR (art. 207), la segunda vez se mide contra el nuevo calendario y puede ser causal sin apercibimiento.',
  ),
  Pregunta(
    'En la vía general de resolución por incumplimiento (art. 122), ¿qué se necesita antes de resolver?',
    ['Correo electrónico al residente', 'Carta notarial de requerimiento con plazo para cumplir', 'Resolución sin aviso'],
    1,
    'Correcto. La segunda vez bajo 80 % es un caso especial que no exige apercibimiento.',
  ),
  Pregunta(
    'La Entidad debe 3 valorizaciones. ¿Qué debe evaluar antes de resolver?',
    ['Nada, el pago no influye', 'Si el atraso es imputable al contratista o a su propia demora en pagar; riesgo en arbitraje', 'Solo la carta fianza'],
    1,
    'La mora de la Entidad es el principal argumento de defensa del contratista.',
  ),
  Pregunta(
    'Las cartas fianza vencen 28/09 (adelanto) y 28/10/2026 (fiel cumplimiento). ¿Qué hace la Entidad prudente?',
    ['Esperar a que venzan', 'Exigir renovación y, si no se renueva antes del vencimiento, ejecutarlas (cláusula 9, art. 118)', 'Devolverlas'],
    1,
    'La cláusula 9 permite ejecutar la garantía si no se renueva antes de su vencimiento.',
  ),
  Pregunta(
    '¿Cuál es la diferencia esencial entre intervención económica y resolución?',
    ['Ninguna', 'En la intervención el contrato continúa; en la resolución termina', 'La intervención la decide el contratista'],
    1,
    'La intervención (art. 208) busca culminar la obra sin resolver el contrato.',
  ),
  Pregunta(
    '¿Qué F usa tu contrato para una obra de exactamente 120 días?',
    ['0.40', '0.25', '0.15'],
    1,
    '0.25 rige de 61 a 120 días. 0.15 es para más de 120 días.',
  ),
  Pregunta(
    'Con S/ 15\'597,006.85, F = 0.25 y 120 días, ¿cuál es la penalidad diaria?',
    ['S/ 5,199.00', 'S/ 51,990.02', 'S/ 519,900.23'],
    1,
    'El tope del 10 % (S/ 1\'559,700.69) se alcanza en unos 30 días.',
  ),
  Pregunta(
    '¿Qué prueba es más valiosa en un arbitraje?',
    ['Conversaciones verbales', 'Cuaderno de obra, informes de Supervisión, cartas y valorizaciones', 'Fotos sin fecha'],
    1,
    'Los documentos oficiales y oportunos.',
  ),
];

const checkEntidad = <String>[
  'Informes de la Supervisión que sustenten el retraso y su imputabilidad',
  'Anotaciones en el cuaderno de obra del incumplimiento',
  'Constancia de que se ordenó el programa acelerado y su resultado',
  'Carta notarial de requerimiento (vía general, art. 122) si corresponde',
  'Pagos pendientes de valorizaciones al contratista revisados',
  'Estado y vigencia de las cartas fianza',
  'Cálculo de penalidades aplicadas (tope 10 %)',
  'Informe legal y opinión técnica de la Oficina de Obras',
  'Plan para continuar la obra (intervención o nuevo contratista)',
  'Acta de constatación física e inventario al resolver',
];

const checkContratista = <String>[
  'Responder las observaciones pendientes (concreto, encofrado, expediente)',
  'Solicitar ampliación de plazo si hay causal, en tiempo y por cuaderno de obra',
  'Presentar el programa acelerado con recursos reales',
  'Acreditar pagos a proveedores y personal',
  'Renovar cartas fianza antes del vencimiento',
  'Corregir y reingresar la solicitud de adelanto de materiales',
  'Reclamar por escrito el pago de valorizaciones vencidas',
  'Iniciar adquisiciones de Arquitectura, Sanitarias y Electrónica',
  'Conservar evidencia: fotos fechadas, guías, cartas',
  'Asesoría legal especializada en contrataciones públicas',
];

const checkSituacion = <String>[
  'El programa acelerado de Setiembre está aprobado (o venció el plazo de 7 días hábiles sin observación)',
  'La orden y las fechas constan en el cuaderno de incidencias',
  'El contratista presentó el programa dentro de los 7 días',
  'La valorización de Octubre se mide contra el nuevo calendario',
  'La Supervisión informó por escrito a la Entidad',
  'Estado de pagos de valorizaciones (Julio, Agosto, Setiembre) revisado',
  'Carta fianza de fiel cumplimiento con renovación exigida (vence 28/10/2026)',
  'Opinión legal y técnica antes de resolver o intervenir',
];

const glosario = <(String, String)>[
  ('Valorización', 'Metrado ejecutado del mes valorizado a precios del contrato; base del pago y de la medición del 80 %.'),
  ('Programa acelerado', 'Nuevo programa de ejecución con más recursos para recuperar el atraso dentro del plazo previsto.'),
  ('Penalidad por mora', 'Descuento diario por atraso injustificado; mora + otras penalidades hasta el 10 %.'),
  ('Intervención económica', 'La Entidad asume la conducción económica de la obra sin resolver el contrato (art. 208).'),
  ('Resolución', 'Terminación del contrato por incumplimiento (art. 68 Ley, art. 122 Reglamento).'),
  ('Carta fianza', 'Garantía bancaria: fiel cumplimiento, adelanto directo, adelanto de materiales.'),
  ('Cuaderno de incidencias', 'Registro oficial de hechos, órdenes y observaciones; prueba clave.'),
  ('Suma alzada', 'Sistema de pago por monto fijo para metrados e ingeniería definidos.'),
  ('Acta de constatación física', 'Documento que fija el estado de la obra al resolver.'),
  ('Liquidación', 'Cálculo final de saldos, penalidades y garantías tras resolver o culminar.'),
  ('Diseño y Construcción', 'Sistema de entrega donde el contratista elabora el expediente técnico y ejecuta la obra.'),
];

class Escenario {
  const Escenario(this.texto, this.opciones);
  final String texto;
  // rol -> opciones (la primera es la correcta)
  final Map<String, List<String>> opciones;
}

const roles = {'ent': 'Entidad (MML)', 'con': 'Contratista', 'sup': 'Supervisión'};

const escenarios = <Escenario>[
  Escenario('Octubre 2026. La Supervisión informa: ejecutado acumulado 11 %, programado 70 %, bajo el nuevo calendario. Segunda vez bajo 80 %.', {
    'ent': ['Evaluar intervención económica o resolución con sustento de la Supervisión', 'Ordenar un tercer programa acelerado', 'Ignorar y esperar'],
    'con': ['Acelerar con más personal y cuadrillas, y sustentar pagos pendientes por escrito', 'Reclamar solo por pagos sin avanzar', 'Abandonar el frente'],
    'sup': ['Anotar en el cuaderno e informar a la Entidad con sustento técnico', 'Callar para no generar conflicto', 'Aprobar la valorización sin revisar'],
  }),
  Escenario('La Entidad tiene valorizaciones sin pagar, pero el atraso es muy grande.', {
    'ent': ['Regularizar lo valorizado aprobado y luego decidir; evaluar intervención económica', 'Resolver ignorando la deuda', 'Suspender todo pago'],
    'con': ['Sustentar la mora de la Entidad y recuperar ritmo', 'Retirar al personal', 'Apropiarse del adelanto'],
    'sup': ['Emitir informe técnico sobre las causas del atraso', 'Decidir por la Entidad', 'No opinar'],
  }),
  Escenario('Falta un mes para el vencimiento de la carta fianza de fiel cumplimiento.', {
    'ent': ['Requerir renovación y preparar ejecución', 'Dejarla vencer', 'Devolverla'],
    'con': ['Renovar oportunamente', 'Dejar que la ejecuten', 'Cambiarla por un pagaré'],
    'sup': ['Alertar por escrito a la Entidad', 'Ignorar', 'Retener documentos'],
  }),
];
