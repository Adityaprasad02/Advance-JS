const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

//generate random color

let value = "0123456789ABCDEFG";
var id = "#";
const generate = () => {
    for(let i = 0;i<6;i++){
   id += value[Math.floor((Math.random()*16))];
    }
    document.body.style.backgroundColor = `${id}`;
id="#";
} 
let o;
//Click Start To change Color
start.addEventListener('click', function(){
   o = setInterval(generate,1000);
}
);

//Click Stop to stop event;
stop.addEventListener('click',function(){
    clearTimeout(o);
})



