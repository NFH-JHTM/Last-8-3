document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector("h1").classList.add("fade-in");
        document.querySelector("p").classList.add("fade-in");

        setTimeout(() => {
            document.getElementById("passwordPanel").classList.add("show");
        }, 3000);
    }, 500);
});


document.getElementById("submitPassword").addEventListener("click", function () {
    const correctPassword = "12a8"; 
    const inputPassword = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const passwordPanel = document.getElementById("passwordPanel");

    if (inputPassword === correctPassword) {
        window.location.href = "https://nfh-jhtm.github.io/Main/"; 
    } else {
        errorMessage.classList.add("show");
        passwordPanel.classList.add("shake");

        
        setTimeout(() => {
            errorMessage.classList.remove("show");
        }, 2000);

        
        setTimeout(() => {
            passwordPanel.classList.remove("shake");
        }, 300);
    }
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

const particlesCanvas = document.createElement("canvas");
document.body.appendChild(particlesCanvas);
const ctxParticles = particlesCanvas.getContext("2d");

particlesCanvas.width = window.innerWidth;
particlesCanvas.height = window.innerHeight;

let particles = [];

function createParticle() {
    let x = Math.random() * particlesCanvas.width;
    let y = Math.random() * particlesCanvas.height;
    let size = Math.random() * 40 + 10;
    let speed = Math.random() * 1.5 + 0.2;
    let opacity = Math.random() * 0.5 + 0.3;

    particles.push({ x, y, size, speed, opacity });
}

function drawParticles() {
    ctxParticles.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
    
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        let img = new Image();
        img.src = "images/particles.png";

        ctxParticles.globalAlpha = p.opacity;
        ctxParticles.drawImage(img, p.x, p.y, p.size, p.size);
        p.y -= p.speed;

        if (p.y < -p.size) {
            p.y = particlesCanvas.height;
            p.x = Math.random() * particlesCanvas.width;
        }
    }

    requestAnimationFrame(drawParticles);
}

setInterval(createParticle, 300);
drawParticles();

window.addEventListener("resize", () => {
    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;
});

