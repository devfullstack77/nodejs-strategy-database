# NodeJs + Design Patterns Strategy


[![GitHub issues](https://img.shields.io/github/issues/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/issues) [![GitHub forks](https://img.shields.io/github/forks/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/network) [![GitHub stars](https://img.shields.io/github/stars/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/stargazers) [![GitHub license](https://img.shields.io/github/license/devfullstack77/cadastro-nestjs)](https://github.com/devfullstack77/cadastro-nestjs/blob/main/LICENSE) <img src="https://img.shields.io/badge/coverage-34.3-brightgreen"/>


## Descrição
Praticar Design Pattern com NodeJs para exemplificar o comportamento em criar diferentes execuções sem acoplamento.
Strategy e Context interagem para implementar o algoritimo escolhido. Portanto um contexto pode passar os dados pelo algoritimo que é chamado.

![](images/strategy.gif)

## Objetivo
Um template de uso rápido e fácil para evidenciar a aplicabilidade.

## ✨ Strategy - Comportamental de Objetos
### Vantagens
- Eliminam comandos condicionais
- Especializar a classe Context para diferentes comportamentos.
- Encapsular os algoritimos en classes separadas tornando mais fácil trocar, entender e estender.


## 🎲 Testando a aplicação

Rodando a aplicação
```bash
node index.js
```

 ## Estrutura de pastas

```bash
├── index.js
├── package.json
├── README.md
└── src
    ├── db
    │   └── strategies
    │       ├── base
    │       │   └── contextStrategy.js
    │       ├── interfaces
    │       │   └── ICrud.js
    │       ├── mongodb.js
    │       └── postgres.js
    └── strategy.js

```
