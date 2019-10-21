let variable = document.getElementById('zoom');
variable.addEventListener("click", function(){
    variable.classList.toggle('zoom');
});

let image1 = document.getElementById('i')
let image2 = document.getElementById('u')

document.addEventListener('keydown', function(e)
 {
     if(e.keyCode == "97"){
        image2.style.display = "none";
        image1.style.display = "block"; 
 }
});

document.addEventListener('keydown', function(e)
 {
     if(e.keyCode == "98"){
     image1.style.display = "none";
     image2.style.display = "block";
 }
});


var cube = document.querySelector('#cube');


let y=0;
let ypx;

function haut() {
    y = y + 10;
    ypx = y+"px";
    cube.style.bottom = ypx;
    console.log("dans fction haut(), y: " + y);
}

document.addEventListener("keydown", function(event){
    let carremax = window.getComputedStyle(cube).getPropertyValue("top");
    console.log('top carre'+carremax);
    if(event.keyCode == 38){
        if (parseInt(carremax)>0){
            haut();
        }
        else{
            y = 0;
            cube.style.bottom = y;
        }
    }
});