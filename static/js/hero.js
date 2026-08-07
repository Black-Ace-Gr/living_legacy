const openingLines = [

    "Every life begins quietly.",

    "Some stories grow beyond what anyone imagined.",

    "This is one of those stories."

];


let currentLine = 0;


function showOpeningLine() {

    if (currentLine >= openingLines.length) {

        startTitle();

        return;

    }


    const opening =
        document.getElementById("opening");


    opening.textContent =
        openingLines[currentLine];


    opening.style.opacity = "1";


    setTimeout(() => {

        opening.style.opacity = "0";


        currentLine++;


        setTimeout(
            showOpeningLine,
            1200
        );


    }, 2400);

}



function startTitle() {

    const title =
        document.getElementById("title");


    const text = "Grace";


    let index = 0;


    function typeCharacter() {

        if (index >= text.length) {

            setTimeout(
                showSubtitle,
                900
            );

            return;

        }


        title.textContent +=
            text[index];


        index++;


        setTimeout(
            typeCharacter,
            220
        );

    }


    typeCharacter();

}



function showSubtitle() {

    const subtitle =
        document.getElementById("subtitle");


    subtitle.textContent =
        "A Life That Became Home";


    subtitle.style.opacity =
        "1";


    setTimeout(() => {

        const button =
            document.getElementById("journey");


        button.style.opacity =
            "1";

    }, 1200);

}



function beginJourney() {

    const hero =
        document.getElementById("hero");


    const prologue =
        document.getElementById("prologue");


    hero.classList.add(
        "hero-leaving"
    );


    prologue.classList.add(
        "prologue-active"
    );


    setTimeout(() => {

        prologue.scrollIntoView({
            behavior: "smooth"
        });

    }, 700);

}



window.addEventListener(
    "load",
    showOpeningLine
);


document
    .getElementById("journey")
    .addEventListener(
        "click",
        beginJourney
    );