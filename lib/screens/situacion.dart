import 'package:flutter/material.dart';
import '../data.dart';
import '../logic.dart';
import '../widgets.dart';
import 'checklist_view.dart';

class SituacionScreen extends StatefulWidget {
  const SituacionScreen({super.key});

  @override
  State<SituacionScreen> createState() => _SituacionScreenState();
}

class _SituacionScreenState extends State<SituacionScreen> {
  DateTime? orden;
  DateTime? corte;

  Future<DateTime?> _pick(DateTime? ini) => showDatePicker(
        context: context,
        initialDate: ini ?? DateTime.now(),
        firstDate: DateTime(2026, 1, 1),
        lastDate: DateTime(2028, 12, 31),
      );

  @override
  Widget build(BuildContext context) {
    final pl = orden == null ? null : PlazosAcelerado(orden!);
    Widget? veredicto;
    if (pl != null && corte != null) {
      final despues = corte!.isAfter(pl.entidad);
      veredicto = Nota(despues
          ? 'El corte de Octubre es posterior a la aprobación del programa: se mide contra el nuevo calendario (segunda vez).'
          : 'El corte de Octubre cae antes de quedar aprobado el programa: probablemente aún se mide contra el calendario original. Confírmalo.');
    }
    return Pantalla(titulo: 'Mi situación', children: [
      const Tarjeta(
          child: Text('Línea de tiempo: Setiembre (1.ª vez): 6.62 % vs 48.07 % programado, la Supervisión ordena el programa acelerado. '
              'Octubre (2.ª vez): si el ejecutado acumulado es < 80 % del programado del nuevo calendario, la Supervisión informa a la Entidad, '
              'que puede intervenir económicamente o resolver sin apercibimiento.')),
      Wrap(spacing: 8, runSpacing: 8, children: [
        FilledButton.tonal(
            onPressed: () async {
              final f = await _pick(orden);
              if (f != null) setState(() => orden = f);
            },
            child: Text(orden == null ? 'Orden del programa (Setiembre)' : 'Orden: ${fecha(orden!)}')),
        FilledButton.tonal(
            onPressed: () async {
              final f = await _pick(corte);
              if (f != null) setState(() => corte = f);
            },
            child: Text(corte == null ? 'Corte valorización Octubre' : 'Corte: ${fecha(corte!)}')),
      ]),
      if (pl != null)
        Tarjeta(
            child: Text('Programa presentado a más tardar: ${fecha(pl.contratista)}\n'
                'Pronunciamiento Supervisión: ${fecha(pl.supervisor)}\n'
                'Plazo de la Entidad para observar: ${fecha(pl.entidad)} (si no, queda aprobado)')),
      if (veredicto != null) veredicto,
      const Titulo('Verificaciones antes de actuar'),
      const ChecklistView(clave: 'rc_c3', items: checkSituacion),
      const Titulo('Si la Entidad elige intervención económica'),
      const Text('• Sustento técnico y económico por escrito (informes de la Supervisión).\n'
          '• Designar interventor y definir cuentas y pagos de la obra.\n'
          '• Mantener vigentes las garantías.'),
      const Titulo('Si la Entidad elige resolver'),
      const Text('• Formalizar la comunicación al contratista; paralización; acta de constatación física e inventario.\n'
          '• Ejecutar garantías que correspondan (fiel cumplimiento vence el 28/10/2026).\n'
          '• Resolver antes los pagos de valorizaciones pendientes para reducir el riesgo en arbitraje.'),
      const Nota('Un tercer programa acelerado no figura en el TDR. Decisión de la Entidad con asesoría legal; esta app es educativa.'),
    ]);
  }
}
