const textElement = document.getElementById('text');
const prefixElement = document.getElementById('prefix');
const cursor = document.getElementById('cursor');
const texts = ['I AM A CODER!', 'I AM A WEB DEVELOPER!', 'I AM AN ANCHOR', 'I AM AN EDITOR!'];
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
      setTimeout(type, 2000); // Pause after complete typing
    } else {
      setTimeout(type, 100); // Typing speed
    }
  } else {
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
    setTimeout(type, 50); // Backspace speed
  }
}

type();
