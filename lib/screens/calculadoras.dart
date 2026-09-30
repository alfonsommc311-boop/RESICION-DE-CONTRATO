import 'package:flutter/material.dart';
import '../logic.dart';
import '../widgets.dart';

class CalculadorasScreen extends StatefulWidget {
  const CalculadorasScreen({super.key});

  @override
  State<CalculadorasScreen> createState() => _CalculadorasScreenState();
}

class _CalculadorasScreenState extends State<CalculadorasScreen> {
  final prog = TextEditingController(text: '48.07');
  final ejec = TextEditingController(text: '6.62');
  final monto = TextEditingController(text: '15597006.85');
  final plazo = TextEditingController(text: '120');
  final dias = TextEditingController(text: '0');
  final otras = TextEditingController(text: '0');
  DateTime? orden;

  double _n(TextEditingController c) => double.tryParse(c.text.replaceAll(',', '')) ?? 0;

  @override
  void dispose() {
    for (final c in [prog, ejec, monto, plazo, dias, otras]) {
      c.dispose();
    }
    super.dispose();
  }

  Widget _campo(String label, TextEditingController c) => SizedBox(
        width: 160,
        child: TextField(
          controller: c,
          decoration: InputDecoration(labelText: label),
          keyboardType: const TextInputType.numberWithOptions(decimal: true),
          onChanged: (_) => setState(() {}),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final p = _n(prog), e = _n(ejec), m = _n(monto), d = _n(plazo).round(), nd = _n(dias), ot = _n(otras);
    final r = ratioAvance(p, e);
    final bajo = r < 80;
    final diaria = d > 0 ? penalidadDiaria(m, d) : 0.0;
    final tope = topePenalidad(m);
    final mora = (diaria * nd).clamp(0, tope).toDouble();
    final total = mora + ot;
    final faltan = (p * 0.8 - e).clamp(0, double.infinity).toDouble();
    final color = bajo ? Theme.of(context).colorScheme.error : const Color(0xFF1A8F4D);
    final pl = orden == null ? null : PlazosAcelerado(orden!);

    return Pantalla(titulo: 'Calculadoras', children: [
      const Titulo('A) Regla del 80 % y penalidad por mora'),
      Wrap(spacing: 8, children: [
        _campo('Programado acum. (%)', prog),
        _campo('Ejecutado acum. (%)', ejec),
        _campo('Monto vigente (S/)', monto),
        _campo('Plazo obra (días)', plazo),
        _campo('Días de atraso', dias),
        _campo('Otras penalidades (S/)', otras),
      ]),
      Tarjeta(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        LinearProgressIndicator(value: (r / 100).clamp(0, 1).toDouble(), color: color, minHeight: 12),
        const SizedBox(height: 8),
        Text('Ejecutado ÷ programado = ${r.toStringAsFixed(1)} %  ${bajo ? '(bajo el umbral de 80 %)' : '(sobre el umbral)'}',
            style: TextStyle(fontWeight: FontWeight.bold, color: color)),
        Text('Para llegar al 80 % faltan ${faltan.toStringAsFixed(2)} puntos (≈ ${soles(faltan / 100 * m)}).'),
        const SizedBox(height: 6),
        Text('F = ${d > 0 ? factorF(d) : '-'} · Penalidad diaria: ${soles(diaria)}'),
        Text('Tope 10 %: ${soles(tope)} · Días hasta el tope: ~${d > 0 ? diasHastaTope(m, d, ot) : 0}'),
        Text('Mora por ${nd.round()} días: ${soles(mora)} · Mora + otras: ${soles(total)}'
            '${m > 0 && total >= tope ? '\nTOPE ALCANZADO: causal de resolución' : ''}'),
      ])),
      const Titulo('B) Plazos del programa acelerado'),
      Row(children: [
        FilledButton.tonal(
          onPressed: () async {
            final f = await showDatePicker(
              context: context,
              initialDate: orden ?? DateTime.now(),
              firstDate: DateTime(2026, 1, 1),
              lastDate: DateTime(2028, 12, 31),
            );
            if (f != null) setState(() => orden = f);
          },
          child: Text(orden == null ? 'Fecha de la orden en el cuaderno' : fecha(orden!)),
        ),
      ]),
      if (pl != null)
        Tarjeta(
            child: Text('Contratista presenta el programa: ${fecha(pl.contratista)} (7 días)\n'
                'Supervisión se pronuncia: ${fecha(pl.supervisor)} (5 días)\n'
                'Entidad puede observar hasta: ${fecha(pl.entidad)} (7 días hábiles, sin feriados). Si no observa, queda aprobado.')),
      const Nota('F del contrato: 0.40 (≤ 60 días), 0.25 (61–120), 0.15 (> 120). Tope: mora + otras = 10 % del monto vigente.'),
    ]);
  }
}
