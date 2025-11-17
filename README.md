# RI6 - Calculadora Especial em TypeScript

Este projeto implementa uma calculadora especial em TypeScript, utilizando conceitos de Programação Orientada a Objetos (POO) como herança, encapsulamento e polimorfismo. A calculadora é um aplicativo CLI (Command-Line Interface) que realiza operações matemáticas básicas e avançadas.

## Funcionalidades

### Parte 1: Operações Básicas
- **Adição**: Soma de dois números.
- **Subtração**: Diferença entre dois números.
- **Divisão**: Divisão de dois números (com tratamento de divisão por zero).
- **Potenciação**: Elevação de um número à potência de outro.
- **Raiz Quadrada**: Cálculo da raiz quadrada de um número (com validação para números negativos).

### Parte 2: Bhaskara
- **Raízes de Equação Quadrática**: Cálculo das raízes de uma equação do segundo grau usando a fórmula de Bhaskara.

## Estrutura do Projeto

```
RI6/
├── src/
│   ├── Operation.ts          # Classe abstrata base para operações
│   ├── Addition.ts           # Implementação da adição
│   ├── Subtraction.ts        # Implementação da subtração
│   ├── Division.ts           # Implementação da divisão
│   ├── Power.ts              # Implementação da potenciação
│   ├── SquareRoot.ts         # Implementação da raiz quadrada
│   ├── Bhaskara.ts           # Implementação do cálculo de raízes quadráticas
│   ├── Calculator.ts         # Classe principal da calculadora
│   └── index.ts              # Ponto de entrada da aplicação
├── dist/                     # Arquivos JavaScript compilados
├── node_modules/             # Dependências
├── package.json              # Configurações do projeto
├── tsconfig.json             # Configurações do TypeScript
├── .gitignore                # Arquivos ignorados pelo Git
└── README.md                 # Este arquivo
```

## Como Executar

### Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- npm (geralmente vem com o Node.js)

### Instalação
1. Clone o repositório:
   ```
   git clone https://github.com/Raul-Germano-Rosendo/RI6.git
   cd RI6
   ```

2. Instale as dependências:
   ```
   npm install
   ```

### Compilação
Compile o TypeScript para JavaScript:
```
npm run build
```

### Execução
Execute a calculadora:
```
npm start
```

Ou compile e execute em um único comando:
```
npm run dev
```

## Como Usar
1. Execute o programa.
2. Escolha uma operação digitando o número correspondente:
   - 1: Adição
   - 2: Subtração
   - 3: Divisão
   - 4: Potenciação
   - 5: Raiz Quadrada
   - 6: Bhaskara
3. Para operações básicas (1-5), digite dois números quando solicitado.
4. Para Bhaskara (6), digite os coeficientes a, b e c da equação ax² + bx + c = 0.
5. O resultado será exibido no terminal.

## Conceitos de POO Utilizados

- **Herança**: As classes de operações (`Addition`, `Subtraction`, etc.) herdam da classe abstrata `Operation`.
- **Encapsulamento**: Os detalhes de implementação das operações estão encapsulados em suas respectivas classes.
- **Polimorfismo**: Todas as operações implementam o método `execute` da classe base `Operation`, permitindo que sejam usadas de forma intercambiável.

## Tecnologias Utilizadas
- **TypeScript**: Linguagem de programação principal.
- **Node.js**: Ambiente de execução.
- **readline**: Módulo do Node.js para entrada de dados via linha de comando.

## Desenvolvimento
Para contribuir ou modificar o projeto:
1. Faça suas alterações no código TypeScript na pasta `src/`.
2. Compile com `npm run build`.
3. Teste as mudanças executando `npm start`.

## Autor
Raul Germano Rosendo
