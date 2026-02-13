function getLoaderEl() {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    return loader;
}

function showInitialLoader() {
    const mainEl = document.querySelector("main");
    if (mainEl) mainEl.style.display = "none";

    const loader = getLoaderEl();
    document.body.appendChild(loader);
    loader.style.display = "block";

    setTimeout(() => {
        loader.remove();

        setTimeout(() => {
            if (mainEl) {
                mainEl.style.display = "block";

                mainEl.classList.add("fade-in");
            }
        }, 500);
    }, 3000);
}

function showCongratulation() {
    const textEl = document.createElement("span");
    textEl.classList.add("heart-app__text");
    textEl.textContent = "Happy Valentine`s Day!";

    const heartAppEl = document.querySelector(".heart-app");
    const heartEl = document.querySelector(".heart-app__icon");

    heartEl.addEventListener("click", () => {
        const confettiColors = ["#ff9e7a", "#ffb38b", "#ffcc99", "#ffd6a5", "#ffe0b3"];
        const positions = [0.1, 0.3, 0.5, 0.7, 0.9];

        if (heartEl.classList.contains("heart-app__icon--none")) {
            heartEl.classList.remove("heart-app__icon--none");
            document.querySelector(".heart-app__text").remove();
        } else {
            heartEl.classList.add("heart-app__icon--none");
            if (!document.querySelector(".heart-app__wrapper")) {
                positions.forEach(x => {
                    confetti({
                        particleCount: 200,
                        spread: 90,
                        origin: { x, y: 0 },
                        colors: confettiColors
                    });
                    confetti({
                        particleCount: 50,
                        spread: 90,
                        origin: { x, y: 0 },
                        colors: ['#fff8f0', '#ffffff']
                    });
                });
                
                const containerEl = document.createElement("div");
                containerEl.classList.add("heart-app__wrapper");
                heartAppEl.appendChild(containerEl);

                containerEl.append(heartEl, textEl);
            } else {
                const containerEl = document.querySelector(".heart-app__wrapper");
                containerEl.append(heartEl, textEl);
            }
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    showInitialLoader();
    showCongratulation();
});