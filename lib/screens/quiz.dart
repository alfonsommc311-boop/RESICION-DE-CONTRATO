import 'package:flutter/material.dart';
import '../data.dart';
import '../widgets.dart';

class QuizScreen extends StatefulWidget {
  const QuizScreen({super.key});

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  int i = 0, puntos = 0;
  int? elegido;

  @override
  Widget build(BuildContext context) {
    if (i >= preguntas.length) {
      return Pantalla(titulo: 'Quiz', children: [
        Tarjeta(
            child: Column(children: [
          Text('Puntaje: $puntos/${preguntas.length}', style: Theme.of(context).textTheme.headlineSmall),
          Text(puntos >= 8 ? 'Excelente.' : puntos >= 5 ? 'Bien, repasa la ruta.' : 'Repasa el marco legal.'),
        ])),
        FilledButton(
            onPressed: () => setState(() {
                  i = 0;
                  puntos = 0;
                  elegido = null;
                }),
            child: const Text('Reintentar')),
      ]);
    }
    final q = preguntas[i];
    return Pantalla(titulo: 'Quiz', children: [
      Text('Pregunta ${i + 1} de ${preguntas.length}'),
      Titulo(q.texto),
      for (var k = 0; k < q.opciones.length; k++)
        Card(
          color: elegido == null ? null : (k == q.correcta ? const Color(0x331A8F4D) : (k == elegido ? const Color(0x33C62828) : null)),
          child: ListTile(
            title: Text(q.opciones[k]),
            onTap: elegido == null
                ? () => setState(() {
                      elegido = k;
                      if (k == q.correcta) puntos++;
                    })
                : null,
          ),
        ),
      if (elegido != null) ...[
        Nota(q.explicacion),
        FilledButton(
            onPressed: () => setState(() {
                  i++;
                  elegido = null;
                }),
            child: const Text('Siguiente')),
      ],
    ]);
  }
}
