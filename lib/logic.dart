// Cálculos puros (sin UI) del caso: regla del 80 %, penalidad por mora y plazos.

/// Factor F de la cláusula 15 del contrato para obras.
double factorF(int plazoDias) {
  if (plazoDias <= 60) return 0.40;
  if (plazoDias <= 120) return 0.25;
  return 0.15;
}

/// Penalidad diaria = 0.10 × monto ÷ (F × plazo).
double penalidadDiaria(double monto, int plazoDias) =>
    0.10 * monto / (factorF(plazoDias) * plazoDias);

/// Tope conjunto de mora + otras penalidades: 10 % del monto vigente.
double topePenalidad(double monto) => 0.10 * monto;

/// Ejecutado acumulado ÷ programado acumulado, en %.
double ratioAvance(double programado, double ejecutado) =>
    programado == 0 ? 0 : ejecutado / programado * 100;

/// Días de atraso que faltan para alcanzar el tope, dado lo ya penalizado.
int diasHastaTope(double monto, int plazoDias, double otras) {
  final diaria = penalidadDiaria(monto, plazoDias);
  if (diaria <= 0) return 0;
  final resto = topePenalidad(monto) - otras;
  return resto <= 0 ? 0 : (resto / diaria).ceil();
}

/// Suma [n] días hábiles (lunes a viernes, sin feriados).
DateTime sumarDiasHabiles(DateTime desde, int n) {
  var d = desde;
  while (n > 0) {
    d = d.add(const Duration(days: 1));
    if (d.weekday != DateTime.saturday && d.weekday != DateTime.sunday) n--;
  }
  return d;
}

/// Plazos del programa acelerado (art. 207, TDR de Supervisión).
class PlazosAcelerado {
  PlazosAcelerado(DateTime orden)
      : contratista = orden.add(const Duration(days: 7)),
        supervisor = orden.add(const Duration(days: 12)),
        entidad = sumarDiasHabiles(orden.add(const Duration(days: 12)), 7);

  final DateTime contratista;
  final DateTime supervisor;
  final DateTime entidad;
}

String soles(double v) {
  final neg = v < 0;
  final s = v.abs().toStringAsFixed(2);
  final parts = s.split('.');
  final ent = parts[0].replaceAllMapped(RegExp(r'\B(?=(\d{3})+(?!\d))'), (_) => ',');
  return '${neg ? '-' : ''}S/ $ent.${parts[1]}';
}

String fecha(DateTime d) {
  const m = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'set', 'oct', 'nov', 'dic'];
  return '${d.day.toString().padLeft(2, '0')} ${m[d.month - 1]} ${d.year}';
}
