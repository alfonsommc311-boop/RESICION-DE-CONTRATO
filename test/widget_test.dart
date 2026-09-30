import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:resolucion_contrato/main.dart';

void main() {
  testWidgets('Inicio muestra los módulos y abre el caso', (tester) async {
    tester.view.physicalSize = const Size(800, 3000);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(const ResolucionApp());
    expect(find.text('Mi situación'), findsOneWidget);
    expect(find.text('Calculadoras'), findsOneWidget);
    await tester.tap(find.text('El caso'));
    await tester.pumpAndSettle();
    expect(find.textContaining('13.8 %'), findsWidgets);
  });

  testWidgets('Quiz avanza al responder', (tester) async {
    tester.view.physicalSize = const Size(800, 3000);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(const ResolucionApp());
    await tester.tap(find.text('Quiz'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Ordenar nuevo programa acelerado; el contratista lo presenta en 7 días'));
    await tester.pump();
    expect(find.text('Siguiente'), findsOneWidget);
  });
}
