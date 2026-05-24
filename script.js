const cards = document.querySelectorAll(".card");

const popup = document.getElementById("popup");

const popupTitle = document.getElementById("popupTitle");

const popupMessage = document.getElementById("popupMessage");

const closeBtn = document.getElementById("closeBtn");

const musicBtn = document.getElementById("musicBtn");

const music = document.getElementById("bgMusic");

const finalBtn = document.getElementById("finalBtn");

/* =========================
   MUSIC PLAYLIST
========================= */

const songs = [

    "music2.mp3",
    "music1.mp3",
    "music3.mp3",
    "music4.mp3"

];

/* Start From First Song */
let songIndex = 0;

let isPlaying = false;

/* Load First Song */
music.src = songs[songIndex];

/* SAFE AUTO PLAY AFTER FIRST CLICK */
document.body.addEventListener("click", () => {

    if(!isPlaying){

        music.play();

        isPlaying = true;

        musicBtn.innerHTML = "💗";

    }

}, { once:true });

/* MUSIC BUTTON */
musicBtn.addEventListener("click", () => {

    if(isPlaying){

        music.pause();

        musicBtn.innerHTML = "🎵";

    } else {

        music.play();

        musicBtn.innerHTML = "💗";

    }

    isPlaying = !isPlaying;

});

/* AUTO NEXT SONG */
music.addEventListener("ended", () => {

    songIndex++;

    if(songIndex >= songs.length){

        songIndex = 0;

    }

    music.src = songs[songIndex];

    music.play();

});

/* =========================
   CARD POPUPS
========================= */

cards.forEach(card => {

    card.addEventListener("click", () => {

        const title =
        card.getAttribute("data-title");

        const message =
        card.getAttribute("data-message");

        popupTitle.innerText = title;

        popupMessage.innerText = message;

        popup.style.display = "flex";

    });

});

/* FINAL BUTTON */
finalBtn.addEventListener("click", () => {

    popupTitle.innerText =
    "One More Thing... 🤍";

    popupMessage.innerText =
    "No matter what name our relationship gets, life genuinely feels softer, calmer and warmer with you in it.";

    popup.style.display = "flex";

});

/* CLOSE BUTTON */
closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

/* OUTSIDE CLICK */
window.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.style.display = "none";

    }

});

/* ESC CLOSE */
window.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        popup.style.display = "none";

    }

});

/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer =
document.querySelector(".hearts");

function createHeart(){

    const heart =
    document.createElement("span");

    const symbols = [

        "❤",
        "✨",
        "🤍",
        "💖"

    ];

    heart.innerHTML =
    symbols[
        Math.floor(
            Math.random() * symbols.length
        )
    ];

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    Math.random() * 20 + 12 + "px";

    heart.style.animationDuration =
    Math.random() * 5 + 5 + "s";

    heart.style.opacity =
    Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },10000);

}

setInterval(createHeart, 300);

/* =========================
   FLOWER PETALS
========================= */

const petals = document.createElement("div");

petals.classList.add("petals");

document.body.appendChild(petals);

function createPetal(){

    const petal =
    document.createElement("span");

    const flowers = [

        "🌸",
        "🌺",
        "🌷",
        "🌼"

    ];

    petal.innerHTML =
    flowers[
        Math.floor(
            Math.random() * flowers.length
        )
    ];

    petal.style.left =
    Math.random() * 100 + "vw";

    petal.style.animationDuration =
    Math.random() * 5 + 7 + "s";

    petal.style.fontSize =
    Math.random() * 18 + 18 + "px";

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    },12000);

}

setInterval(createPetal, 700);

/* =========================
   PANDA
========================= */

const panda =
document.createElement("div");

panda.classList.add("panda");

document.body.appendChild(panda);

/* Panda Bubble */
const pandaBubble =
document.createElement("div");

pandaBubble.style.position = "absolute";

pandaBubble.style.bottom = "85px";

pandaBubble.style.left = "10px";

pandaBubble.style.background =
"rgba(255,255,255,0.9)";

pandaBubble.style.padding =
"10px 14px";

pandaBubble.style.borderRadius =
"15px";

pandaBubble.style.fontSize =
"14px";

pandaBubble.style.fontWeight =
"600";

pandaBubble.style.color =
"#5c3d2e";

pandaBubble.style.boxShadow =
"0 6px 20px rgba(0,0,0,0.1)";

pandaBubble.style.maxWidth =
"180px";

pandaBubble.style.lineHeight =
"1.5";

pandaBubble.innerText =
"hey idiot 🤍";

panda.appendChild(pandaBubble);

/* Panda Emoji */
const pandaEmoji =
document.createElement("div");

pandaEmoji.innerHTML = "🐼";

panda.appendChild(pandaEmoji);

/* Panda Messages */
const pandaMessages = [

    "drink water 🌸",

    "stop overthinking 😤",

    "you matter a lot 🤍",

    "missing you already 🐼",

    "smile a little okay? ✨",

    "annoy me whenever needed 😌",

    "you’re my favorite headache 💖",

    "take care idiot 🌷"

];

/* Change Panda Message */
setInterval(() => {

    pandaBubble.innerText =

    pandaMessages[
        Math.floor(
            Math.random() * pandaMessages.length
        )
    ];

},4000);

/* =========================
   CURSOR GLOW
========================= */

document.addEventListener("mousemove",(e)=>{

    const glow =
    document.createElement("div");

    glow.style.position = "fixed";

    glow.style.left =
    e.clientX + "px";

    glow.style.top =
    e.clientY + "px";

    glow.style.width = "10px";

    glow.style.height = "10px";

    glow.style.borderRadius = "50%";

    glow.style.background =
    "rgba(255,182,193,0.5)";

    glow.style.pointerEvents = "none";

    glow.style.zIndex = "9999";

    glow.style.filter = "blur(4px)";

    document.body.appendChild(glow);

    setTimeout(()=>{

        glow.remove();

    },300);

});
