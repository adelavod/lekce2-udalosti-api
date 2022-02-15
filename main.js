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