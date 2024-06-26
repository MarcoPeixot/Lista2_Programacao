# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 6 questões objetivas assinalando a alternativa correta
- Resolva as 4 questões dissertativas escrevendo no próprio arquivo .md
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com ChatGPT e afins: entregar algo só para ganhar nota não faz você aprender e ficar mais inteligente. Não seja dependente da máquina! (E não se envolva em plágio!)
- ao final, publique seu arquivo lista_02.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

**1)** Considere o seguinte código JavaScript:

```javascript
//EX01
let x = 17
let y = 5
let z = 8

resultadoBooleano =  (x < y) && (z > x) || (x - y > z)
console.log(resultadoBooleano)

const listaDeNumeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < listaDeNumeros.length; i++) {
  soma += listaDeNumeros[i];
}

console.log("A soma dos números é:", soma);

```

``R = Para resolver isso é necessário entender o resiltadoBooleano. O resultado que vai sair é se X for menor que Y e Z > X retorna true ou se X - Y for maior que Z também retorna true. Com números, se 17 for menor que 5 e 8 for maior que 17 retorna true ou se 17 - 5 for maior que 8 retorna true.
Dessa forma o console.log vai exibir que resultadoBooleano é true, isso acontece só por causa da segunda condição que atende o requisito de ser verdadeiro ou falso.
A segunda parte do código vai pegar uma lista e fazer a soma dela na variável soma, que nesse caso é uma lista de 1 a 5 e dessa forma vai somar 15 na variável soma.
Com isso a alternativa correta é a B.``

Qual das seguintes alternativas melhor descreve o que o código faz?

A) O código avalia a expressão booleana, imprime o resultado `false`, calcula a soma dos números de 1 a 5 e imprime o resultado no console.

``X) O código avalia a expressão booleana, imprime o resultado `true`, calcula a soma dos números de 1 a 5 e imprime o resultado no console.``

C) O código avalia a expressão booleana, imprime o resultado `true` e verifica se o número 5 está presente na lista de números.

D) O código avalia a expressão booleana, imprime o resultado `false` e ordena a lista de números em ordem crescente.


______

**2)** Analise as funções calcularOrcamento() e calcularOrcamento2(). Num cenário em que a lista gastos fosse incializada como var gastos = [3600, 950, 620, 38] em ambas funções.

```javascript
//Versão 1 da função que calcula orçamento
function calculaOrcamento(){

    var gastos = [1800, 950, 620, 38];
    var totalGastos = gastos[0];
    var salario = 3500;
    var saldo = 0; 
    var statusSaldo =  'positivo';
    var i = 1;

    do{
        totalGastos += gastos[i];
        i++;
    } while(salario >= totalGastos && i<gastos.length)
    
    saldo = salario - totalGastos;

    if (saldo < 0 ){
        statusSaldo = 'negativo';
    } 
    console.log (`Seu saldo é ${statusSaldo} de ${saldo}. `);
}
```

```javascript
//Versão 2 da função que calcula orçamento
function calculaOrcamento2(){

    var gastos = [1800, 950, 620, 38];
    var totalGastos = gastos[0];
    var salario = 3500;
    var statusSaldo =  'positivo';
    var saldo = 0;
    var i = 1;

    while(salario >= totalGastos && i<gastos.length){
        totalGastos += gastos[i];
        i++;
    }

    saldo = salario - totalGastos;
    if (saldo < 0 ){
        statusSaldo = 'negativo';
    } 
    console.log (`Seu saldo é ${statusSaldo} de ${saldo}. `);
}
```

``R = São duas funções com o propósito de calcular o orçamento, porém o que diferencia elas é o uso do laço de repetição, a primeira usa o do while, onde realiza primeiro o comando e depois verifica a condição, a segunda usa apenas o while onde verifica a condição primeiro e depois executa o comando. Por causa disso, as duas funções verificam o salario - totalGasto. A primeira função imprime -1050 pois primeiro lê o comando a condição. A segunda ela já lê a condição e pela condição a variável totalGasto não adiciona mais valor, por causa disso só imprime o -100.``

Escolha a opção que responde corretamente qual seria a saída após a execução de cada função:

