import 'package:flutter_test/flutter_test.dart';
import 'package:resolucion_contrato_pro/main.dart';

void main() {
  test('puerto propio de la familia (no colisiona con 9053 de Obras por Impuestos PRO)', () {
    expect(kServerPort, 9054);
  });
}
