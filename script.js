/* ---------- Navegação entre painéis ---------- */
  document.getElementById('nav-list').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-panel]');
    if (!btn) return;
    document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.panel).classList.add('active');
  });

  /* ---------- Algoritmos ---------- */

  function isPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function somatorio(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
      soma += i;
    }
    return soma;
  }

  function fibonacci(qtd) {
    const seq = [];
    for (let i = 0; i < qtd; i++) {
      seq.push(i < 2 ? i : seq[i - 1] + seq[i - 2]);
    }
    return seq;
  }

  function mdc(a, b) {
    a = Math.abs(a); b = Math.abs(b);
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  function quicksort(arr) {
    if (arr.length <= 1) return arr;
    const pivo = arr[Math.floor(arr.length / 2)];
    const menores = arr.filter((x, i) => x < pivo);
    const iguais = arr.filter(x => x === pivo);
    const maiores = arr.filter(x => x > pivo);
    return [...quicksort(menores), ...iguais, ...quicksort(maiores)];
  }

  function contarIntervalo(a, b, filtro) {
    const resultado = [];
    const [inicio, fim] = a <= b ? [a, b] : [b, a];
    for (let i = inicio; i <= fim; i++) {
      if (filtro === 'todos') resultado.push(i);
      else if (filtro === 'pares' && i % 2 === 0) resultado.push(i);
      else if (filtro === 'impares' && i % 2 !== 0) resultado.push(i);
      else if (filtro === 'primos' && isPrimo(i)) resultado.push(i);
    }
    return resultado;
  }

  /* ---------- Handlers de UI ---------- */

  function runPrimo() {
    const out = document.getElementById('primo-out');
    const n = parseInt(document.getElementById('primo-n').value, 10);
    if (Number.isNaN(n)) { out.innerHTML = '<span class="err">Informe um número inteiro válido.</span>'; return; }
    const resultado = isPrimo(n);
    out.innerHTML = `<span class="label">entrada:</span> ${n}\n<span class="label">resultado:</span> <span class="ok">${n} ${resultado ? 'é' : 'não é'} primo</span>`;
  }

  function runSomatorio() {
    const out = document.getElementById('soma-out');
    const n = parseInt(document.getElementById('soma-n').value, 10);
    if (Number.isNaN(n) || n < 0) { out.innerHTML = '<span class="err">Informe um N inteiro maior ou igual a 0.</span>'; return; }
    const resultado = somatorio(n);
    out.innerHTML = `<span class="label">entrada:</span> N = ${n}\n<span class="label">resultado:</span> <span class="ok">soma de 1 até ${n} = ${resultado}</span>`;
  }

  function runFibonacci() {
    const out = document.getElementById('fib-out');
    const n = parseInt(document.getElementById('fib-n').value, 10);
    if (Number.isNaN(n) || n < 1) { out.innerHTML = '<span class="err">Informe uma quantidade de termos maior ou igual a 1.</span>'; return; }
    const seq = fibonacci(n);
    out.innerHTML = `<span class="label">termos:</span> ${n}\n<span class="label">sequência:</span> <span class="ok">${seq.join(', ')}</span>`;
  }

  function runMdc() {
    const out = document.getElementById('mdc-out');
    const a = parseInt(document.getElementById('mdc-a').value, 10);
    const b = parseInt(document.getElementById('mdc-b').value, 10);
    if (Number.isNaN(a) || Number.isNaN(b)) { out.innerHTML = '<span class="err">Informe dois números inteiros válidos.</span>'; return; }
    const resultado = mdc(a, b);
    out.innerHTML = `<span class="label">entrada:</span> A = ${a}, B = ${b}\n<span class="label">resultado:</span> <span class="ok">mdc(${a}, ${b}) = ${resultado}</span>`;
  }

  function runQuicksort() {
    const out = document.getElementById('qs-out');
    const raw = document.getElementById('qs-arr').value;
    const arr = raw.split(',').map(s => parseFloat(s.trim())).filter(x => !Number.isNaN(x));
    if (arr.length === 0) { out.innerHTML = '<span class="err">Informe uma lista de números separados por vírgula.</span>'; return; }
    const ordenado = quicksort(arr);
    out.innerHTML = `<span class="label">entrada:</span> [${arr.join(', ')}]\n<span class="label">resultado:</span> <span class="ok">[${ordenado.join(', ')}]</span>`;
  }

  function runIntervalo() {
    const out = document.getElementById('int-out');
    const a = parseInt(document.getElementById('int-a').value, 10);
    const b = parseInt(document.getElementById('int-b').value, 10);
    const filtro = document.getElementById('int-filtro').value;
    if (Number.isNaN(a) || Number.isNaN(b)) { out.innerHTML = '<span class="err">Informe os limites A e B do intervalo.</span>'; return; }
    const lista = contarIntervalo(a, b, filtro);
    const nomesFiltro = { todos: 'todos os números', pares: 'números pares', impares: 'números ímpares', primos: 'números primos' };
    out.innerHTML = `<span class="label">intervalo:</span> [${a}, ${b}] — filtro: ${nomesFiltro[filtro]}\n<span class="label">quantidade:</span> <span class="ok">${lista.length}</span>\n<span class="label">valores:</span> ${lista.length ? lista.join(', ') : '(nenhum)'}`;
  }

  /* ---------- Exibição do código-fonte de cada algoritmo ---------- */
  const fontes = {
    'primo-src': isPrimo,
    'soma-src': somatorio,
    'fib-src': fibonacci,
    'mdc-src': mdc,
    'qs-src': quicksort,
    'int-src': contarIntervalo,
  };
  Object.entries(fontes).forEach(([id, fn]) => {
    document.getElementById(id).textContent = fn.toString();
  });
