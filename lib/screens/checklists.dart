import 'package:flutter/material.dart';
import '../data.dart';
import '../widgets.dart';
import 'checklist_view.dart';

class ChecklistsScreen extends StatelessWidget {
  const ChecklistsScreen({super.key});

  @override
  Widget build(BuildContext context) => const Pantalla(titulo: 'Checklists', children: [
        Titulo('Para la Entidad antes de resolver o intervenir'),
        ChecklistView(clave: 'rc_c1', items: checkEntidad),
        Titulo('Para el Contratista que quiere evitarlo'),
        ChecklistView(clave: 'rc_c2', items: checkContratista),
        Nota('Tu avance se guarda en este dispositivo.'),
      ]);
}
