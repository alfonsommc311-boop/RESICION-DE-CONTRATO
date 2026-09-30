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
  pascua: function (y) { var a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451), mo = Math.floor((h + l - 7 * m + 114) / 31), da = ((h + l - 7 * m + 114) % 31) + 1; return new Date(y, mo - 1, da); },
  iso: function (d) { return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); },
  /* Feriados nacionales fijos del Perú + Jueves y Viernes Santo + los que agregue el usuario (verificar calendario oficial). */
  feriados: function (y) { var s = {}, extra = []; try { extra = JSON.parse(localStorage.getItem('rcp:t:feriadosExtra') || '[]'); } catch (e) {}
    ['01-01', '05-01', '06-07', '06-29', '07-23', '07-28', '07-29', '08-06', '08-30', '10-08', '11-01', '12-08', '12-09', '12-25'].forEach(function (x) { s[y + '-' + x] = 1; });
    var p = Calc.pascua(y); [-3, -2].forEach(function (o) { var d = new Date(p.getTime()); d.setDate(d.getDate() + o); s[Calc.iso(d)] = 1; });
    extra.forEach(function (x) { s[x] = 1; }); return s; },
  esHabil: function (d) { var w = d.getDay(); return w !== 0 && w !== 6 && !Calc.feriados(d.getFullYear())[Calc.iso(d)]; },
  addHabiles: function (d, n) { var x = new Date(d.getTime()); while (n > 0) { x.setDate(x.getDate() + 1); if (Calc.esHabil(x)) n--; } return x; },
  fecha: function (d) { var m = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'set', 'oct', 'nov', 'dic']; return ('0' + d.getDate()).slice(-2) + ' ' + m[d.getMonth()] + ' ' + d.getFullYear(); },
  parse: function (s) { return s ? new Date(s + 'T12:00:00') : null; },
  plazos: function (orden) { var c = Calc.addDias(orden, 7), s = Calc.addDias(orden, 12); return { contratista: c, supervisor: s, entidad: Calc.addHabiles(s, 7) }; }
};
