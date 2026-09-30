import 'package:flutter/material.dart';
import '../data.dart';
import '../widgets.dart';

class GlosarioScreen extends StatelessWidget {
  const GlosarioScreen({super.key});

  @override
  Widget build(BuildContext context) => Pantalla(titulo: 'Glosario', children: [
        for (final g in glosario)
          Tarjeta(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(g.$1, style: const TextStyle(fontWeight: FontWeight.bold)),
            Text(g.$2),
          ])),
      ]);
}
