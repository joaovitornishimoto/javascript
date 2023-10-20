console.log ('Bem vindo a calculadora digital')
var n1 = 5
switch(n1) {
    case 0:
        var calc1 = n1 + 5
        console.log(`Você escolheu a soma de 5 + 5 que é igual a ${calc1}`)
        break
    case 1:
        var calc2 = n1 - 5
        console.log(`Você escolheu subtrair 5 - 5 que é igual a ${calc2}`)
        break
    case 2:
        var calc3 = n1 * 5
        console.log(`Você escolheu multiplicar 5 * 5 que é igual a ${calc3}`)
        break
    case 3:
        var calc4 = n1 / 5
        console.log(`Você escolheu dividir 5 / 5 que é igual a ${calc4}`)
        break
    default:
        break
}