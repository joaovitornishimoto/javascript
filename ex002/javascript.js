function maior() {
    var num1 = parseFloat(document.getElementById('txtn1').value)
    var num2 = parseFloat(document.getElementById('txtn2').value)
    var num3 = parseFloat(document.getElementById('txtn3').value)

    var maior = num1

    if(num2 > maior) {
        maior = num2
    }
    if(num3 > maior) {
        maior = num3
    }

    alert("Maior: "+maior)
}

function menor() {
    var num1 = parseFloat(document.getElementById('txtn1').value)
    var num2 = parseFloat(document.getElementById('txtn2').value)
    var num3 = parseFloat(document.getElementById('txtn3').value)

    menor = num1

    if(num2 < menor) {
        menor = num2
    }
    if(num3 < menor) {
        menor = num3
    }

    alert("Menor: "+menor)
}