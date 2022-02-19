// tady je místo pro náš program
console.log("ahoyyy");

let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");
nadpis.classList.remove("zluty"); // dali jsme to tam a zas odebrali
// jeste TOGGLE

let ctverecek = document.querySelector("div.zluty");
 ctverecek.classList.add("ctverecek");

 let pocitadlo = 0;
 function priNajeti () {
     console.log("test " + pocitadlo);

     pocitadlo = pocitadlo + 1;
 };

 function zmenStyl(){
     nadpis.classList.toggle("zeleny");
 }

function ztucneni () {
    let paragraph = document.querySelector("p")
    paragraph.classList.add("tucne");
};
function zcervenani () {
    let paragraph = document.querySelector("p")
    paragraph.classList.toggle("cerveny");
};
function zestihleni () {
    let paragraph = document.querySelector("p")
    paragraph.classList.remove("tucne");
};
function biggerOnClick() {
    let paragraph = document.querySelector("p")
    let computedSize = window.getComputedStyle(paragraph, null).getPropertyValue('font-size');
    
    currentSize = parseFloat(computedSize);
    paragraph.style.fontSize = (currentSize + 1) + 'px' ;
};