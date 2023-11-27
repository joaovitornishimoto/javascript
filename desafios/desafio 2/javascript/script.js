function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 4) {
                // Criança
                img.setAttribute('src', 'bebe-homem-250.png')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'homem-jovem-250.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto-250.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homem-idoso-250.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                // Criança
                img.setAttribute('src', 'bebe-mulher-250.png')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'mulher-jovem-250.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher-adulta-250.png')
            } else {
                // Idoso
                img.setAttribute('src', 'mulher-idosa-250.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}