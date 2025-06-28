function showSidebar() {
  const Sidebar = document.querySelector('.sidebar')
  Sidebar.style.display = 'flex'
}

function closeSidebar() {
  const Sidebar = document.querySelector('.sidebar')
  Sidebar.style.display = 'none'
}


const menuItem = document.querySelectorAll('.navbar .item');
menuItem.forEach(item => {
  item.addEventListener('click', () => {
    menuItem.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
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

  


