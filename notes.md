# Uso do Context

## Diretório
Os arquivos de context devem estar em src/common/context

## Context
- É criado a partir de uma instância de createContext do react.
- Deve receber um nome.

## Provider
- Cada context deve receber uma função que ira prover os dados.
- O a função provider deve receber um filho como propriedade.
- No caso do componente receber estados os estados devem ser criados dentro da função provider.
- A função provider deve retornar o provider do context passando os values como propriedade e o children como filho no corpo.

## useContext como hook customizado
- É criado como uma função, assim como o provider.
- Recebe os retornos do Context a partir de uma instância do useContext passando o Context como propriedade.
- As funções de manipulação de estado do componente serão criadas aqui.
- retorna os estados do componente e suas funções de manipulação.