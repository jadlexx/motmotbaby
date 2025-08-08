let isOpen = false;
const envelope = document.getElementById('envelope');
const music = document.getElementById('bg-music');

function toggleEnvelope() {
    isOpen = !isOpen;

    if (isOpen) {
        envelope.classList.add('open');
        music.play(); // 🔊 Play music when envelope opens
    } else {
        envelope.classList.remove('open');
        // Don't pause or reset music — it continues playing
    }
}
