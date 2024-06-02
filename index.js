const textElement = document.getElementById('text');
const cursor = document.getElementById('cursor');
const texts = ['I am a web developer', 'I am an anchor'];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[index];
  if (!isDeleting) {
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, 100);
    }
  } else {
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
    setTimeout(type, 100);
  }
}

type();
