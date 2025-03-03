document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector("h1").classList.add("fade-in");
        document.querySelector("p").classList.add("fade-in");

        // Hiện Password Panel sau 3s
        setTimeout(() => {
            document.getElementById("passwordPanel").classList.add("show");
        }, 3000);
    }, 500);
});

// Kiểm tra mật khẩu và chuyển hướng
document.getElementById("submitPassword").addEventListener("click", function() {
    const correctPassword = "123456";  // 🔑 Đổi password tại đây
    const inputPassword = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");

    if (inputPassword === correctPassword) {
        window.location.href = "https://example.com"; // 🔗 Đổi link tại đây
    } else {
        errorMessage.classList.add("show");
        document.getElementById("passwordPanel").classList.add("shake");

        // Ẩn lỗi sau 2 giây
        setTimeout(() => {
            errorMessage.classList.remove("show");
        }, 2000);

        // Dừng hiệu ứng rung sau 0.3s
        setTimeout(() => {
            document.getElementById("passwordPanel").classList.remove("shake");
        }, 300);
    }
});

// Floating Hearts Background Animation
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
    let x = Math.random() * canvas.width;
    let y = canvas.height + 10;
    let size = Math.random() * 8 + 2;
    let speed = Math.random() * 3 + 1;
    let opacity = Math.random() * 0.5 + 0.5;

    hearts.push({ x, y, size, speed, opacity });
}

function animateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < hearts.length; i++) {
        let heart = hearts[i];
        heart.y -= heart.speed;
        ctx.globalAlpha = heart.opacity;
        ctx.fillStyle = "rgba(255, 100, 150, 1)";
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
