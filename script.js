document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector("h1").classList.add("fade-in");
        document.querySelector("p").classList.add("fade-in");
    }, 500);
});

document.getElementById("triggerAnimation").addEventListener("click", function() {
    let flower = document.createElement("div");
    flower.classList.add("flower");
    document.body.appendChild(flower);
});
