import 'package:flutter/material.dart';
import 'screens/calculadoras.dart';
import 'screens/caso.dart';
import 'screens/checklists.dart';
import 'screens/contrato.dart';
import 'screens/glosario.dart';
import 'screens/marco.dart';
import 'screens/quiz.dart';
import 'screens/simulador.dart';
import 'screens/situacion.dart';

void main() => runApp(const ResolucionApp());

class ResolucionApp extends StatelessWidget {
  const ResolucionApp({super.key});

  @override
  Widget build(BuildContext context) => MaterialApp(
        title: 'Resolución de Contrato',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(colorSchemeSeed: const Color(0xFF0B5CAD), useMaterial3: true),
        darkTheme: ThemeData(colorSchemeSeed: const Color(0xFF0B5CAD), brightness: Brightness.dark, useMaterial3: true),
        home: const Inicio(),
      );
}

class _Modulo {
  const _Modulo(this.titulo, this.icono, this.builder);
  final String titulo;
  final IconData icono;
  final Widget Function() builder;
}

class Inicio extends StatelessWidget {
  const Inicio({super.key});

  static final _modulos = <_Modulo>[
    _Modulo('El caso', Icons.apartment, () => const CasoScreen()),
    _Modulo('Mi situación', Icons.timeline, () => const SituacionScreen()),
    _Modulo('Marco legal', Icons.gavel, () => const MarcoScreen()),
    _Modulo('Contrato y TDR', Icons.description, () => const ContratoScreen()),
    _Modulo('Calculadoras', Icons.calculate, () => const CalculadorasScreen()),
    _Modulo('Simulador', Icons.groups, () => const SimuladorScreen()),
    _Modulo('Quiz', Icons.quiz, () => const QuizScreen()),
    _Modulo('Checklists', Icons.checklist, () => const ChecklistsScreen()),
    _Modulo('Glosario', Icons.menu_book, () => const GlosarioScreen()),
  ];

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          title: const Text('Resolución de Contrato · Ley 32069'),
        ),
        body: SafeArea(
          child: GridView.count(
            crossAxisCount: 2,
            padding: const EdgeInsets.all(12),
            mainAxisSpacing: 12,
            crossAxisSpacing: 12,
            children: [
              for (final m in _modulos)
                Card(
                  clipBehavior: Clip.antiAlias,
                  child: InkWell(
                    onTap: () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => m.builder())),
                    child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                      Icon(m.icono, size: 40, color: Theme.of(context).colorScheme.primary),
                      const SizedBox(height: 8),
                      Text(m.titulo, textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.w600)),
                    ]),
                  ),
                ),
            ],
          ),
        ),
      );
}
