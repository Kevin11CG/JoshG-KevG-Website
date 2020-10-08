var seal = document.getElementById('seal')
//var  number = document.getElementById("userNumber").value;
seal.addEventListener('mousedown', sealChange)
seal.addEventListener('mouseup', sealReset)
function sealChange(){seal.innerHTML='<img src="images/XULA.png" width=100 height=100 title="Click Again"">'}
function sealReset(){seal.innerHTML = '<img src="images/xula-seal.png" width=100 height=100 title="Click And Hold">'}
function ninehundredInput(){var  number = document.getElementById("userNumber").value; alert("Thank you for submitting! Your number: "+ number); console.log("Thank you for submitting! Your number: "+ number);}