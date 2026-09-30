import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Lista de verificación que guarda lo marcado en el dispositivo.
class ChecklistView extends StatefulWidget {
  const ChecklistView({super.key, required this.clave, required this.items});
  final String clave;
  final List<String> items;

  @override
  State<ChecklistView> createState() => _ChecklistViewState();
}

class _ChecklistViewState extends State<ChecklistView> {
  late List<bool> marcas = List.filled(widget.items.length, false);

  @override
  void initState() {
    super.initState();
    _cargar();
  }

  Future<void> _cargar() async {
    try {
      final p = await SharedPreferences.getInstance();
      final g = p.getStringList(widget.clave) ?? const [];
      if (!mounted) return;
      setState(() => marcas = List.generate(widget.items.length, (i) => g.contains('$i')));
    } catch (_) {}
  }

  Future<void> _guardar() async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.setStringList(widget.clave, [
        for (var i = 0; i < marcas.length; i++)
          if (marcas[i]) '$i'
      ]);
    } catch (_) {}
  }

  @override
  Widget build(BuildContext context) {
    final hechos = marcas.where((x) => x).length;
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      LinearProgressIndicator(value: widget.items.isEmpty ? 0 : hechos / widget.items.length),
      Text('$hechos de ${widget.items.length}', style: Theme.of(context).textTheme.bodySmall),
      for (var i = 0; i < widget.items.length; i++)
        CheckboxListTile(
          dense: true,
          contentPadding: EdgeInsets.zero,
          controlAffinity: ListTileControlAffinity.leading,
          value: marcas[i],
          title: Text(widget.items[i]),
          onChanged: (v) {
            setState(() => marcas[i] = v ?? false);
            _guardar();
          },
        ),
    ]);
  }
}
