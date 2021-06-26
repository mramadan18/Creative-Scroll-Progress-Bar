window.onmousemove = e => {
  let progressBox = document.querySelector(".progress-box ");
  progressBox.style.left = `${e.clientX}px`;
  progressBox.style.top = `${e.clientY}px`;
};

window.onscroll = () => {
  let progress = document.querySelector(".progress");
  let progressNumber = document.body.scrollHeight - window.innerHeight;
  let span = document.querySelector("span");
  progress.style.width = `${(window.pageYOffset / progressNumber) * 100}%`;
  span.innerHTML = `${Math.round((window.pageYOffset / progressNumber) * 100)}%`
};
