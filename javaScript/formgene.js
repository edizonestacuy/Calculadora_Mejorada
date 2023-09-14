var formulario = document.forms.formulario_gene
var resultado = document.getElementById("for-gene-monto")

formulario.monto.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let s = parseFloat(formulario.monto.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = s*(((i*((1+i)**n)))/(((1+i)**n)-1))

    resultado.innerHTML = total.toFixed(2)
}