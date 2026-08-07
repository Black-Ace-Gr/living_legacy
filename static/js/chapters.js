const revealElements =
    document.querySelectorAll("[data-reveal]");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting &&
                    entry.intersectionRatio > 0.15
                ) {

                    entry.target.classList.add(
                        "revealed"
                    );

                }

            });

        },

        {
            threshold: [0.15]
        }

    );


revealElements.forEach((element) => {

    observer.observe(element);

});