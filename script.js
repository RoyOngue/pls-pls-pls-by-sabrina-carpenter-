/* ==========================================
   OPEN BUTTON + SMOOTH SCROLL
========================================== */

const startButton = document.getElementById("start");
const introSection = document.getElementById("intro");

startButton.addEventListener("click", () => {

    introSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const hiddenElements = document.querySelectorAll(".hidden");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

hiddenElements.forEach(element => {

    revealObserver.observe(element);

});


/* ==========================================
   SHOW HERO IMMEDIATELY
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ==========================================
   SMOOTH BUTTON PRESS
========================================== */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("mousedown", () => {

        button.style.transform = "scale(.97)";

    });

    button.addEventListener("mouseup", () => {

        button.style.transform = "";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* ==========================================
   PREVENT IMAGE DRAG
========================================== */

document.querySelectorAll("img").forEach(image => {

    image.setAttribute("draggable", "false");

});


/* ==========================================
   CONSOLE MESSAGE 😆
========================================== */

console.log(
`Hi AJ 👀

If you're reading this...

yes...

I spent way too much time making this.

— Tine ♡`
);
/* ==========================================
   CURSOR GLOW
========================================== */

const cursorGlow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});


/* ==========================================
   FALLING PETALS
========================================== */

const petalsContainer = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.style.position = "absolute";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-40px";

    const size = Math.random() * 10 + 10;

    petal.style.width = size + "px";
    petal.style.height = size * 1.4 + "px";

    petal.style.background = "rgba(239,179,201,.65)";
    petal.style.borderRadius = "60% 40% 70% 30%";
    petal.style.opacity = Math.random() * .5 + .4;

    petal.style.transform = `rotate(${Math.random() * 360}deg)`;

    petalsContainer.appendChild(petal);

    let posY = -40;
    let posX = parseFloat(petal.style.left);

    const speed = Math.random() * 1.5 + 1;
    const drift = (Math.random() - .5) * 1.2;
    let rotation = Math.random() * 360;

    function animate() {

        posY += speed;
        posX += drift;
        rotation += 1;

        petal.style.top = posY + "px";
        petal.style.left = posX + "px";
        petal.style.transform = `rotate(${rotation}deg)`;

        if (posY < window.innerHeight + 60) {

            requestAnimationFrame(animate);

        } else {

            petal.remove();

        }

    }

    requestAnimationFrame(animate);

}

setInterval(createPetal, 450);


/* ==========================================
   MOBILE SUPPORT
========================================== */

document.addEventListener("touchmove", (e) => {

    if (!cursorGlow) return;

    const touch = e.touches[0];

    cursorGlow.style.left = touch.clientX + "px";
    cursorGlow.style.top = touch.clientY + "px";

});


/* ==========================================
   WINDOW RESIZE
========================================== */

window.addEventListener("resize", () => {

    document.querySelectorAll("#petals div").forEach(petal => {

        if (petal.offsetTop > window.innerHeight + 100) {

            petal.remove();

        }

    });

});
/* ==========================================
   YES BUTTONS
========================================== */

const yesButtons = document.querySelectorAll("#yes-btn, #yes-again");
const choiceResult = document.getElementById("choice-result");

const responses = [

"i knew you'd press yes. 😌💖",

"good choice. there was never a wrong answer anyway. 🌸",

"hehe... i was hoping you'd do that. 🤍",

"congratulations. you have successfully made me smile. 🥹",

"that button was suspiciously easy to press... 👀",

"you've unlocked absolutely nothing... except my happiness. ✨",

"nice. i was rooting for this outcome. 💗",

"you passed the test. (there wasn't actually a test.) 😂"

];

yesButtons.forEach(button => {

    button.addEventListener("click", () => {

        const random =
            responses[Math.floor(Math.random() * responses.length)];

        choiceResult.textContent = random;

        createHeartBurst(button);

    });

});


/* ==========================================
   HEART BURST
========================================== */

function createHeartBurst(button){

    const rect = button.getBoundingClientRect();

    for(let i = 0; i < 14; i++){

        const heart = document.createElement("div");

        heart.textContent = "💖";

        heart.style.position = "fixed";
        heart.style.left = rect.left + rect.width / 2 + "px";
        heart.style.top = rect.top + rect.height / 2 + "px";

        heart.style.pointerEvents = "none";
        heart.style.fontSize = (16 + Math.random() * 12) + "px";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = 70 + Math.random() * 50;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.animate([
            {
                transform: "translate(0,0) scale(1)",
                opacity: 1
            },
            {
                transform: `translate(${x}px, ${y}px) scale(.2)`,
                opacity: 0
            }
        ],{
            duration:900,
            easing:"ease-out"
        });

        setTimeout(() => {

            heart.remove();

        },900);

    }

}


/* ==========================================
   HAPPY BIRTHDAY EASTER EGG
========================================== */

let typed = "";

document.addEventListener("keydown",(e)=>{

    typed += e.key.toLowerCase();

    if(typed.length > 20){

        typed = typed.slice(-20);

    }

    if(typed.includes("birthday")){

        alert("🎂 Happy Birthday from Tine! 🎉");

        typed = "";

    }

});


/* ==========================================
   END MESSAGE
========================================== */

window.addEventListener("scroll", () => {

    const footer = document.querySelector(".footer");

    const footerTop = footer.getBoundingClientRect().top;

    if(footerTop < window.innerHeight - 120){

        console.log("Thanks for reading until the end. 🤍");

    }

});