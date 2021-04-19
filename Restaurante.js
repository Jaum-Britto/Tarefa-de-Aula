function calc(){
    var txtbuff = document.getElementById('txtbuff')
    var txtcon = document.getElementById('txtcon')
  
    var buffet = txtbuff.value
    var consumo = Number(txtcon.value)
    var prefinal = (consumo * buffet) / 1000
    outbuff.textContent = `Valor a pagar R$: ${prefinal}`
}