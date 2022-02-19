// po najeti mysi text ztucni a po mouseout odtucni
function ztucneni () {
    let paragraph = document.querySelector("p")
    paragraph.classList.add("tucne");
};
function zestihleni () {
    let paragraph = document.querySelector("p")
    paragraph.classList.remove("tucne");
};

// V elipse spí lev - tlacitko na zcervenani textu
function zcervenani () {
    let paragraph = document.querySelector("p")
    paragraph.classList.toggle("cerveny");
};

//V elipse spí lev - tlačítko, po kterém se text zvětší o 1 px
function biggerOnClick() {
    let paragraph = document.querySelector("p")
    let computedSize = window.getComputedStyle(paragraph, null).getPropertyValue('font-size');
    
    currentSize = parseFloat(computedSize);
    paragraph.style.fontSize = (currentSize + 1) + 'px' ;
}

// Audio Player
let audioFile = document.getElementById('zvukovaStopa');

function startAudio() {
    audioFile.play();
    console.log("PLAY")
}

function pauseAudio() {
audioFile.pause();
console.log("PAUSE")
}

function volumeDown() {
audioFile.volume = 0;
}

function volumeNormal() {
    audioFile.volume = 0.5;
}

function volumeUp() {
    audioFile.volume = 1;
}

function replayAudio() {
audioFile.load();
audioFile.play();
console.log("SONG RELOADED");
}