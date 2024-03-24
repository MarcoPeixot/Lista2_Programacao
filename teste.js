function MultiplicacaoDeMatrizes(matrizA, matrizB) {
    // Verifica se o número de colunas da matrizA é igual ao número de linhas da matrizB
    if (matrizA[0].length !== matrizB.length) {
        return "As matrizes não podem ser multiplicadas. O número de colunas da matrizA é diferente do número de linhas da matrizB.";
    } else {
        var linhasA = matrizA.length;
        var colunasA = matrizA[0].length;
        var colunasB = matrizB[0].length;
        var matrizResultado = [];

        // Inicializa a matriz resultado com zeros
        for (var i = 0; i < linhasA; i++) {
            matrizResultado[i] = [];
            for (var j = 0; j < colunasB; j++) {
                matrizResultado[i][j] = 0;
            }
        }

        // Calcula o produto das matrizes
        for (var i = 0; i < linhasA; i++) {
            for (var j = 0; j < colunasB; j++) {
                for (var k = 0; k < colunasA; k++) {
                    matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
                }
            }
        }

        return matrizResultado;
    }
}

// Função auxiliar para imprimir uma matriz
function ImprimirMatriz(matriz) {
    for (var i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}

// Exemplo de uso da função
var matrizA = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var matrizB = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];

var matrizProduto = MultiplicacaoDeMatrizes(matrizA, matrizB);
console.log("Produto das matrizes:");
ImprimirMatriz(matrizProduto);
