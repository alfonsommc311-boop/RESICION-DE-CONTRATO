import 'package:flutter/material.dart';
import '../data.dart';
import '../logic.dart';
import '../widgets.dart';

class ContratoScreen extends StatefulWidget {
  const ContratoScreen({super.key});

  @override
  State<ContratoScreen> createState() => _ContratoScreenState();
}

class _ContratoScreenState extends State<ContratoScreen> {
  String q = '';
  double uit = 5500;
  final _uitCtrl = TextEditingController(text: '5500');

  @override
  void dispose() {
    _uitCtrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final lista = penalidadesObra
        .asMap()
        .entries
        .where((e) => '${e.value.supuesto} ${e.value.calculo}'.toLowerCase().contains(q.toLowerCase()))
        .toList();
    return Pantalla(titulo: 'Contrato y TDR', children: [
      const Tarjeta(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text('Contrato N° 008-2025-MML-OGA · CUI 2702837 · Diseño y Construcción', style: TextStyle(fontWeight: FontWeight.bold)),
        SizedBox(height: 8),
        Fila('Entidad', 'Municipalidad Metropolitana de Lima'),
        Fila('Contratista', 'Consorcio Ingeniería (Sogu Constructora S.A.C. + Marco A. Flores Razuri)'),
        Fila('Monto total', 'S/ 12\'961,415.86 = Diseño S/ 333,434.52 + Obra S/ 12\'627,981.34 (estimado, art. 175.1)'),
        Fila('Plazos', 'Diseño 45 días + Obra 120 días = 165 días'),
        Fila('Fiel cumplimiento', 'S/ 1\'296,141.59 (CF-00005830, Crecer Seguros)'),
        Fila('Adelanto directo', '30 % diseño · 10 % obra'),
        Fila('Adelanto materiales', '20 % del monto de obra'),
        Fila('Vicios ocultos', '7 años desde la recepción total'),
      ])),
      const Nota('Para cotejar: el informe de Setiembre indica obra S/ 15\'597,006.85 y carta fianza N° 15411-1414-2026-000 por S/ 1\'631,123.80, distintos al contrato original. Confirma el monto vigente: de él dependen la penalidad y el tope del 10 %.'),
      const Titulo('Cláusula 15 – Penalidad por mora'),
      const Text('Penalidad diaria = 0.10 × monto ÷ (F × plazo). Obras: F = 0.40 (≤ 60 días), 0.25 (61 a 120), 0.15 (> 120). '
          'Mora + otras penalidades: máximo 10 %. Al llegar al tope, la Entidad puede resolver por incumplimiento.'),
      const Titulo('Cláusula 16 – Resolución'),
      const Text('Art. 68.1 de la Ley 32069 y procedimiento del art. 122. Terminación anticipada (art. 121) si un componente hace innecesaria la continuidad, '
          'si el proyecto pierde viabilidad o si no hay presupuesto para financiar la obra.'),
      const Titulo('Otras penalidades del componente obra'),
      TextField(
        decoration: const InputDecoration(labelText: 'Buscar', prefixIcon: Icon(Icons.search)),
        onChanged: (v) => setState(() => q = v),
      ),
      TextField(
        decoration: const InputDecoration(labelText: 'Valor de la UIT (S/) – verifica el del año'),
        keyboardType: TextInputType.number,
        controller: _uitCtrl,
        onChanged: (v) => setState(() => uit = double.tryParse(v) ?? uit),
      ),
      for (final e in lista)
        ListTile(
          dense: true,
          contentPadding: EdgeInsets.zero,
          leading: CircleAvatar(radius: 13, child: Text('${e.key + 1}', style: const TextStyle(fontSize: 11))),
          title: Text(e.value.supuesto),
          subtitle: Text(e.value.uit == null ? e.value.calculo : '${e.value.calculo} ≈ ${soles(e.value.uit! * uit)}'),
        ),
    ]);
  }
}
