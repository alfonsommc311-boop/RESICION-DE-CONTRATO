import 'package:flutter_test/flutter_test.dart';
import 'package:resolucion_contrato_pro/main.dart';

void main() {
  test('puerto propio de la familia (no colisiona con 9053 Obras por Impuestos PRO ni 9054 JPRD PRO)', () {
    expect(kServerPort, 9055);
  });
}
