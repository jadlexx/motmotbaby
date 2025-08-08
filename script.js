let isOpen = false;
const envelope = document.getElementById('envelope');
const music = document.getElementById('bg-music');

function toggleEnvelope() {
    isOpen = !isOpen;

    if (isOpen) {
        envelope.classList.add('open');
        music.play();
    } else {
        envelope.classList.remove('open');
        music.pause();
    }
}
