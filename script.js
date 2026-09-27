
const openButton = document.getElementById("openButton");

const welcome = document.getElementById("welcome");

const birthday = document.getElementById("birthday");

const wishButton = document.getElementById("wishButton");

const wish = document.getElementById("wish");


/* OPEN SURPRISE */

openButton.addEventListener("click", function () {

    welcome.style.display = "none";

    birthday.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createHearts(40);

});


/* MAKE A WISH */

wishButton.addEventListener("click", function () {

    wish.classList.remove("hidden");

    wishButton.innerHTML = "Wish Made ✨";

    wishButton.disabled = true;

    createHearts(70);

});


/* CREATE FLOATING HEARTS */

function createHearts(number) {

    for (let i = 0; i < number; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "heart";

            const emojis = [
                "❤️",
                "💕",
                "💗",
                "💖",
                "✨",
                "🌸"
            ];

            heart.innerHTML =
                emojis[Math.floor(Math.random() * emojis.length)];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (15 + Math.random() * 20) + "px";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            document.body.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 6000);

        }, i * 70);

    }

}

