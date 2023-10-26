alert("Boas vindas ao nosso site!");

let numeroDeVendas = 50
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos."

let nome = prompt('Qual o seu nome?');

let idade = prompt('Digite a sua idade');
if (idade >= 18) {
    alert('Pode tirar a habilitação!'); 
}

alert(mensagemDeErro);