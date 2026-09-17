/**
 * Algoritmos clássicos em JavaScript
 * Compatível com Node.js (rode com: node algoritmos.js)
 * Pode ser colado diretamente no Replit (ambiente Node.js) ou aberto no VS Code.
 */

// ---------------------------------------------------------
// 1. Número é primo
// Um número inteiro positivo n é primo se for divisível
// apenas por 1 e por ele mesmo.
// ---------------------------------------------------------
function ehPrimo(n) {
  if (!Number.isInteger(n) || n < 2) return false; // 0 e 1 não são primos
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  // Só precisamos testar divisores até a raiz quadrada de n
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// ---------------------------------------------------------
// 2. Somatório
// Soma de um conjunto de números.
// ---------------------------------------------------------
function somatorio(numeros) {
  return numeros.reduce((acumulado, atual) => acumulado + atual, 0);
}

// ---------------------------------------------------------
// 3. Fibonacci
// Sequência: 0, 1, 1, 2, 3, 5, 8, 13 ...
// Cada termo (a partir do terceiro) é a soma dos dois anteriores.
// fibonacci(0) = 0, fibonacci(1) = 1, fibonacci(2) = 1, ...
// ---------------------------------------------------------
function fibonacci(n) {
  if (n < 0) throw new Error("N deve ser maior ou igual a 0");
  if (n === 0) return 0;
  if (n === 1) return 1;

  let anterior = 0;
  let atual = 1;

  for (let i = 2; i <= n; i++) {
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }
  return atual;
}

// Retorna os N primeiros termos da sequência, útil para exibir a série completa
function sequenciaFibonacci(n) {
  const termos = [];
  for (let i = 0; i <= n; i++) {
    termos.push(fibonacci(i));
  }
  return termos;
}

// ---------------------------------------------------------
// 4. Máximo Divisor Comum (MDC)
// O maior número inteiro que divide "a" e "b" ao mesmo tempo.
// Usa o Algoritmo de Euclides.
// ---------------------------------------------------------
function mdc(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

// ---------------------------------------------------------
// 5. Ordenação - Quicksort
// Ordena um array de números em ordem crescente.
// ---------------------------------------------------------
function quicksort(array) {
  if (array.length <= 1) return array;

  const [pivo, ...resto] = array;
  const menores = resto.filter((item) => item <= pivo);
  const maiores = resto.filter((item) => item > pivo);

  return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

// ---------------------------------------------------------
// 6. Contagem
// Dado um conjunto de N números de entrada, conte quantos
// valores inteiros existem nesse conjunto entre o primeiro
// valor informado (inclusive) e N (inclusive), onde N é a
// quantidade de números do conjunto (o tamanho da entrada).
// ---------------------------------------------------------
function contarNoIntervalo(numeros) {
  if (numeros.length === 0) return 0;

  const primeiro = numeros[0];
  const n = numeros.length; // N = quantidade de números de entrada
  const limiteInferior = Math.min(primeiro, n);
  const limiteSuperior = Math.max(primeiro, n);

  return numeros.filter(
    (valor) => valor >= limiteInferior && valor <= limiteSuperior
  ).length;
}

// ---------------------------------------------------------
// Testes / demonstração
// ---------------------------------------------------------
function main() {
  console.log("=== 1. Número é primo ===");
  [1, 2, 7, 15, 17, 20].forEach((n) =>
    console.log(`${n} é primo? ${ehPrimo(n)}`)
  );

  console.log("\n=== 2. Somatório ===");
  const conjunto = [1, 2, 3, 4, 5];
  console.log(`Soma de [${conjunto}] = ${somatorio(conjunto)}`);

  console.log("\n=== 3. Fibonacci ===");
  console.log(`Termo 10 da sequência: ${fibonacci(10)}`);
  console.log(`Primeiros 10 termos: [${sequenciaFibonacci(9)}]`);

  console.log("\n=== 4. Máximo Divisor Comum ===");
  console.log(`MDC(48, 18) = ${mdc(48, 18)}`);
  console.log(`MDC(101, 10) = ${mdc(101, 10)}`);

  console.log("\n=== 5. Quicksort ===");
  const desordenado = [9, 3, 7, 1, 8, 2, 5];
  console.log(`Original: [${desordenado}]`);
  console.log(`Ordenado: [${quicksort(desordenado)}]`);

  console.log("\n=== 6. Contagem ===");
  const entrada = [3, 1, 2, 3, 4, 5, 6];
  console.log(
    `Entrada: [${entrada}] -> Quantidade entre o 1º valor e N: ${contarNoIntervalo(
      entrada
    )}`
  );
}

main();

module.exports = {
  ehPrimo,
  somatorio,
  fibonacci,
  sequenciaFibonacci,
  mdc,
  quicksort,
  contarNoIntervalo,
};
