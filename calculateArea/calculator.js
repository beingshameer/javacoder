let g1
let g2
let g3

function CalculateTotalGrocery()
{
    g1= parseFloat(document.getElementById('gr1').value)
    g2= parseFloat(document.getElementById('gr2').value)
    g3= parseFloat(document.getElementById('gr3').value)
   let ader = g1+g2 +g3
   document.getElementById("result").innerText=`The total grocery = ${ader}`
}