// Skills Hover Animation
document.querySelectorAll('.skill').forEach(skill => {
  const progress = skill.querySelector('.progress');
  const bar = progress.querySelector('div');
  const percent = bar.querySelector('span');
  const width = skill.getAttribute('data-skill');

  skill.addEventListener('mouseenter', () => {
    progress.style.visibility = 'visible';
    bar.style.width = width;
    percent.textContent = width;
  });

  skill.addEventListener('mouseleave', () => {
    bar.style.width = '0%';
    progress.style.visibility = 'hidden';
    percent.textContent = '';
  });
});

// Typed.js Animation
var typed = new Typed("#typed", {
  strings: ["Fullstack Web Developer", "Backend Developer", "UI/UX Designer"],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 3000,
  showCursor: false,
  loop: true
});

// Theme Toggle
function theme() {
  const darkbtn = document.getElementById('darkBtn');
  const lightbtn = document.getElementById('lightBtn');
  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {
    darkbtn.style.display = 'block';
    lightbtn.style.display = 'none';
  } else {
    darkbtn.style.display = 'none';
    lightbtn.style.display = 'block';
  }
}

// Menu Active Class
const menuItem = document.querySelectorAll('.nav .item');

menuItem.forEach(item => {
  item.addEventListener('click', () => {// prevent default scroll if needed
    menuItem.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});



