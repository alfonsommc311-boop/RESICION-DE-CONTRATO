import 'package:flutter/material.dart';

class Tarjeta extends StatelessWidget {
  const Tarjeta({super.key, required this.child, this.color});
  final Widget child;
  final Color? color;

  @override
  Widget build(BuildContext context) => Card(
        margin: const EdgeInsets.symmetric(vertical: 6),
        color: color,
        child: Padding(padding: const EdgeInsets.all(14), child: child),
      );
}

class Nota extends StatelessWidget {
  const Nota(this.texto, {super.key});
  final String texto;

  @override
  Widget build(BuildContext context) {
    final c = Theme.of(context).colorScheme;
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 6),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: c.tertiaryContainer,
        borderRadius: BorderRadius.circular(8),
        border: Border(left: BorderSide(color: c.tertiary, width: 4)),
      ),
      child: Text(texto, style: TextStyle(color: c.onTertiaryContainer)),
    );
  }
}

class Titulo extends StatelessWidget {
  const Titulo(this.texto, {super.key});
  final String texto;

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(top: 12, bottom: 4),
        child: Text(texto, style: Theme.of(context).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold)),
      );
}

class Pantalla extends StatelessWidget {
  const Pantalla({super.key, required this.titulo, required this.children});
  final String titulo;
  final List<Widget> children;

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(title: Text(titulo)),
        body: SafeArea(
          child: ListView(padding: const EdgeInsets.all(12), children: children),
        ),
      );
}

class Fila extends StatelessWidget {
  const Fila(this.k, this.v, {super.key});
  final String k;
  final String v;

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 4),
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          SizedBox(width: 120, child: Text(k, style: const TextStyle(fontWeight: FontWeight.w600))),
          Expanded(child: Text(v)),
        ]),
      );
}

class Kpi extends StatelessWidget {
  const Kpi(this.valor, this.etiqueta, {super.key, this.color});
  final String valor;
  final String etiqueta;
  final Color? color;

  @override
  Widget build(BuildContext context) => Container(
        width: 150,
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: Theme.of(context).colorScheme.surfaceContainerHighest,
          borderRadius: BorderRadius.circular(10),
        ),
        child: Column(children: [
          Text(valor, style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: color)),
          Text(etiqueta, textAlign: TextAlign.center, style: const TextStyle(fontSize: 12)),
        ]),
      );
}
