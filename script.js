function showSidebar() {
  const Sidebar = document.querySelector('.sidebar')
  Sidebar.style.display = 'flex'
}

function closeSidebar() {
  const Sidebar = document.querySelector('.sidebar')
  Sidebar.style.display = 'none'
}


const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navbar .item, .sidebar .item");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach(item => {
    const link = item.querySelector("a");
    item.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      item.classList.add("active");
    }
  });
});



  function closeSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
  }

  // Automatically close sidebar on nav item click
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      closeSidebar();
    });
  });

  document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector(".sidebar").style.display = "none";
    });
  });

  


