function reajuste() {
    var salario = parseFloat(document.getElementById('txts').value)
    var reajuste = salario 

    if(reajuste <= 280.00) {
        reajuste = reajuste + (reajuste * 20 / 100)
        alert("seu salário de " + salario + "foi alterado para"+ reajuste)
    } else if(reajuste >= 280.00 || reajuste <= 700.00) {
        reajuste = reajuste + (reajuste * 15 / 100)
    } else if(reajuste >= 700.00 || reajuste <= 1500.00) {
        reajuste = reajuste + (reajuste * 10 / 100)
    } else if(reajuste >= 1500.00) {
        reajuste + (reajuste * 5 / 100)
        
    }
}