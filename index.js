var number=document.querySelectorAll(".drum").length;
for(i=0;i<number;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var iner=this.innerHTML;
    eventhappend(iner);
    eventanimation(iner);
}
);
}
document.addEventListener("keydown",function(e){
    eventhappend(e.key);
    eventanimation(e.key);
});

function eventhappend(key){
    switch (key) {
        case "w":
            var tom1 =new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 =new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 =new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 =new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var kick =new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            var snare =new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var crash =new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        default:
            break;
}}

function eventanimation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){
    document.querySelector("."+currentkey).classList.remove("pressed");
    },100);
}