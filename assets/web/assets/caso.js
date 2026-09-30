/* Datos del caso y funciones puras compartidas por las herramientas de Resolución de Contrato PRO. */
var CASO = {
  monto: 15597006.85, plazo: 120, programado: 48.07, ejecutado: 6.62,
  adelanto: 1559700.69, fianzaFiel: '28/10/2026', fianzaAdelanto: '28/09/2026'
};
var Calc = {
  factorF: function (d) { return d <= 60 ? 0.40 : (d <= 120 ? 0.25 : 0.15); },
  diaria: function (m, d) { return d > 0 ? 0.10 * m / (Calc.factorF(d) * d) : 0; },
  tope: function (m) { return 0.10 * m; },
  ratio: function (p, e) { return p ? e / p * 100 : 0; },
  diasHastaTope: function (m, d, otras) { var x = Calc.diaria(m, d); if (x <= 0) return 0; var r = Calc.tope(m) - (otras || 0); return r <= 0 ? 0 : Math.ceil(r / x); },
  soles: function (v) { var s = Math.abs(v).toFixed(2).split('.'); return (v < 0 ? '-' : '') + 'S/ ' + s[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + s[1]; },
  addDias: function (d, n) { var x = new Date(d.getTime()); x.setDate(x.getDate() + n); return x; },
  addHabiles: function (d, n) { var x = new Date(d.getTime()); while (n > 0) { x.setDate(x.getDate() + 1); var w = x.getDay(); if (w !== 0 && w !== 6) n--; } return x; },
  fecha: function (d) { var m = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'set', 'oct', 'nov', 'dic']; return ('0' + d.getDate()).slice(-2) + ' ' + m[d.getMonth()] + ' ' + d.getFullYear(); },
  parse: function (s) { return s ? new Date(s + 'T12:00:00') : null; },
  plazos: function (orden) { var c = Calc.addDias(orden, 7), s = Calc.addDias(orden, 12); return { contratista: c, supervisor: s, entidad: Calc.addHabiles(s, 7) }; }
};
