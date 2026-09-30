import 'package:flutter/material.dart';
import '../widgets.dart';

class MarcoScreen extends StatelessWidget {
  const MarcoScreen({super.key});

  @override
  Widget build(BuildContext context) => const Pantalla(titulo: 'Marco legal', children: [
        Tarjeta(
            child: Text('Basado en el Contrato N° 008-2025-MML-OGA (cláusulas 8, 9, 15, 16, 19) y en los Términos de Referencia de la Supervisión.')),
        Fila('Ley 32069 art. 68', 'Resolución del contrato (num. 68.1). La cláusula 16 remite a este artículo.'),
        Fila('Reglamento art. 122', 'Procedimiento de resolución por incumplimiento: carta notarial con plazo, bajo apercibimiento; luego nueva carta resolviendo.'),
        Fila('Reglamento art. 207', 'Monitoreo y control de obras. Contiene la regla del 80 %.'),
        Fila('Reglamento art. 208', 'Intervención económica: culminar la obra sin resolver el contrato.'),
        Fila('Reglamento art. 120', 'Penalidad por mora.'),
        Fila('Reglamento art. 118', 'Garantías: se pueden ejecutar si no se renuevan antes del vencimiento (cláusula 9).'),
        Fila('Reglamento art. 121', 'Terminación anticipada sin culpa de las partes (cláusula 16).'),
        Titulo('Regla del 80 % (art. 207, TDR de Supervisión)'),
        Tarjeta(
            child: Text('1. Si la valorización acumulada ejecutada es menor al 80 % de la programada (o hay atraso en la ruta crítica), la Supervisión ordena un nuevo programa acelerado y lo anota en el cuaderno de incidencias.\n\n'
                '2. El contratista lo presenta en 7 días. La Supervisión se pronuncia en 5 días. La Entidad puede observarlo en 7 días hábiles; si no, queda aprobado.\n\n'
                '3. No presentarlo a tiempo puede ser causal de intervención económica o resolución.\n\n'
                '4. Segunda vez: si el ejecutado acumulado es menor al 80 % del programado del nuevo calendario, la Supervisión lo anota e informa a la Entidad. Puede ser causal de resolución o intervención económica, sin necesidad de apercibimiento.\n\n'
                '5. El nuevo programa no sirve para reajustes ni para sustentar ampliaciones de plazo.')),
        Nota('Tope de penalidades: mora + otras hasta 10 % del monto vigente; al alcanzarlo la Entidad puede resolver por incumplimiento (cláusula 15).'),
        Nota('Herramienta educativa, no asesoría legal. Contrasta con el texto oficial vigente y con un abogado de contrataciones públicas.'),
        Titulo('Ruta del proceso'),
        Tarjeta(
            child: Text('1. Medición mensual de valorización ejecutada vs programada.\n'
                '2. Primera vez < 80 %: programa acelerado.\n'
                '3. Plazos: 7 días contratista → 5 días Supervisión → 7 días hábiles Entidad.\n'
                '4. Si no presenta el programa: intervención económica o resolución.\n'
                '5. Segunda vez < 80 % contra el nuevo calendario: resolver o intervenir sin apercibimiento.\n'
                '6. Decisión: intervención (art. 208, el contrato continúa) o resolución (la obra se paraliza).\n'
                '7. Garantías, resarcimiento de daños (cláusula 17) y liquidación.\n'
                '8. Controversias: conciliación o arbitraje; verifica plazos de caducidad vigentes.')),
        Titulo('Intervención vs. resolución'),
        Tarjeta(
            child: Text('Intervención: el contrato continúa, la obra sigue, la conduce la Entidad con interventor; riesgo: costo de gestión.\n\n'
                'Resolución: el contrato termina, la obra se paraliza; riesgo: arbitraje y paralización larga.')),
      ]);
}
