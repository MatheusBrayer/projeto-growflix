export function openVideo(link) {
    const iframe = document.getElementById("videoFrame");

    const videoId = new URL(link).searchParams.get("v");

    iframe.src = `https://www.youtube.com/embed/${videoId}`;

    const modal = new bootstrap.Modal(document.getElementById("videoModal"), {
        backdrop: 'static',
        keyboard: false
    });

    modal.show();
}

const modalEl = document.getElementById("videoModal");
const iframe = document.getElementById("videoFrame");

modalEl.addEventListener("hidden.bs.modal", () => {
    iframe.src = "";
});