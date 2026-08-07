console.log(
    "Grace — A Life That Became Home"
);

console.log(
    "The story engine is alive."
);
const openingScreen =
    document.getElementById("openingScreen");

const beginStory =
    document.getElementById("beginStory");


beginStory.addEventListener(
    "click",
    () => {

        openingScreen.classList.add(
            "hidden"
        );

        document.body.classList.add(
            "story-started"
        );

        if (
            typeof startMusic ===
            "function"
        ) {
            startMusic();
        }

    }
);
const music =
    document.getElementById(
        "storyMusic"
    );

const musicToggle =
    document.getElementById(
        "musicToggle"
    );


let musicStarted = false;


function startMusic() {

    if (musicStarted) {
        return;
    }

    music.volume = 0.25;

    music.play()
        .then(() => {

            musicStarted = true;

        })
        .catch(() => {

            console.log(
                "Music requires user interaction."
            );

        });

}


musicToggle.addEventListener(
    "click",
    () => {

        if (music.paused) {

            music.play();

            musicToggle.textContent =
                "♪";

        } else {

            music.pause();

            musicToggle.textContent =
                "×";

        }

    }
);