const emailButton = document.getElementById("copy-email");
const message = document.getElementById("copied-message");

emailButton.addEventListener("click", (e) => {
  e.preventDefault();

  navigator.clipboard.writeText("carolineruyi07@gmail.com");

  message.classList.add("show");

  setTimeout(() => {
    message.classList.remove("show");
  }, 1500);
});

const bannerBg = document.getElementById('bannerBg');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  bannerBg.style.transform = `translateY(${scrolled * 0.4}px)`;
});
