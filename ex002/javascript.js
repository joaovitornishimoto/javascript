var nota1 = prompt("Digite sua nota no primeiro semestre: ")
nota1 = parseInt(nota1)
var nota2 = prompt("digite sua nota no segundo semestre: ")
nota2 = parseInt(nota2)
var media = nota1 + nota2 / 5

if (media >= 9 && media >= 10) {
    alert("Sua nota foi A: APROVADO!" )
} else if (media >= 7.5 && media <= 9) {
    alert("Sua nota foi B: APROVADO!")
} else if (media >= 6 && media <= 7.5) {
    alert("Sua nota foi C: APROVADO!")
} else if (media >= 4 && media <= 6) {
    alert("Sua nota foi D: REPROVADO!")
} else if (media <= 4 && media >= 0) {
    alert("sua nota foi E: REPROVADO!")
}