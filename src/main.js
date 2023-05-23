const numero = prompt('Insira um número');
let dobro = numero * 2;
let triplo = numero * 3;

if (numero % 2 === 0) {
    alert(`O número ${numero} é par.\n ${numero} x 2 é: ${dobro}`);
    document.getElementById('numero').innerHTML = numero;
    document.getElementById('dobro').innerHTML = dobro;
} else {
    alert(`O número ${numero} é impar.\n ${numero} x 3 é: ${triplo}`);
    document.getElementById('numero').innerHTML = numero;
    document.getElementById('dobro').innerHTML = triplo;
}

const jantarValor = parseInt(prompt('Insira o valor do Jantar'));
const taxaGarcom = 0.1;
let jantarTaxa = jantarValor * taxaGarcom;
let total = jantarValor + jantarTaxa;
alert(
    `Valor da conta é: R$${jantarValor} \n A taxa do garçom é de: 10% \n Valor da conta + taxa: R$${total}`
);
document.getElementById('jantarValor').innerHTML = `R$${jantarValor}`;
document.getElementById('total').innerHTML = `R$${total}`;

const pizzaTotal = prompt('Insira o valor da conta da Pizzaria');
const clientesTotal = prompt('Insira o numero de clientes');
let pizzaDividida = parseInt(pizzaTotal / clientesTotal);
alert(
    `Valor da Pizza: R$${pizzaTotal} \n Quantidade de clientes: ${clientesTotal} \n Valor por cliente: R$${pizzaDividida}`
);
document.getElementById('pizzaTotal').innerHTML = `R$${pizzaTotal}`;
document.getElementById('clientesTotal').innerHTML = clientesTotal;
document.getElementById('pizzaDividida').innerHTML = `R$${pizzaDividida}`;
