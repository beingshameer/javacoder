let length ;
let width

function calculateArea()
{
    length = parseFloat(document.getElementById('length').value)
    width = parseFloat(document.getElementById('width').value);
    let a = length * width 
    document.getElementById('result').innerText=`The area of the rectangle = ${a}`
}
