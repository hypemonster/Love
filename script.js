// Data específica: 04/02/2026
const startDate = new Date(2026, 1, 4, 0, 0, 0);
let interval;

function startSite() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";

    updateCounter();
    interval = setInterval(updateCounter, 1000);
    startCarousel();
}

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) {
        document.getElementById("counter").innerText = "A data ainda não chegou ❤️";
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("counter").innerText =
        String(days).padStart(2, '0') + " dias " +
        String(hours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');
}

function startCarousel() {
    const images = document.querySelectorAll(".carousel img");
    let index = 0;

    setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }, 3000);
}