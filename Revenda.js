function calc(){
    var txtveic = document.getElementById('txtveic')
    var txtpre = document.getElementById('txtpre')
    var outveic = document.getElementById('outveic')
    var outpre = document.getElementById('outpre')

    var automovel = txtveic.value
    var valor = Number(txtpre.value)
    var pre1 = valor / 2
    var pre2 = Math.ceil(pre1 / 12) 
    outveic.textContent = automovel
    outpre.textContent = `Entrada R$: ${pre1} 12x R$: ${pre2}`
}