console.log("🔥 FAMILY VOICES JS LOADED");
document.addEventListener("DOMContentLoaded", () => {

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


    /*
     * Make sure the letter viewer actually exists.
     */

    if (!letterViewer) {
        console.error(
            "Family letter viewer was not found."
        );

        return;
    }


    /*
     * Open a family member's letter.
     */

    familyCards.forEach((card) => {

        const button =
            card.querySelector(
                ".open-letter"
            );


        if (!button) {
            return;
        }


        button.addEventListener(
            "click",
            () => {

                const id =
                    button.dataset.member;


                const member =
                    familyData[id];


                console.log(
                    "Opening family member:",
                    id
                );


                if (!member) {

                    console.error(
                        "No family data found for:",
                        id
                    );

                    console.log(
                        "Available members:",
                        familyData
                    );

                    return;
                }


                letterRole.textContent =
                    member.role || "";


                letterName.textContent =
                    member.name || "";


                letterMessage.innerHTML =
                    member.message || "";


                letterSignature.textContent =
                    member.name || "";


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


    /*
     * Close the letter.
     */

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


    /*
     * Close button.
     */

    if (letterClose) {

        letterClose.addEventListener(
            "click",
            closeFamilyLetter
        );

    }


    /*
     * Close when clicking outside
     * the actual letter.
     */

    letterViewer.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                letterViewer
            ) {

                closeFamilyLetter();

            }

        }
    );


    /*
     * Close with Escape.
     */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                closeFamilyLetter();

            }

        }
    );

});