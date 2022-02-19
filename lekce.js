// tady je místo pro náš program
console.log("ahoyyy");

let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");
nadpis.classList.remove("zluty"); // dali jsme to tam a zas odebrali
// jeste TOGGLE

 function zmenStyl(){
     nadpis.classList.toggle("zeleny");
 }
 // po najeti mysi text ztucni a po mouseout odtucni
function ztucneni () {
    let paragraph = document.querySelector(".parag")
    paragraph.classList.add("tucne");
};
function zestihleni () {
    let paragraph = document.querySelector(".parag")
    paragraph.classList.remove("tucne");
};

// V elipse spí lev - tlacitko na zcervenani textu
function zcervenani () {
    let paragraph = document.querySelector(".parag")
    paragraph.classList.toggle("cerveny");
};

//V elipse spí lev - tlačítko, po kterém se text zvětší o 1 px
function biggerOnClick() {
    let paragraph = document.querySelector(".parag")
    let computedSize = window.getComputedStyle(paragraph, null).getPropertyValue('font-size');
    
    currentSize = parseFloat(computedSize);
    paragraph.style.fontSize = (currentSize + 1) + 'px' ;
}

/*     let pocitadlo = 0;
    console.log("test " + pocitadlo);
    pocitadlo = pocitadlo + 1; */
 
    // při kontaktu s jedním čtverečkem reagují všechny čtverečky
function makeRed () {
let ctverecky = document.querySelectorAll('.ctverecek');

for (let i = 0; i < ctverecky.length; i++){
ctverecky[i].classList.toggle('aktivni');
}
};

function colorChange () {
let rosebud = document.querySelectorAll('.rosebud');
let i = 

/* for (let i = 0; i < rosebud.length; i++){
    rosebud[i].classList.toggle('aktivni');
} */

rosebud[1].classList.toggle('aktivni');
}

function stiskKlavesy(udalost) {
    console.log(udalost.key);
}

// AUDIO
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