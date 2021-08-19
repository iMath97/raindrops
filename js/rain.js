let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let width = 800;
let height = 600;
let raindrups = 100;
let velocity = [];
let randomposx = [];
let randomposy = [];

setInterval(gameloop, 50);

for(let j = 0; j<raindrups;j++){
    randomposx[j] = Math.floor(Math.random()* width);
}
for(let k = 0; k<raindrups;k++){
    randomposy[k] = Math.floor(Math.random()* height);
}
for(let l = 0; l<raindrups;l++){
    velocity[l] = Math.floor(Math.random()* 35)+15;
}

function gameloop(){
    draw(ctx);
}


function draw(ctx){
    ctx.clearRect(0, 0, width, height);
    
    ctx.fillStyle = "#000d21";
    ctx.fillRect(0, 0, width, height);

    for(let i = 0; i<raindrups;i++){
        ctx.fillStyle = "#bdc7ff";
        ctx.fillRect(randomposx[i], randomposy[i], 2, 15);
        randomposy[i] += velocity[i];
        if(randomposy[i] > 600){
            randomposy[i] = -20;
        }
    }
}
 
