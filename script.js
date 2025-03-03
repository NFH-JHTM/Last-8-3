document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector("h1").classList.add("fade-in");
        document.querySelector("p").classList.add("fade-in");

        setTimeout(() => {
            document.getElementById("passwordPanel").classList.add("show");
        }, 3000);
    }, 500);
});

// 🎀 Floating Lovely Hearts Animation 🎀
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
    let x = Math.random() * canvas.width;
    let y = canvas.height + 10;
    let size = Math.random() * 10 + 5;
    let speed = Math.random() * 2 + 0.5;
    let opacity = Math.random() * 0.5 + 0.5;
    let color = `rgba(255, ${Math.floor(Math.random() * 150 + 100)}, ${Math.floor(Math.random() * 200 + 100)}, ${opacity})`;

    hearts.push({ x, y, size, speed, color });
}

function animateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < hearts.length; i++) {
        let heart = hearts[i];
        heart.y -= heart.speed;
        heart.x += Math.sin(heart.y / 50) * 1.5;
        ctx.globalAlpha = 1;
        ctx.fillStyle = heart.color;
        ctx.beginPath();
        ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
        ctx.fill();
    }

    hearts = hearts.filter(h => h.y > -10);
    requestAnimationFrame(animateHearts);
}

setInterval(createHeart, 200);
animateHearts();

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