A) As funções calcularOrcamento() e calcularOrcamento2() teriam a mesma saída: 'Seu saldo é negativo de -1050.'

``X) A saída de calcularOrcamento() seria: 'Seu saldo é negativo de -1050.' e a de calcularOrcamento2() seria: 'Seu saldo é negativo de -100.'``

C) A saída de calcularOrcamento() seria: 'Seu saldo é negativo de -100.' e a de calcularOrcamento2() seria: 'Seu saldo é negativo de -1050.'

D) As funções calcularOrcamento() e calcularOrcamento2() teriam a mesma saída: 'Seu saldo é negativo de -100.'

______

**3)** Considere o seguinte trecho de código em JavaScript:
```javascript
//EX03
const numero = 10;

if (numero % 2 === 0) {
  console.log("O número é par!");
} else if (numero % 3 === 0) {
  console.log("O número é divisível por 3!");
} else {
  console.log("O número é ímpar e não é divisível por 3!");
}
```

 Qual das seguintes alternativas é a descrição mais precisa do que o código faz?

``R = Esse código tem uma constante numero igual a 10. E tem condições, onde verifica se o número vai ser par, divisível por 3 ou ímpar.
Como a constante é igual a 10 e 10 é um numéro par, o resultado que é printado no console é "O número é par!"``

A) O código verifica se o número é divisível por 3 e, se for, exibe a mensagem "O número é divisível por 3!".

B) O código verifica se o número é par ou ímpar. Se for par, exibe a mensagem "O número é par!". Se for ímpar, exibe a mensagem "O número é ímpar!".

C) O código verifica se o número é par, ímpar ou divisível por 3. Se for par, exibe a mensagem "O número é par!". Se for divisível por 3, exibe a mensagem "O número é divisível por 3!". Se for ímpar, exibe a mensagem "O número é ímpar e não é divisível por 3!".

``X) O código verifica se o número é par, se é divisível por 3 ou se é ímpar. Se for par, exibe a mensagem "O número é par!". Se for divisível por 3 (e não for par), exibe a mensagem "O número é divisível por 3!". Se for ímpar (e não for divisível por 3), exibe a mensagem "O número é ímpar e não é divisível por 3!".``


______

**4)** Qual será o resultado impresso no console após a execução desse código?
```javascript
//EX04
var saldo = 1000;
var limiteCredito = 500;
var valorCompras = [200, 800, 300, 400, 600];

for (var i = 0; i < valorCompras.length; i++) {
    var valorCompra = valorCompras[i];

    if (valorCompra <= saldo) {
        console.log("Compra " + (i+1) + " aprovada. Saldo restante: " + (saldo - valorCompra));
        saldo -= valorCompra;
    } else if (valorCompra <= saldo + limiteCredito) {
        console.log("Compra " + (i+1) + " aprovada com limite de crédito. Saldo restante: " + ((saldo + limiteCredito) - valorCompra));
        saldo = 0;
        limiteCredito -= (valorCompra - saldo);
    } else {
        console.log("Compra " + (i+1) + " negada. Saldo insuficiente e limite de crédito excedido.");
    }
}
```

Escolha a opção que responde corretamente:

``R = Esse código faz 5 verificações, a cada verificação é adicionado mais um valor na variável valorCompra. A análise de cada uma das verificações, ficou assim:
primeira vez: console.log = 1, dá valorCompra = 200 e saldo restante 800
segunda vez: console.log = 2, dá valorCompra = 1000 e saldo restante 0
terceira vez: console.log = 3, dá valorCompra = 1300 e saldo restante 200
quarta vez: console.log = 4, dá valorCompra = 1700 e saldo insuficiente
quinta vez: console.log = 5, dá valorCompra = 2300 e saldo insuficiente``

A)
Compra 1 aprovada. Saldo restante: 800

Compra 2 aprovada com limite de crédito. Saldo restante: 700

Compra 3 aprovada. Saldo restante: 400

Compra 4 aprovada com limite de crédito. Saldo restante: 0

Compra 5 aprovada. Saldo restante: -200


B)
Compra 1 aprovada. Saldo restante: 800

Compra 2 aprovada com limite de crédito. Saldo restante: 700

Compra 3 aprovada. Saldo restante: 200

Compra 4 negada. Saldo insuficiente e limite de crédito excedido.

