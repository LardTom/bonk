const audio = new Audio('../media/bonkmeme.mp3');
let count = 0;
function playbonk(){
    document.getElementById("before").classList.add("hidden");
    document.getElementById("after").classList.remove("hidden");
    audio.volume = 0.1;
    audio.play();
    count ++;
    document.getElementById("count").innerHTML = `Your Bonkcount: ${count}`;
}

function reset(){
    document.getElementById("before").classList.remove("hidden");
    document.getElementById("after").classList.add("hidden");
}