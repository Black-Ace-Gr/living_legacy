const openingLines = [

"Every life begins quietly.",

"Some stories grow beyond what anyone imagined.",

"This is one of those stories."

];


let line = 0;


function showOpening(){

if(line < openingLines.length){

const text =
document.getElementById("opening");


text.innerHTML =
openingLines[line];


text.style.opacity = 1;


setTimeout(()=>{

text.style.opacity = 0;

line++;

setTimeout(showOpening,1500);


},2500);


}

else{

startTitle();

}

}



function startTitle(){

const title =
"Grace";


let i = 0;


function type(){

if(i < title.length){

document
.getElementById("title")
.innerHTML += title[i];


i++;

setTimeout(type,250);


}

else{

setTimeout(showSubtitle,1000);

}

}


type();

}



function showSubtitle(){

const subtitle =
document.getElementById("subtitle");


subtitle.innerHTML =
"A Life That Became Home";


subtitle.style.opacity = 1;


setTimeout(()=>{

document
.getElementById("journey")
.style.opacity = 1;


},1500);

}



window.onload = showOpening;


document
.getElementById("journey")
.addEventListener("click",()=>{


document
.querySelector(".hero")
.style.transform =
"translateY(-100vh)";


document
.querySelector(".prologue")
.style.opacity=1;


});