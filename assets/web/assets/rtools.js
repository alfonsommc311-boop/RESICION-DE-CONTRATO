/* Herramientas de Resolución de Contrato PRO (mismo patrón que las herramientas de JPRD PRO).
   Requiere: catalog.js, engine.js, caso.js y, según la herramienta, rdata-casos.js / rdata-sim.js. */
(function () {
'use strict';
var S = { get: function (k, d) { try { var v = localStorage.getItem('rcp:t:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
          set: function (k, v) { try { localStorage.setItem('rcp:t:' + k, JSON.stringify(v)); } catch (e) {} } };
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function $(el, sel) { return el.querySelector(sel); }
function fmt(n) { return isFinite(n) ? n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—'; }
var TITULO = {};
CATALOG.forEach(function (a) { a.lessons.forEach(function (l) { TITULO[l.id] = l.t; }); });
function lessonLink(id) { return TITULO[id] ? '<a href="lesson.html?l=' + id + '">' + esc(TITULO[id]) + '</a>' : ''; }
var RC = window.RC = window.RC || {};

/* ---------- Diagnóstico: ¿está lista la decisión? ---------- */
var DIAG = [
 { d: 'Medición del avance', q: ['El avance se mide como razón: ejecutado acumulado ÷ programado acumulado (no en puntos).', 'Las valorizaciones fueron revisadas y observadas por escrito cuando correspondía.', 'Cada corte de valorización tiene fecha y queda anotado en el cuaderno.'], l: ['como-se-mide-el-avance', 'la-regla-del-80-por-ciento', 'observar-una-valorizacion'] },
 { d: 'Programa acelerado', q: ['La orden del programa acelerado está anotada en el cuaderno de incidencias con fecha.', 'Se computaron los plazos 7 + 5 + 7 hábiles y hay constancia de cada paso.', 'La segunda medición se hizo contra el nuevo calendario acelerado.'], l: ['la-orden-del-programa-acelerado', 'los-plazos-siete-cinco-y-siete', 'la-segunda-vez-bajo-el-80'] },
 { d: 'Prueba', q: ['El cuaderno de incidencias está al día y registra el atraso y las órdenes.', 'Hay informes fechados de la Supervisión a la Entidad.', 'Las observaciones técnicas tienen fotos fechadas, protocolos y cartas con acuse.'], l: ['el-cuaderno-de-incidencias-como-prueba', 'la-observacion-como-prueba', 'que-hace-la-supervision'] },
 { d: 'Imputabilidad', q: ['No hay solicitudes de ampliación de plazo pendientes de resolver.', 'El atraso no se explica por hechos de la Entidad (terreno, aprobaciones, expediente).', 'Se evaluó el efecto de las valorizaciones impagas sobre el atraso.'], l: ['atraso-imputable-y-no-imputable', 'pagos-pendientes-y-mora-de-la-entidad', 'causales-de-ampliacion-de-plazo'] },
 { d: 'Penalidades y garantías', q: ['La penalidad por mora se calculó con el F correcto y sobre el monto vigente.', 'Se controla el acumulado de mora + otras penalidades frente al tope del 10 %.', 'Las cartas fianza están vigentes o se exigió su renovación antes del vencimiento.'], l: ['la-penalidad-por-mora', 'el-tope-del-10-por-ciento', 'cartas-fianza-y-renovacion'] },
 { d: 'Procedimiento', q: ['Está identificada la vía: segunda vez bajo el 80 % (sin apercibimiento) o vía general con carta notarial.', 'Hay informe legal y técnico que sustenta la decisión.', 'La comunicación formal al contratista está redactada y revisada.'], l: ['resolver-sin-apercibimiento', 'el-requerimiento-por-carta-notarial', 'causales-de-resolucion'] },
 { d: 'Continuidad de la obra', q: ['Si se interviene: hay plan de conducción económica, interventor y cuentas.', 'Si se resuelve: hay plan para el saldo de obra y su financiamiento.', 'Está prevista la custodia de la obra y el acta de constatación física.'], l: ['que-es-la-intervencion-economica', 'saldo-de-obra-y-nuevo-contratista', 'custodia-y-seguridad-de-la-obra'] }
];
function diagnostico(el) {
 var st = S.get('diag', {});
 function draw() {
  var h = '<p>Marca cada afirmación: <b>Sí</b> (2), <b>Parcial</b> (1), <b>No</b> (0). Se guarda en tu teléfono.</p>';
  DIAG.forEach(function (g, gi) {
   h += '<div class="card" style="margin-bottom:10px"><b>' + esc(g.d) + '</b>' + g.q.map(function (q, qi) { var k = gi + '_' + qi;
    return '<label style="font-weight:400">' + esc(q) + '</label><select data-k="' + k + '"><option value="">—</option><option value="2"' + (st[k] === '2' ? ' selected' : '') + '>Sí</option><option value="1"' + (st[k] === '1' ? ' selected' : '') + '>Parcial</option><option value="0"' + (st[k] === '0' ? ' selected' : '') + '>No</option></select>'; }).join('') + '</div>';
  });
  h += '<div id="res"></div><p><button class="btn alt sm" id="rs">Limpiar diagnóstico</button></p>'; el.innerHTML = h;
  Array.prototype.forEach.call(el.querySelectorAll('select'), function (s) { s.onchange = function () { st[s.dataset.k] = s.value; S.set('diag', st); res(); }; });
  $(el, '#rs').onclick = function () { st = {}; S.set('diag', st); draw(); };
  res();
 }
 function res() {
  var out = '', all = 0, cnt = 0, acc = [];
  DIAG.forEach(function (g, gi) {
   var s = 0, c = 0; g.q.forEach(function (_, qi) { var v = st[gi + '_' + qi]; if (v !== undefined && v !== '') { s += +v; c++; } });
   if (c === g.q.length) { var p = s / (2 * c), col = p >= 0.8 ? 'g' : p >= 0.5 ? 'y' : 'r'; all += s; cnt += c * 2;
    if (col !== 'g') acc.push({ d: g.d, p: p, l: g.l[0] });
    out += '<p><span class="sem ' + col + '"></span><b>' + esc(g.d) + '</b>: ' + Math.round(p * 100) + '%' + (col !== 'g' ? ' → refuerza: ' + g.l.map(lessonLink).join(' · ') : '') + '</p>'; }
   else out += '<p class="mut"><span class="sem" style="background:#999"></span>' + esc(g.d) + ': incompleto</p>';
  });
  var t = cnt ? Math.round(all / cnt * 100) : null;
  acc.sort(function (a, b) { return a.p - b.p; });
  $(el, '#res').innerHTML = '<h2>Resultado</h2>' + out + (t != null ? '<p class="tot">Preparación global: ' + t + '%</p><p class="mut">' +
   (t >= 80 ? 'Decisión bien sustentada: revisa los detalles finales con el área legal.' : t >= 50 ? 'Hay brechas: atiéndelas antes de comunicar la decisión.' : 'Decisión poco sustentada: documenta, completa el procedimiento y refuerza antes de actuar.') +
   ' Un buen puntaje no garantiza el resultado de una controversia.</p>' +
   (acc.length ? '<div class="box err"><b>Tus 3 acciones prioritarias</b><ol>' + acc.slice(0, 3).map(function (a) { return '<li>' + esc(a.d) + ': estudia ' + lessonLink(a.l) + '</li>'; }).join('') + '</ol></div>' : '') : '');
 }
 draw();
}

/* ---------- Escritos modelo ---------- */
var BASE = { entidad: 'Municipalidad Metropolitana de Lima', contrato: 'Contrato N° 008-2025-MML-OGA', obra: 'Creación del servicio de seguridad ciudadana local en la Central Distrital de Operaciones de Seguridad Ciudadana, Cercado de Lima (CUI 2702837)', contratista: 'el Consorcio contratista' };
var ESC = [
 { n: 'Anotación: orden de programa acelerado (Supervisión)', f: ['fecha', 'programado', 'ejecutado', 'razon', 'valorizacion'], t: 'ASIENTO DEL CUADERNO DE INCIDENCIAS — SUPERVISIÓN\n\nFecha: {fecha}\nObra: {obra}\nContrato: {contrato}\n\nLa Supervisión deja constancia de que, al corte de la {valorizacion}, la valorización acumulada ejecutada asciende a {ejecutado} % frente a una valorización acumulada programada de {programado} %, lo que representa {razon} % de lo programado, por debajo del 80 %.\n\nEn aplicación del artículo 207 del Reglamento de la Ley N° 32069 y de los términos de referencia, SE ORDENA al contratista presentar, dentro de los siete (7) días siguientes, un nuevo programa de ejecución que contemple la aceleración de los trabajos y garantice la culminación de la obra dentro del plazo previsto, con los recursos adicionales que correspondan.\n\nLa Supervisión emitirá su pronunciamiento a la Entidad dentro de los cinco (5) días de recibido el programa.\n\n______________________\nJefe de Supervisión' },
 { n: 'Informe de la Supervisión a la Entidad (segunda vez bajo el 80 %)', f: ['numero_informe', 'fecha', 'fecha_orden', 'fecha_programa', 'programado_nuevo', 'ejecutado', 'razon', 'antecedentes', 'recomendacion'], t: 'INFORME N° {numero_informe}\n\nA: {entidad}\nAsunto: Retraso reiterado — valorización acumulada ejecutada menor al 80 % del nuevo calendario\nObra: {obra}\nContrato: {contrato}\nFecha: {fecha}\n\nI. ANTECEDENTES\n- Orden de nuevo programa de ejecución acelerado anotada el {fecha_orden}.\n- Programa acelerado presentado/aprobado: {fecha_programa}.\n{antecedentes}\n\nII. ANÁLISIS\nAl corte actual, la valorización acumulada ejecutada es {ejecutado} % frente a {programado_nuevo} % acumulado programado del nuevo calendario ({razon} %). Conforme al artículo 207 del Reglamento y a los términos de referencia, este retraso puede ser considerado causal de resolución del contrato o de intervención económica de la obra, sin que sea necesario apercibimiento al contratista.\n\nIII. RECOMENDACIÓN\n{recomendacion}\n\nSe adjuntan: asientos del cuaderno, valorizaciones, calendario acelerado, registro fotográfico.\nVerificar la norma vigente y el contrato.\n\n______________________\nJefe de Supervisión' },
 { n: 'Carta notarial de requerimiento (art. 122)', f: ['fecha', 'obligacion', 'hechos', 'plazo'], t: 'CARTA NOTARIAL\n\n{fecha}\n\nSeñores:\n{contratista}\nContrato: {contrato}\nObra: {obra}\n\nAsunto: Requerimiento de cumplimiento bajo apercibimiento de resolución\n\nDe nuestra consideración:\n\n{entidad} les requiere cumplir la siguiente obligación contractual:\n{obligacion}\n\nHechos que sustentan el incumplimiento:\n{hechos}\n\nPara tal efecto se otorga el plazo de {plazo}, contado desde la recepción de la presente, bajo apercibimiento de resolver el contrato de conformidad con el numeral 68.1 del artículo 68 de la Ley N° 32069 y el procedimiento del artículo 122 de su Reglamento, sin perjuicio de las penalidades que correspondan.\n\nAtentamente,\n\n______________________\n{entidad}' },
 { n: 'Carta notarial de resolución del contrato', f: ['fecha', 'causal', 'antecedentes', 'constatacion'], t: 'CARTA NOTARIAL\n\n{fecha}\n\nSeñores:\n{contratista}\nContrato: {contrato}\nObra: {obra}\n\nAsunto: Resolución del contrato\n\nDe nuestra consideración:\n\nPor medio de la presente, {entidad} comunica la RESOLUCIÓN TOTAL del contrato, por la siguiente causal:\n{causal}\n\nAntecedentes:\n{antecedentes}\n\nLa resolución se sustenta en el numeral 68.1 del artículo 68 de la Ley N° 32069, en el artículo 122 de su Reglamento y en la cláusula décimo sexta del contrato.\n\nSe cita a la constatación física e inventario de la obra: {constatacion}.\n\nLa obra queda paralizada desde la recepción de la presente, salvo lo estrictamente necesario por seguridad. Se procederá conforme a la cláusula décimo sétima y a la liquidación del contrato.\n\nAtentamente,\n\n______________________\n{entidad}' },
 { n: 'Requerimiento de renovación de carta fianza', f: ['fecha', 'numero_fianza', 'tipo', 'monto', 'vencimiento'], t: 'CARTA\n\n{fecha}\n\nSeñores:\n{contratista}\nContrato: {contrato}\n\nAsunto: Renovación de carta fianza\n\nSe les requiere renovar la carta fianza de {tipo} N° {numero_fianza} por S/ {monto}, que vence el {vencimiento}, antes de su vencimiento.\n\nDe no renovarse oportunamente, la Entidad podrá solicitar su ejecución conforme a la cláusula novena del contrato y al artículo 118 del Reglamento de la Ley N° 32069.\n\nAtentamente,\n\n______________________\n{entidad}' },
 { n: 'Decisión de intervención económica (borrador)', f: ['fecha', 'sustento_tecnico', 'sustento_economico', 'alcance', 'interventor'], t: 'BORRADOR — DECISIÓN DE INTERVENCIÓN ECONÓMICA DE LA OBRA\n\nFecha: {fecha}\nObra: {obra}\nContrato: {contrato}\n\nCONSIDERANDO:\nQue la Supervisión informó retraso reiterado conforme al artículo 207 del Reglamento de la Ley N° 32069.\nQue existen razones de orden técnico: {sustento_tecnico}\nQue existen razones de orden económico: {sustento_economico}\nQue el artículo 208 del Reglamento permite la intervención económica para culminar la obra sin resolver el contrato.\n\nSE DISPONE:\n1. La intervención económica de la obra con el siguiente alcance: {alcance}\n2. Designar como interventor a: {interventor}\n3. Comunicar la decisión al contratista y a la Supervisión.\n\nVerificar la norma vigente y el contrato antes de emitir el acto.\n\n______________________\n{entidad}' },
 { n: 'Solicitud de ampliación de plazo (contratista)', f: ['fecha', 'causal', 'asientos', 'afectacion', 'dias'], t: 'SOLICITUD DE AMPLIACIÓN DE PLAZO\n\n{fecha}\n\nA: Supervisión de obra / {entidad}\nContrato: {contrato}\nObra: {obra}\n\n{contratista} solicita ampliación de plazo por {dias} días calendario, por la siguiente causal no imputable:\n{causal}\n\nAnotaciones en el cuaderno de incidencias (inicio y fin de la causal):\n{asientos}\n\nAfectación de la ruta crítica (con el último calendario vigente, no con el programa acelerado):\n{afectacion}\n\nSe adjunta análisis de ruta crítica y cuantificación. Verificar plazos y requisitos en la norma vigente y el contrato.\n\n______________________\nRepresentante común' },
 { n: 'Reclamo de pago de valorizaciones (contratista)', f: ['fecha', 'valorizaciones', 'monto', 'efecto'], t: 'CARTA\n\n{fecha}\n\nSeñores:\n{entidad}\nContrato: {contrato}\n\nAsunto: Pago de valorizaciones pendientes\n\n{contratista} solicita el pago de las siguientes valorizaciones tramitadas y conformadas:\n{valorizaciones}\n\nMonto total pendiente: S/ {monto}\n\nEfecto de la falta de pago en la ejecución:\n{efecto}\n\nSe deja constancia para los efectos contractuales que correspondan.\n\nAtentamente,\n\n______________________\nRepresentante común' },
 { n: 'Acta de constatación física e inventario', f: ['fecha', 'lugar', 'asistentes', 'estado', 'materiales', 'equipos', 'observaciones'], t: 'ACTA DE CONSTATACIÓN FÍSICA E INVENTARIO\n\nObra: {obra}\nContrato: {contrato}\nLugar: {lugar}\nFecha y hora: {fecha}\nAsistentes: {asistentes}\n\nI. ESTADO DE LA OBRA\n{estado}\n\nII. MATERIALES EN OBRA\n{materiales}\n\nIII. EQUIPOS Y HERRAMIENTAS\n{equipos}\n\nIV. OBSERVACIONES\n{observaciones}\n\nSe adjunta registro fotográfico fechado. Los asistentes firman en señal de conformidad o dejan constancia de su disconformidad.\n\n______________________    ______________________\nEntidad                    Contratista' }
];
function escritos(el) {
 var cur = 0, vals = S.get('escritos', {});
 function draw() {
  var t = ESC[cur], v = vals[cur] || {};
  var h = '<label>Modelo</label><select id="m">' + ESC.map(function (x, i) { return '<option value="' + i + '"' + (i === cur ? ' selected' : '') + '>' + esc(x.n) + '</option>'; }).join('') + '</select>';
  h += t.f.map(function (f) { var lg = /hechos|obligacion|antecedentes|causal|sustento|alcance|asientos|afectacion|valorizaciones|efecto|estado|materiales|equipos|observaciones|recomendacion/.test(f);
   return '<label>' + esc(f.replace(/_/g, ' ')) + '</label>' + (lg ? '<textarea data-f="' + f + '">' + esc(v[f] || '') + '</textarea>' : '<input data-f="' + f + '" value="' + esc(v[f] || '') + '">'); }).join('');
  h += '<div class="row" style="margin-top:12px"><button class="btn" id="cp">Copiar texto</button><button class="btn alt" id="pr">Imprimir</button></div><h2>Vista previa</h2><pre class="out" id="pv"></pre>';
  el.innerHTML = h; $(el, '#m').onchange = function (e) { cur = +e.target.value; draw(); };
  Array.prototype.forEach.call(el.querySelectorAll('[data-f]'), function (i) { i.oninput = function () { vals[cur] = vals[cur] || {}; vals[cur][i.dataset.f] = i.value; S.set('escritos', vals); pv(); }; });
  $(el, '#cp').onclick = function () { var x = $(el, '#pv').textContent; (navigator.clipboard ? navigator.clipboard.writeText(x) : Promise.reject()).then(function () { $(el, '#cp').textContent = '¡Copiado!'; }, function () { var r = document.createRange(); r.selectNodeContents($(el, '#pv')); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }); };
  $(el, '#pr').onclick = function () { window.print(); }; pv();
 }
 function pv() { var v = {}; for (var k in BASE) v[k] = BASE[k];
  Array.prototype.forEach.call(el.querySelectorAll('[data-f]'), function (i) { if (i.value) v[i.dataset.f] = i.value; });
  $(el, '#pv').textContent = ESC[cur].t.replace(/\{(\w+)\}/g, function (_, k) { return v[k] || '[' + k.replace(/_/g, ' ') + ']'; }); }
 draw();
}

/* ---------- Plazos con feriados del Perú ---------- */
var PRESETS = [['Presentación del programa acelerado', 7, 'cal'], ['Pronunciamiento de la Supervisión', 5, 'cal'], ['Observación del programa por la Entidad', 7, 'hab'], ['Renovación de carta fianza (alerta 15 días antes)', 15, 'cal']];
function plazos(el) {
 var extra = S.get('feriadosExtra', []), dl = S.get('plazos', []);
 function calc(start, n, tipo) { var d = new Date(start + 'T12:00:00'), c = 0; if (isNaN(d)) return null;
  while (c < n) { d.setDate(d.getDate() + 1); if (tipo === 'cal' || Calc.esHabil(d)) c++; } return d; }
 function days(to) { var t = new Date(); t.setHours(0, 0, 0, 0); var x = new Date(to.getTime()); x.setHours(0, 0, 0, 0); return Math.round((x - t) / 864e5); }
 function draw() {
  el.innerHTML = '<div class="card"><label>Plazo típico del caso</label><select id="pre"><option value="">— elige o escribe abajo —</option>' + PRESETS.map(function (p, i) { return '<option value="' + i + '">' + esc(p[0]) + ' (' + p[1] + ' ' + (p[2] === 'hab' ? 'hábiles' : 'calendario') + ')</option>'; }).join('') + '</select>' +
   '<label>Fecha de inicio del cómputo (anotación, recepción o notificación)</label><input type="date" id="f"><label>Cantidad de días</label><input type="number" id="n" min="1" value="7"><label>Tipo</label><select id="t"><option value="cal">Días calendario</option><option value="hab">Días hábiles</option></select><label>Rótulo</label><input id="r" placeholder="Ej.: Presentación del programa acelerado"><p><button class="btn" id="go">Calcular</button></p><div id="o"></div></div>' +
   '<h2>Cronómetro de plazos</h2><div id="dl"></div><h2>Feriados adicionales</h2><p class="mut">Los días hábiles descuentan sábados, domingos, feriados nacionales del Perú y Jueves y Viernes Santo. Agrega feriados o días no laborables decretados (AAAA-MM-DD). Verifica el calendario oficial y las reglas de cómputo del contrato y del Reglamento.</p><div class="row"><input id="x" placeholder="2026-10-31" style="flex:1"><button class="btn alt sm" id="ax">Agregar</button></div><p class="mut">' + esc(extra.join(', ') || 'Ninguno') + '</p>';
  $(el, '#f').value = Calc.iso(new Date());
  $(el, '#pre').onchange = function () { var p = PRESETS[+this.value]; if (!p) return; $(el, '#n').value = p[1]; $(el, '#t').value = p[2]; $(el, '#r').value = p[0]; };
  $(el, '#go').onclick = function () { var r = calc($(el, '#f').value, +$(el, '#n').value, $(el, '#t').value);
   if (!r) { $(el, '#o').textContent = 'Fecha inválida'; return; }
   var lab = $(el, '#r').value || 'Plazo';
   $(el, '#o').innerHTML = '<p class="tot">Vence: ' + r.toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) + '</p><button class="btn alt sm" id="sv">Guardar en cronómetro</button>';
   $(el, '#sv').onclick = function () { dl.push({ l: lab, d: Calc.iso(r) }); S.set('plazos', dl); draw(); }; };
  $(el, '#ax').onclick = function () { var v = $(el, '#x').value.trim(); if (/^\d{4}-\d{2}-\d{2}$/.test(v)) { extra.push(v); S.set('feriadosExtra', extra); draw(); } };
  $(el, '#dl').innerHTML = dl.length ? dl.map(function (p, i) { var n = days(new Date(p.d + 'T12:00:00')), c = n <= 2 ? 'r' : n <= 5 ? 'y' : 'g';
   return '<div class="card" style="margin-bottom:8px"><span class="sem ' + c + '"></span><b>' + esc(p.l) + '</b> — ' + esc(p.d) + ' · ' + (n < 0 ? 'vencido hace ' + (-n) + ' d' : n === 0 ? 'vence hoy' : 'faltan ' + n + ' d') + ' <button class="btn alt sm" data-i="' + i + '" style="float:right">✕</button></div>'; }).join('') : '<p class="mut">Sin plazos guardados.</p>';
  Array.prototype.forEach.call(el.querySelectorAll('[data-i]'), function (b) { b.onclick = function () { dl.splice(+b.dataset.i, 1); S.set('plazos', dl); draw(); }; });
 }
 draw();
}

/* ---------- Liquidación preliminar ---------- */
var LQ = [['m', 'Monto vigente del contrato (S/)', 15597006.85], ['d', 'Plazo de obra (días)', 120], ['da', 'Días de atraso imputables', 0], ['ot', 'Otras penalidades aplicadas (S/)', 0],
          ['vp', 'Valorizaciones conformadas pendientes de pago (S/, netas)', 927658.40], ['ad', 'Adelanto directo pendiente de amortizar (S/)', 1455685.92], ['am', 'Adelanto de materiales pendiente de amortizar (S/)', 0], ['fc', 'Garantía de fiel cumplimiento (S/)', 1631123.80]];
function liquidacion(el) {
 var v = S.get('liq', {});
 function g(k) { var x = v[k]; if (x == null || x === '') { for (var i = 0; i < LQ.length; i++) if (LQ[i][0] === k) return LQ[i][2]; } return +x || 0; }
 function draw() {
  el.innerHTML = LQ.map(function (f) { return '<label>' + esc(f[1]) + '</label><input type="number" step="any" data-k="' + f[0] + '" value="' + g(f[0]) + '">'; }).join('') + '<div id="t"></div><p><button class="btn alt sm" id="rs">Volver a los datos del caso</button></p>';
  Array.prototype.forEach.call(el.querySelectorAll('[data-k]'), function (i) { i.oninput = function () { v[i.dataset.k] = i.value; S.set('liq', v); tot(); }; });
  $(el, '#rs').onclick = function () { v = {}; S.set('liq', v); draw(); }; tot();
 }
 function tot() {
  var m = g('m'), d = g('d'), diaria = Calc.diaria(m, d), tope = Calc.tope(m), mora = Math.min(diaria * g('da'), tope), pen = Math.min(mora + g('ot'), tope);
  var adel = g('ad') + g('am'), saldo = g('vp') - pen - adel;
  $(el, '#t').innerHTML = '<table><tr><td>Penalidad diaria (F = ' + Calc.factorF(d) + ')</td><td>S/ ' + fmt(diaria) + '</td></tr><tr><td>Penalidad por mora</td><td>S/ ' + fmt(mora) + '</td></tr><tr><td>Total penalidades (con tope 10 % = S/ ' + fmt(tope) + ')</td><td>S/ ' + fmt(pen) + '</td></tr><tr><td>Valorizaciones pendientes de pago</td><td>S/ ' + fmt(g('vp')) + '</td></tr><tr><td>Adelantos pendientes de amortizar</td><td>S/ ' + fmt(adel) + '</td></tr></table>' +
   '<p class="tot">' + (saldo >= 0 ? 'Saldo a favor del contratista: S/ ' + fmt(saldo) : 'Saldo a favor de la Entidad: S/ ' + fmt(-saldo)) + '</p>' +
   (saldo < 0 ? '<div class="box ' + (-saldo > g('fc') ? 'err' : 'ok') + '">' + (-saldo > g('fc') ? 'El saldo supera la garantía de fiel cumplimiento (S/ ' + fmt(g('fc')) + '): la Entidad quedaría con un saldo no cubierto que tendría que reclamar.' : 'La garantía de fiel cumplimiento (S/ ' + fmt(g('fc')) + ') cubriría este saldo si está vigente.') + '</div>' : '') +
   '<p class="mut">Cálculo ilustrativo y simplificado: la liquidación real incluye reajustes, gastos generales, IGV, mayores costos y lo que resulte de la constatación física (art. 215 del Reglamento). Verificar la norma vigente y el contrato.</p>';
 }
 draw();
}

/* ---------- Simulacro de decisión ---------- */
function simulacro(el) {
 var ans = {}, sim = RC.sim || [], shown = false;
 function draw() {
  if (!sim.length) { el.innerHTML = '<p class="mut">Sin preguntas cargadas.</p>'; return; }
  el.innerHTML = sim.map(function (q, qi) { return '<div class="card" style="margin-bottom:10px"><b>' + (qi + 1) + '. ' + esc(q.q) + '</b>' + q.o.map(function (o, oi) { var c = 'opt' + (ans[qi] === oi ? ' sel' : ''); if (shown && ans[qi] === oi) c += o.p === 2 ? ' right' : o.p === 1 ? '' : ' wrong';
   return '<div class="' + c + '" data-q="' + qi + '" data-o="' + oi + '" role="button" tabindex="0">' + esc(o.t) + '</div>'; }).join('') + (shown && ans[qi] != null ? '<p class="mut">' + esc(q.o[ans[qi]].c) + '</p>' : '') + '</div>'; }).join('') +
   (shown ? score() : '<button class="btn" id="ok">Ver resultado</button>');
  Array.prototype.forEach.call(el.querySelectorAll('.opt'), function (o) { var f = function () { if (shown) return; ans[+o.dataset.q] = +o.dataset.o; draw(); }; o.onclick = f; o.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); f(); } }; });
  var b = $(el, '#ok'); if (b) b.onclick = function () { shown = true; draw(); window.scrollTo(0, document.body.scrollHeight); };
 }
 function score() { var s = 0; sim.forEach(function (_, i) { if (ans[i] != null) s += sim[i].o[ans[i]].p; }); var p = Math.round(s / (2 * sim.length) * 100);
  var best = S.get('simBest', 0); if (p > best) S.set('simBest', p);
  return '<h2>Resultado</h2><p class="tot">' + s + ' / ' + 2 * sim.length + ' (' + p + '%)</p><p>' + (p >= 80 ? 'Decisiones sólidas y bien sustentadas.' : p >= 50 ? 'Buen punto de partida: repasa ' + lessonLink('la-segunda-vez-bajo-el-80') + ' y ' + lessonLink('pagos-pendientes-y-mora-de-la-entidad') + '.' : 'Practica más: repasa las áreas de programa acelerado, penalidades y resolución.') + '</p><p class="mut">Mejor puntaje: ' + Math.max(p, best) + '%</p><button class="btn alt" id="rs">Repetir</button>'; }
 el.addEventListener('click', function (e) { if (e.target.id === 'rs') { ans = {}; shown = false; draw(); } });
 draw();
}

/* ---------- Perfil del administrador del contrato ---------- */
var PERF = [
 { g: 'Técnicas', c: ['Medición del avance y valorizaciones', 'Programación, curva S y ruta crítica', 'Control de calidad y protocolos', 'Lectura del expediente técnico (diseño y construcción)'], l: ['como-se-mide-el-avance', 'calendario-valorizado-y-curva-s', 'protocolos-y-liberacion-de-vaciados', 'que-es-diseno-y-construccion'] },
 { g: 'Contractuales', c: ['Ley 32069 y su Reglamento aplicados a obra', 'Cláusulas del contrato (penalidades, garantías, resolución)', 'Programa acelerado y plazos 7 + 5 + 7', 'Intervención económica y resolución'], l: ['la-ley-32069-y-su-reglamento', 'el-contrato-como-primera-norma', 'los-plazos-siete-cinco-y-siete', 'que-es-la-intervencion-economica'] },
 { g: 'Documentales', c: ['Cuaderno de incidencias oportuno y completo', 'Informes técnicos a la Entidad', 'Cartas y cartas notariales', 'Actas de constatación y liquidación'], l: ['el-cuaderno-de-incidencias-como-prueba', 'que-hace-la-supervision', 'el-requerimiento-por-carta-notarial', 'constatacion-fisica-e-inventario'] },
 { g: 'Gestión y decisión', c: ['Gestión de riesgos y alertas tempranas', 'Negociación con el contratista', 'Coordinación con el área legal', 'Decidir con sustento y documentar'], l: ['senales-de-alerta-temprana', 'que-hace-el-contratista', 'que-hace-la-entidad', 'ruta-de-decision-en-30-dias'] }
];
function perfil(el) {
 var st = S.get('perfil', {});
 function draw() {
  var h = '<p>Califica cada competencia de 1 (bajo) a 5 (alto). Sirve para el administrador del contrato, el coordinador de obra o el supervisor.</p>';
  PERF.forEach(function (g, gi) { h += '<div class="card" style="margin-bottom:10px"><b>' + esc(g.g) + '</b>' + g.c.map(function (c, ci) { var k = gi + '_' + ci;
   return '<label style="font-weight:400">' + esc(c) + '</label><select data-k="' + k + '"><option value="">—</option>' + [1, 2, 3, 4, 5].map(function (n) { return '<option' + (st[k] == n ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select>'; }).join('') + '</div>'; });
  h += '<div id="r"></div>'; el.innerHTML = h;
  Array.prototype.forEach.call(el.querySelectorAll('select'), function (s) { s.onchange = function () { st[s.dataset.k] = +s.value || ''; S.set('perfil', st); res(); }; }); res();
 }
 function res() { var o = '', plan = [];
  PERF.forEach(function (g, gi) { var s = 0, c = 0; g.c.forEach(function (_, ci) { var v = st[gi + '_' + ci]; if (v) { s += +v; c++; if (+v < 4) plan.push(g.l[ci]); } });
   if (c) { var a = s / c; o += '<p><b>' + esc(g.g) + '</b>: ' + a.toFixed(1) + ' / 5 <span class="sem ' + (a >= 4 ? 'g' : a >= 3 ? 'y' : 'r') + '"></span></p>'; } });
  $(el, '#r').innerHTML = o ? '<h2>Tu perfil</h2>' + o + (plan.length ? '<h3>Plan de formación sugerido</h3><ul>' + plan.map(function (id) { return '<li>' + lessonLink(id) + '</li>'; }).join('') + '</ul>' : '<div class="box ok">Perfil sólido: repasa el examen integrador para mantenerlo.</div>') : '';
 }
 draw();
}

/* ---------- Banco de casos ---------- */
function casos(el) {
 var f = 'Todas';
 function draw() { var cs = RC.casos || [], ms = ['Todas'].concat(cs.map(function (c) { return c.materia; }).filter(function (x, i, a) { return a.indexOf(x) === i; }));
  el.innerHTML = '<div class="row">' + ms.map(function (m) { return '<button class="tag' + (m === f ? ' on' : '') + '" data-m="' + esc(m) + '">' + esc(m) + '</button>'; }).join('') + '</div><div style="margin-top:12px">' +
   (cs.length ? cs.filter(function (c) { return f === 'Todas' || c.materia === f; }).map(function (c) { return '<div class="card" style="margin-bottom:10px"><span class="pill">' + esc(c.materia) + '</span> <span class="pill">' + esc(c.desenlace) + '</span><br><b>' + esc(c.titulo) + '</b><p>' + esc(c.resumen) + '</p>' + (c.claves ? '<ul>' + c.claves.map(function (k) { return '<li>' + esc(k) + '</li>'; }).join('') + '</ul>' : '') + '</div>'; }).join('') : '<p class="mut">Sin casos cargados.</p>') +
   '</div><p class="mut">Casos ilustrativos, sin nombres reales; no anticipan el resultado de ningún caso concreto.</p>';
  Array.prototype.forEach.call(el.querySelectorAll('[data-m]'), function (b) { b.onclick = function () { f = b.dataset.m; draw(); }; }); }
 draw();
}

/* ---------- Ruta con fechas ---------- */
var HITOS = [
 ['Informe mensual con el avance (ejecutado ÷ programado)', 'leer-el-informe-mensual'],
 ['Primera vez bajo el 80 %: orden del programa acelerado en el cuaderno', 'la-orden-del-programa-acelerado'],
 ['Contratista presenta el programa (7 días)', 'los-plazos-siete-cinco-y-siete'],
 ['Supervisión se pronuncia (5 días)', 'que-hace-la-supervision'],
 ['Entidad aprueba u observa (7 días hábiles)', 'que-hace-la-entidad'],
 ['Requerir renovación de cartas fianza por vencer', 'cartas-fianza-y-renovacion'],
 ['Regularizar pagos de valorizaciones conformadas', 'pagos-pendientes-y-mora-de-la-entidad'],
 ['Segunda medición contra el nuevo calendario', 'la-segunda-vez-bajo-el-80'],
 ['Informe de la Supervisión a la Entidad', 'que-hace-la-supervision'],
 ['Informe legal y decisión: intervenir o resolver', 'ruta-de-decision-en-30-dias'],
 ['Comunicación formal al contratista', 'resolver-sin-apercibimiento'],
 ['Constatación física e inventario (si se resuelve)', 'constatacion-fisica-e-inventario'],
 ['Liquidación y garantías', 'liquidacion-y-ejecucion-de-garantias'],
 ['Continuidad: saldo de obra o intervención en marcha', 'saldo-de-obra-y-nuevo-contratista']
];
function ruta(el) {
 var st = S.get('ruta', {});
 function draw() {
  var ok = HITOS.filter(function (_, i) { return st[i] && st[i].ok; }).length;
  el.innerHTML = '<div class="bar"><i style="width:' + (100 * ok / HITOS.length) + '%"></i></div><p class="tot">' + ok + ' / ' + HITOS.length + ' hitos</p>' + HITOS.map(function (h, i) { var s = st[i] || {};
   return '<div class="card" style="margin-bottom:8px"><label class="opt' + (s.ok ? ' sel' : '') + '" style="font-weight:400"><input type="checkbox" data-c="' + i + '"' + (s.ok ? ' checked' : '') + '> <span><b>' + (i + 1) + '.</b> ' + esc(h[0]) + '</span></label><div class="row"><input type="date" data-d="' + i + '" value="' + esc(s.d || '') + '" style="flex:1"><span class="mut">' + lessonLink(h[1]) + '</span></div></div>'; }).join('') +
   '<p><button class="btn alt sm" id="rs">Reiniciar ruta</button></p>';
  Array.prototype.forEach.call(el.querySelectorAll('[data-c]'), function (b) { b.onchange = function () { var i = b.dataset.c; st[i] = st[i] || {}; st[i].ok = b.checked; S.set('ruta', st); draw(); }; });
  Array.prototype.forEach.call(el.querySelectorAll('[data-d]'), function (b) { b.onchange = function () { var i = b.dataset.d; st[i] = st[i] || {}; st[i].d = b.value; S.set('ruta', st); }; });
  $(el, '#rs').onclick = function () { st = {}; S.set('ruta', st); draw(); };
 }
 draw();
}

window.RTOOLS = { diagnostico: diagnostico, escritos: escritos, plazos: plazos, liquidacion: liquidacion, simulacro: simulacro, perfil: perfil, casos: casos, ruta: ruta };
})();