Compra 5 negada. Saldo insuficiente e limite de crédito excedido.


C)
Compra 1 aprovada. Saldo restante: 800

Compra 2 aprovada com limite de crédito. Saldo restante: 700

Compra 3 aprovada. Saldo restante: 400

Compra 4 negada. Saldo insuficiente e limite de crédito excedido.


``X)``

``Compra 1 aprovada. Saldo restante: 800``

``Compra 2 aprovada. Saldo restante: 0``

``Compra 3 aprovada com limite de crédito. Saldo restante: 200``

``Compra 4 negada. Saldo insuficiente e limite de crédito excedido.``

``Compra 5 negada. Saldo insuficiente e limite de crédito excedido.``

______

**5)** Qual é o principal ciclo de vida de um jogo em Phaser.js?

Escolha a opção que responde corretamente:

``R = O ciclo de vida do funcionamento de um jogo phaser segue essas etapas:``
`` - Preload(): Carrega os recursos necessários do jogo dentro do phaser.``
 ``- Create(): Cria os objetos, configurações e etc. É onde de fato começa toda a inicialização do jogo.``
 ``- Update(): Atualizações contínuas do jogo, onde fica em loop.``

A) Setup -> Update -> Draw

``X) Preload -> Create -> Update``

C) Load -> Initialize -> Render

D) Begin -> Play -> End
______

**6)** Qual é o objetivo principal do módulo Arcade Physics em Phaser.js?

Escolha a opção que responde corretamente:

``R = Na configuração é onde setamos que nosso jogo terá física, dessa forma, ativando as colisões, gravidade e interações no jogo``

A) Renderizar gráficos 3D para jogos em HTML5.

``B) Simular interações físicas realistas, como colisões e movimentos, em jogos 2D.``

C) Criar efeitos de áudio para melhorar a experiência do usuário em jogos.

D) Gerenciar a lógica do jogo e a sincronização de eventos em jogos multiplayer.

______

# Questões dissertativas

**7)** Implemente o pseudocódigo para o algoritmo representado no fluxograma da imagem.
![Uma imagem](assets/image.png)

```
// Inicialização da variável idade
variável idade = inserir("Insira sua idade")

// Verificação de idade para votar
// Faz uma verificação se a idade está de acordo para votar 
// não votar e dizer se o voto é obrigatório ou facultativo.
se idade for menor que 16:
    imprima("Não pode votar!")
senão se idade for menor que 18:
    imprima("Voto facultativo")
senão:
    imprima("Voto obrigatório")
```
______

**8)** Considere a implementação da classe base FormaGeometrica em um sistema de modelagem de formas geométricas. Sua tarefa é implementar, utilizando pseudocódigo, as classes derivadas Retangulo e Circulo, que herdam da classe FormaGeometrica, adicionando atributos específicos e métodos para calcular a área de um retângulo e de um círculo, respectivamente.

```
Classe FormaGeometrica:
    Atributos:
        - cor

    Método Construtor(cor):
        Define o valor do atributo cor com o valor passado como parâmetro.

    Método CalcularArea():
        # Implementação genérica para cálculo de área, a ser sobrescrita pelas subclasses.

```

Resposta:

```
Classe FormaGeometrica:
    Atributos:
        - cor

    Método Construtor(cor):
        esta cor = cor

    Método CalcularArea():
        # Implementação genérica para cálculo de área, a ser sobrescrita pelas subclasses.

Classe Retangulo herda de FormaGeometrica:
    Atributos:
        - cor

    Método Construtor(cor, base, altura):
    Chama o construtor da classe FormaGeometrica passando a cor como parâmetro.
    esta base = base
    esta altura = altura

    Método CalcularArea():
        Retorna area = base * altura


Classe Circulo herda de FormaGeometrica:
    Atributos:
        - cor

    Método Construtor(cor, raio):
    Chama o construtor da classe FormaGeometrica passando a cor como parâmetro.
    esta raio = raio

    Método CalcularArea():
        Retorna area = π * raio^2.
    

```
______

