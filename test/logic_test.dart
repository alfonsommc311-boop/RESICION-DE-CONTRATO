import 'package:flutter_test/flutter_test.dart';
import 'package:resolucion_contrato/logic.dart';

void main() {
  test('F según plazo', () {
    expect(factorF(60), 0.40);
    expect(factorF(120), 0.25);
    expect(factorF(121), 0.15);
  });

  test('penalidad diaria del caso', () {
    expect(penalidadDiaria(15597006.85, 120), closeTo(51990.02, 0.01));
    expect(diasHastaTope(15597006.85, 120, 0), 30);
  });

  test('ratio 80 %', () {
    expect(ratioAvance(48.07, 6.62), closeTo(13.77, 0.01));
  });

  test('plazos acelerado', () {
    final p = PlazosAcelerado(DateTime(2026, 9, 28));
    expect(p.contratista, DateTime(2026, 10, 5));
    expect(p.supervisor, DateTime(2026, 10, 10));
    expect(p.entidad, DateTime(2026, 10, 20));
  });

  test('formato soles', () {
    expect(soles(1559700.69), 'S/ 1,559,700.69');
  });
}
