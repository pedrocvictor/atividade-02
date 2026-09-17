import java.util.Arrays;

/**
 * Algoritmos clássicos em Java
 * Compile com: javac Algoritmos.java
 * Execute com: java Algoritmos
 * Pode ser criado como um novo projeto Java no Replit ou aberto no VS Code
 * (com a extensão "Extension Pack for Java").
 */
public class Algoritmos {

    // ---------------------------------------------------------
    // 1. Número é primo
    // Um número inteiro positivo n é primo se for divisível
    // apenas por 1 e por ele mesmo.
    // ---------------------------------------------------------
    public static boolean ehPrimo(int n) {
        if (n < 2) return false; // 0 e 1 não são primos
        if (n == 2) return true;
        if (n % 2 == 0) return false;

        for (int i = 3; (long) i * i <= n; i += 2) {
            if (n % i == 0) return false;
        }
        return true;
    }

    // ---------------------------------------------------------
    // 2. Somatório
    // Soma de um conjunto de números.
    // ---------------------------------------------------------
    public static int somatorio(int[] numeros) {
        int soma = 0;
        for (int numero : numeros) {
            soma += numero;
        }
        return soma;
    }

    // ---------------------------------------------------------
    // 3. Fibonacci
    // Sequência: 0, 1, 1, 2, 3, 5, 8, 13 ...
    // fibonacci(0) = 0, fibonacci(1) = 1, fibonacci(2) = 1, ...
    // ---------------------------------------------------------
    public static long fibonacci(int n) {
        if (n < 0) throw new IllegalArgumentException("N deve ser maior ou igual a 0");
        if (n == 0) return 0;
        if (n == 1) return 1;

        long anterior = 0;
        long atual = 1;

        for (int i = 2; i <= n; i++) {
            long proximo = anterior + atual;
            anterior = atual;
            atual = proximo;
        }
        return atual;
    }

    // Retorna os N primeiros termos da sequência, útil para exibir a série completa
    public static long[] sequenciaFibonacci(int n) {
        long[] termos = new long[n + 1];
        for (int i = 0; i <= n; i++) {
            termos[i] = fibonacci(i);
        }
        return termos;
    }

    // ---------------------------------------------------------
    // 4. Máximo Divisor Comum (MDC)
    // O maior número inteiro que divide "a" e "b" ao mesmo tempo.
    // Usa o Algoritmo de Euclides.
    // ---------------------------------------------------------
    public static int mdc(int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b != 0) {
            int resto = a % b;
            a = b;
            b = resto;
        }
        return a;
    }

    // ---------------------------------------------------------
    // 5. Ordenação - Quicksort
    // Ordena um array de números em ordem crescente (in-place).
    // ---------------------------------------------------------
    public static void quicksort(int[] array) {
        quicksort(array, 0, array.length - 1);
    }

    private static void quicksort(int[] array, int inicio, int fim) {
        if (inicio < fim) {
            int posicaoPivo = particionar(array, inicio, fim);
            quicksort(array, inicio, posicaoPivo - 1);
            quicksort(array, posicaoPivo + 1, fim);
        }
    }

    private static int particionar(int[] array, int inicio, int fim) {
        int pivo = array[fim];
        int i = inicio - 1;

        for (int j = inicio; j < fim; j++) {
            if (array[j] <= pivo) {
                i++;
                trocar(array, i, j);
            }
        }
        trocar(array, i + 1, fim);
        return i + 1;
    }

    private static void trocar(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    // ---------------------------------------------------------
    // 6. Contagem
    // Dado um conjunto de N números de entrada, conte quantos
    // valores inteiros existem nesse conjunto entre o primeiro
    // valor informado (inclusive) e N (inclusive), onde N é a
    // quantidade de números do conjunto (o tamanho da entrada).
    // ---------------------------------------------------------
    public static int contarNoIntervalo(int[] numeros) {
        if (numeros.length == 0) return 0;

        int primeiro = numeros[0];
        int n = numeros.length; // N = quantidade de números de entrada
        int limiteInferior = Math.min(primeiro, n);
        int limiteSuperior = Math.max(primeiro, n);

        int contador = 0;
        for (int valor : numeros) {
            if (valor >= limiteInferior && valor <= limiteSuperior) {
                contador++;
            }
        }
        return contador;
    }

    // ---------------------------------------------------------
    // Testes / demonstração
    // ---------------------------------------------------------
    public static void main(String[] args) {
        System.out.println("=== 1. Número é primo ===");
        int[] testesPrimo = {1, 2, 7, 15, 17, 20};
        for (int n : testesPrimo) {
            System.out.println(n + " é primo? " + ehPrimo(n));
        }

        System.out.println("\n=== 2. Somatório ===");
        int[] conjunto = {1, 2, 3, 4, 5};
        System.out.println("Soma de " + Arrays.toString(conjunto) + " = " + somatorio(conjunto));

        System.out.println("\n=== 3. Fibonacci ===");
        System.out.println("Termo 10 da sequência: " + fibonacci(10));
        System.out.println("Primeiros 10 termos: " + Arrays.toString(sequenciaFibonacci(9)));

        System.out.println("\n=== 4. Máximo Divisor Comum ===");
        System.out.println("MDC(48, 18) = " + mdc(48, 18));
        System.out.println("MDC(101, 10) = " + mdc(101, 10));

        System.out.println("\n=== 5. Quicksort ===");
        int[] desordenado = {9, 3, 7, 1, 8, 2, 5};
        System.out.println("Original: " + Arrays.toString(desordenado));
        quicksort(desordenado);
        System.out.println("Ordenado: " + Arrays.toString(desordenado));

        System.out.println("\n=== 6. Contagem ===");
        int[] entrada = {3, 1, 2, 3, 4, 5, 6};
        System.out.println("Entrada: " + Arrays.toString(entrada)
                + " -> Quantidade entre o 1º valor e N: " + contarNoIntervalo(entrada));
    }
}
