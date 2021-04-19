/*
   1 - Elaborar um programa para uma revenda de veículos. O programa deve ler o modelo e o preço do veículo.
   Deve, então, apresentar como resposta o valor da entrada (50%) e restante em 12x.

*/function calc(){
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


/*
   2 - Elaborar um programa para um restaurante que leia o preço por kg e o consumo em gramas de um cliente.
   Exiba o valor a ser pago.

*/function calc(){
   var txtbuff = document.getElementById('txtbuff')
   var txtcon = document.getElementById('txtcon')
 
   var buffet = txtbuff.value
   var consumo = Number(txtcon.value)
   var prefinal = (consumo * buffet) / 1000
   outbuff.textContent = `Valor a pagar R$: ${prefinal}`
}

/*
   3 - Elaborar um programa para uma lan house de um aeroporto. 
   O programa deve ler o valor de cada 15 min de uso de um computador e o tempo de uso por um cliente em minutos.
   Informe o valor a ser pago pelo cliente, sabendo que as frações de 15 minutos devem ser cobradas de forma integral.

*/function calc(){
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