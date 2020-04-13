# Caculadora JavaScript V1

##### Introdução

A ideia deste projeto foi seguir o guia de projetos para iniciantes que você pode encontrar >>> [aqui](https://github.com/andreynithack/app-ideas) <<<

##### Requisitos do Projeto:
- O usuário pode ver uma tela mostrando o número atual digitado ou o resultado da última operação.

- O usuário pode ver um teclado de entrada contendo botões para os dígitos de 0 a 9, operações - '+', '-', '/' e '=', um botão 'C' (para limpar) e um botão 'AC' (para limpar tudo).

- O usuário pode inserir números como seqüências de até 8 dígitos, clicando nos dígitos no painel de entrada. A entrada de qualquer dígito acima de 8 será ignorada.

- O usuário pode clicar em um botão de operação para exibir o resultado dessa operação em:
    * o resultado da operação anterior e o último número digitado OU
    * Os dois últimos números digitados em OR 
    * O último número digitado


##### FUNÇÕES

Funções pode ser utilizadas como chamada para determinado conjuto de codigo:

- `calcular()` 
    * Utlizada para efetuar a soma dos valores de entrada

- `pressNumber()`
    * Faz a leitura do botão Number quando precionado na calculadora

- `pressOperadores()`
    * Faz a leitura do botão Operadore quando precionado na calculadora

- `displayAtt()`
    * Atualiza o display da calculadora de acordo com o botão precionado

- `clearTela()`
    * Limpa o cache do display

- `ClearCalculo()`
    * Reseta a array responsavel por salvar as informações  para calculo

- `clearAll()`
    * Resta todos os dados da calculadora.


##### IF ELSE

O bem conhecido "Se, Senão", nos podemmos utilizar essa sintaxe para determinar difirente escolhas diante o determinado problema

```javascript
if (true){
  print("Pudim ^^")
}else{
    print("Pão de batata.)
}
```


##### SWITCH

Tão conhecido como o IF o SWITCH funciona de maneira parecida mas o subistitue quando o assunto é ter que analizar um conjuto grandes de alternativas, ficaria bem chato ter que fazer um If para cada caso.

```javascript
numero = 3;
switch(numero){
case 1: print("Ratata");
case 2: print("Ratatu");
case 3: print("Ratato");
case 4: print("Ratati");
default: print("Ratate);
}
```


### Meu Resumo

Bem eu estou passando a conhecer um pouco mais do javascript junto com o html e o css, cada tarefa que finalizo é um marco de conhecimento a mais em meu progresso, fico feliz em compartilhar meu desenvolvimento, para aqueles que queiram me dar algumas dicas podem mandar um e-mail para nithack@gmail.com . ^^
