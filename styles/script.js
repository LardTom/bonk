const audio = new Audio('media/bonkmeme.mp3');
let count = 0;
let isbonk = false;
function playbonk(){
    

    if(!isbonk) {
        document.getElementById("before").classList.add("hidden");
        document.getElementById("after").classList.remove("hidden");
        audio.volume = 0.1;
        audio.play();
        count ++;
        document.getElementById("count").innerHTML = `Your Bonkcount: ${count}`;
        isbonk = true;
        setTimeout(() => {
            reset();
            isbonk = false;
        }, 500);
    }
}

function reset() {
    document.getElementById("before").classList.remove("hidden");
    document.getElementById("after").classList.add("hidden");
}