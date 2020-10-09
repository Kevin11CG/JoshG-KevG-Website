var seal = document.getElementById('seal')
seal.addEventListener('mousedown', sealChange)
seal.addEventListener('mouseup', sealReset)
function sealChange(){seal.innerHTML='<img src="images/XULA.png" width=100 height=100 title="Click Again"">'}
function sealReset(){seal.innerHTML = '<img src="images/xula-seal.png" width=100 height=100 title="Click And Hold">'}

document.getElementById("firstEntr").addEventListener('click', function(){displayNinehundred(ninehundredInput())})
function ninehundredInput(){
    var number = document.getElementById("userNumber").value; 
    var nString = number.toString();
    var digit = nString.length;
    if(digit == 9 && nString.includes('900', 0))
    {
        return number;
    }
    else if(digit < 9 || digit > 9){
        alert("Invalid input! Number must have 9 digits."); 
    }
    else if(!nString.includes('900', 0)){
        alert("Invalid input! Number must start with 900.")
    }
}
function displayNinehundred(num){
    if(!num==0)
    {    
        alert("Thank you for submitting! Your number: "+ num); 
        console.log("Thank you for submitting! Your number: "+ num);
    }
}

document.getElementById("secondEntr").addEventListener('click', displayLogin)
function displayLogin(){
    var fstname = document.getElementById("userFstName").value;
    var lstname = document.getElementById("userLstName").value;
    var number = ninehundredInput();
    if(fstname.length < 2 || lstname.length < 2)
    {
        alert("Invalid input! Name must have at least two letters.");
    }
    else if (number.toString().length==0){
        alert("No 900 number entered!")
    }
    else
    {
    alert("Succesfully logged in as: " + fstname + " " + lstname + " (" + number + ")");
    document.getElementById("success").style.visibility = "visible";
    }
}

document.getElementById('changefont').addEventListener('click', fontChange)
document.getElementById('changecolor').addEventListener('click', colorChange)
document.getElementById('changebg').addEventListener('click', bgChange)
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
