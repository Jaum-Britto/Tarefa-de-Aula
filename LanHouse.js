function calc(){
var  txtmin = document.getElementById('txtmin')
var  txttem = document.getElementById('txttem')
var  outmin = document.getElementById('outmin')

var valor = Number(txtmin.value);
var tempo = Number(txttem.value);
var t1 = tempo / 15
var total = Math.ceil(t1)
var f = total * valor
outmin.textContent = `Valor a pagar R$: ${f}`
}