**9)** Você foi contratado(a) como estagiário(a) da Tesla e está participando do desenvolvimento de um programa para simular o desempenho de um carro elétrico em uma corrida. Seu objetivo é determinar em quantos minutos o carro levará para completar uma determinada distância, levando em consideração uma velocidade inicial e uma taxa de aceleração constante. No entanto, você deseja garantir que o carro não exceda uma velocidade máxima nem que a corrida demore mais do que um tempo máximo. Implemente a lógica dessa simulação em pseudocódigo.

```


velocidade_atual = velocidade_inicial
distancia_percorrida = 0
tempo_passado = 0

Enquanto (distancia_percorrida < distancia_corrida e tempo_passado <= tempo_maximo e velocidade_atual <= velocidade_maxima) faça
    tempo_aceleracao = (velocidade_maxima - velocidade_atual) / taxa_aceleracao
    Se (tempo_aceleracao <= tempo_maximo - tempo_passado) então
        tempo_passado = tempo_passado + tempo_aceleracao
        velocidade_atual = velocidade_maxima
    Senão
        tempo_passado = tempo_maximo
        velocidade_atual = velocidade_atual + taxa_aceleracao * (tempo_maximo - tempo_passado)
    Fim Se 
    distancia_percorrida = distancia_percorrida + velocidade_atual * (tempo_passado - tempo_aceleracao / 2)
Fim Enquanto

Se (distancia_percorrida >= distancia_corrida) então
    mensagem = "O carro completou a corrida em " + tempo_passado + " minutos."
Senão
    mensagem = "O carro não conseguiu completar a corrida dentro do tempo máximo."

imprima mensagem


```



______

**10)** Uma matriz é uma coleção bidimensional de elementos, organizados em linhas e colunas. A seguir, é fornecida a implementação da função SomaDeMatrizes(matrizA, matrizB), que calcula a soma de duas matrizes. Sua tarefa é implementar uma função semelhante, porém que realize a multiplicação de duas matrizes.

```
Função SomaDeMatrizes(matrizA, matrizB):
    # Verifica se as duas matrizes têm o mesmo número de linhas e colunas
    Se tamanho(matrizA) ≠ tamanho(matrizB) então:
        Retornar "As matrizes não podem ser somadas. Elas têm dimensões diferentes."
    Senão:
        linhas <- tamanho(matrizA)
        colunas <- tamanho(matrizA[0]) # Considerando que todas as linhas têm o mesmo número de colunas
        matrizResultado <- novaMatriz(linhas, colunas)

        # Loop para percorrer cada elemento das matrizes e calcular a soma
        Para i de 0 até linhas-1 faça:
            Para j de 0 até colunas-1 faça:
                matrizResultado[i][j] <- matrizA[i][j] + matrizB[i][j]

        Retornar matrizResultado

# Exemplo de uso da função
matrizA <- [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrizB <- [[9, 8, 7], [6, 5, 4], [3, 2, 1]]

matrizSoma <- SomaDeMatrizes(matrizA, matrizB)
Escrever("Soma das matrizes:")
ImprimirMatriz(matrizSoma)
```

Resposta:

```
Função MultiplicacaoDeMatrizes(matrizA, matrizB):
    # Verifica se o número de colunas da matrizA é igual ao número de linhas da matrizB
    Se tamanho(matrizA[0]) ≠ tamanho(matrizB) então:
        Retornar "As matrizes não podem ser multiplicadas. Elas têm dimensões diferentes."
    Senão:
        linhasA <- tamanho(matrizA)
        colunasA <- tamanho(matrizA[0])
        colunasB <- tamanho(matrizB[0])
        matrizResultado <- novaMatriz(linhasA, colunasB)

        # Loop para calcular cada elemento da matriz resultado
        Para i de 0 até linhasA-1 faça:
            Para j de 0 até colunasB-1 faça:
                soma <- 0
                Para k de 0 até colunasA-1 faça:
                    soma <- soma + (matrizA[i][k] * matrizB[k][j])
                matrizResultado[i][j] <- soma

        Retornar matrizResultado

# Exemplo de uso da função
matrizA <- [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrizB <- [[9, 8, 7], [6, 5, 4], [3, 2, 1]]

matrizProduto <- MultiplicacaoDeMatrizes(matrizA, matrizB)
Escrever("Produto das matrizes:")
ImprimirMatriz(matrizProduto)

```
