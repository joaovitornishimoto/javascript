function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha-250.png'
        document.body.style.background = '#bf9c68'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'tarde-250.png'
        document.body.style.background = '#97bc9b'
    } else {
        // BOA NOITE!
        img.src = 'noite-250.png'
        document.body.style.background = '#0a181b'
    }
}