const familyCards =
    document.querySelectorAll(
        ".family-voice-card"
    );

const letterViewer =
    document.getElementById(
        "familyLetterViewer"
    );

const letterClose =
    document.getElementById(
        "familyLetterClose"
    );

const letterRole =
    document.getElementById(
        "letterRole"
    );

const letterName =
    document.getElementById(
        "letterName"
    );

const letterMessage =
    document.getElementById(
        "letterMessage"
    );

const letterSignature =
    document.getElementById(
        "letterSignature"
    );


const familyData =
    window.FAMILY_MEMBERS || {};


familyCards.forEach((card) => {

    const button =
        card.querySelector(
            ".open-letter"
        );

    button.addEventListener(
        "click",
        () => {

            const id =
                button.dataset.member;

            const member =
                familyData[id];

            if (!member) {
                return;
            }

            letterRole.textContent =
                member.role;

            letterName.textContent =
                member.name;

            letterMessage.innerHTML =
                member.message;

            letterSignature.textContent =
                member.name;

            letterViewer.classList.add(
                "active"
            );

            letterViewer.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow =
                "hidden";

        }
    );

});


function closeFamilyLetter() {

    letterViewer.classList.remove(
        "active"
    );

    letterViewer.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


letterClose.addEventListener(
    "click",
    closeFamilyLetter
);


letterViewer.addEventListener(
    "click",
    (event) => {

        if (
            event.target === letterViewer
        ) {

            closeFamilyLetter();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeFamilyLetter();

        }

    }
);