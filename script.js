var seal = document.getElementById('seal')
seal.addEventListener('mousedown', sealChange)
seal.addEventListener('mouseup', sealReset)

document.getElementById('changefont').addEventListener('click', fontChange)
document.getElementById('changecolor').addEventListener('click', colorChange)
document.getElementById('changebg').addEventListener('click', bgChange)

function sealChange(){seal.innerHTML='<img src="images/XULA.png" width=100 height=100 title="Click Again"">'}
function sealReset(){seal.innerHTML = '<img src="images/xula-seal.png" width=100 height=100 title="Click And Hold">'}
function ninehundredInput(){var number = document.getElementById("userNumber").value; alert("Thank you for submitting! Your number: "+ number); console.log("Thank you for submitting! Your number: "+ number);}
function fontChange(){    
    var body = document.getElementById('body'); 
    if(body.classList.contains('exo'))
    {
        body.classList.remove('exo');
        body.classList.add('indie');
    } 
    else if(body.classList.contains('indie')){
        body.classList.remove('indie');
        body.classList.add('exo');
    }
}
function colorChange(){  
    var content = document.getElementById('content'); 
    if(content.classList.contains('normallight'))
    {
        content.classList.remove('normallight');
        content.classList.add('xuladark');
    } 
    else if(content.classList.contains('xuladark')){
        content.classList.remove('xuladark');
        content.classList.add('normallight');
    }
}
function bgChange(){    
    var body = document.getElementById('body'); 
    if(body.classList.contains('compsci'))
    {
        body.classList.remove('compsci');
        body.classList.add('javas');
    } 
    else if(body.classList.contains('javas')){
        body.classList.remove('javas');
        body.classList.add('compsci');
    }
}