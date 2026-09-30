import 'package:flutter/material.dart';
import '../data.dart';
import '../widgets.dart';

class SimuladorScreen extends StatefulWidget {
  const SimuladorScreen({super.key});

  @override
  State<SimuladorScreen> createState() => _SimuladorScreenState();
}

class _SimuladorScreenState extends State<SimuladorScreen> {
  String rol = 'ent';
  int i = 0;
  int? elegido;

  @override
  Widget build(BuildContext context) {
    final fin = i >= escenarios.length;
    return Pantalla(titulo: 'Simulador', children: [
      SegmentedButton<String>(
        segments: [for (final e in roles.entries) ButtonSegment(value: e.key, label: Text(e.value, style: const TextStyle(fontSize: 12)))],
        selected: {rol},
        onSelectionChanged: (s) => setState(() {
          rol = s.first;
          i = 0;
          elegido = null;
        }),
      ),
      if (fin) ...[
        const Tarjeta(child: Text('Fin del simulador. Repite con otro rol para ver las tres perspectivas.')),
        FilledButton(onPressed: () => setState(() => i = 0), child: const Text('Reiniciar')),
      ] else ...[
        Tarjeta(child: Text('Escenario ${i + 1}: ${escenarios[i].texto}')),
        for (var k = 0; k < escenarios[i].opciones[rol]!.length; k++)
          Card(
            color: elegido == null
                ? null
                : (k == 0 ? const Color(0x331A8F4D) : (k == elegido ? const Color(0x33C62828) : null)),
            child: ListTile(
              title: Text(escenarios[i].opciones[rol]![k]),
              onTap: elegido == null ? () => setState(() => elegido = k) : null,
            ),
          ),
        if (elegido != null) ...[
          Nota(elegido == 0
              ? 'Buena decisión: sigue el debido procedimiento y deja evidencia.'
              : 'Decisión riesgosa: genera contingencia legal. La opción correcta quedó marcada.'),
          FilledButton(
              onPressed: () => setState(() {
                    i++;
                    elegido = null;
                  }),
              child: const Text('Siguiente')),
        ],
      ],
    ]);
  }
}
