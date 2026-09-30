import 'package:flutter/material.dart';
import '../widgets.dart';

class CasoScreen extends StatelessWidget {
  const CasoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final rojo = Theme.of(context).colorScheme.error;
    const verde = Color(0xFF1A8F4D);
    return Pantalla(titulo: 'El caso', children: [
      const Tarjeta(
          child: Text('Datos del Informe Mensual N° 03 de la Supervisión (Consorcio Santo Tomás), Setiembre 2026. '
              'Obra: Central Distrital de Operaciones de Seguridad Ciudadana, Cercado de Lima (CUI 2702837).')),
      Wrap(spacing: 8, runSpacing: 8, children: [
        const Kpi('S/ 15.60 M', 'Monto de obra (informe)'),
        const Kpi('120 días', 'Plazo de obra · inicio 08/07/2026'),
        const Kpi('48.07 %', 'Programado acumulado', color: verde),
        Kpi('6.62 %', 'Ejecutado acumulado', color: rojo),
        Kpi('41.45 %', 'Atraso (puntos)', color: rojo),
        Kpi('13.8 %', 'Ejecutado ÷ programado (umbral 80 %)', color: rojo),
      ]),
      const Nota('El umbral del 80 % se mide como ejecutado acumulado ÷ programado acumulado, no en puntos porcentuales: 6.62 ÷ 48.07 = 13.8 %.'),
      const Titulo('Hechos relevantes'),
      const Tarjeta(
          child: Text('• Sin ampliaciones de plazo ni adicionales aprobados.\n'
              '• Solo se pagó el adelanto directo (S/ 1\'559,700.69). Valorizaciones de Julio, Agosto y Setiembre pendientes de pago por la Entidad.\n'
              '• La Supervisión observa fallas de gestión y demoras en pagos a proveedores del contratista.\n'
              '• Observaciones pendientes de subsanar (concreto sin dosificación controlada, cambio de encofrado sin sustento, etc.).\n'
              '• Arquitectura, sanitarias y equipamiento electrónico (mayor parte del presupuesto) aún sin iniciar.\n'
              '• Cartas fianza: adelanto vencía 28/09/2026; fiel cumplimiento vence 28/10/2026.')),
    ]);
  }
}
