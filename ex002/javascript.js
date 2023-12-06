var valor_hora = prompt("Qual o valor da sua hora? ")
valor_hora = parseInt(valor_hora)
var qtde_trabalhada = prompt("quantas horas você trabalhou esse mês? ")
qtde_trabalhada = parseInt(qtde_trabalhada)
var salario_bruto = (valor_hora * qtde_trabalhada)
alert("Seu salário bruto sem descontos é de " + salario_bruto)

if(salario_bruto > 0 && salario_bruto <= 900) {
    salario_liq = salario_bruto - (salario_bruto * (10 / 100))
    salario_liq = salario_bruto - (salario_bruto * (11 / 100))
    alert("o seu salário atual é maior que R$ 0 e menor que R$ 900 " + salario_liq)
} else if (salario_bruto > 900 && salario_bruto <= 1500) {
    salario_liq = salario_bruto - (salario_bruto * (5 / 100))
    salario_liq = salario_bruto - (salario_bruto * (10 / 100))
    salario_liq = salario_bruto - (salario_bruto * (11 / 100))
    alert("O seu salário atual é de " + salario_liq)
} else if (salario_bruto > 1500 && salario_bruto <= 2500) {
    salario_liq = salario_bruto - (salario_bruto * (10 / 100))
    salario_liq = salario_bruto - (salario_bruto * (10 / 100))
    salario_liq = salario_bruto - (salario_bruto * (11 / 100))
    alert("O seu salário atual é maior que R$ 1500 e menor que R$ 2500 " + salario_liq)
} else if (salario_bruto > 2500) {
    salario_liq = salario_bruto - (salario_bruto * (20 / 100))
    salario_liq = salario_bruto - (salario_bruto * (10 / 100))
    salario_liq = salario_bruto - (salario_bruto * (11 / 100))
    alert("O seu salário atual está acima de R$ 2500" + salario_liq)
}