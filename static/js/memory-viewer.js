const viewer =
    document.getElementById("memoryViewer");

const viewerImage =
    document.getElementById("memoryViewerImage");

const viewerYear =
    document.getElementById("memoryViewerYear");

const viewerTitle =
    document.getElementById("memoryViewerTitle");

const viewerText =
    document.getElementById("memoryViewerText");

const closeButton =
    document.getElementById("memoryViewerClose");


const memories =
    document.querySelectorAll(".memory-photo");


memories.forEach((memory) => {

    memory.addEventListener("click", () => {

        const image =
            memory.querySelector("img");

        const year =
            memory.querySelector(
                ".memory-caption span"
            );

        const title =
            memory.querySelector(
                ".memory-caption h4"
            );

        const text =
            memory.querySelector(
                ".memory-caption p"
            );


        viewerImage.src =
            image.src;

        viewerImage.alt =
            image.alt;

        viewerYear.textContent =
            year
                ? year.textContent
                : "";

        viewerTitle.textContent =
            title.textContent;

        viewerText.textContent =
            text.textContent;


        viewer.classList.add("active");

        viewer.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    });

});


function closeMemory() {

    viewer.classList.remove("active");

    viewer.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


closeButton.addEventListener(
    "click",
    closeMemory
);


viewer.addEventListener(
    "click",
    (event) => {

        if (
            event.target === viewer
        ) {

            closeMemory();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeMemory();

        }

    }
);