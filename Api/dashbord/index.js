function toggleSubMenu(event) {
    event.preventDefault();
    const submenu = event.currentTarget.nextElementSibling;
    submenu.classList.toggle('hidden'); // Toggle the visibility of the submenu
  }
  const currentLocation = window.location.pathname;
  const menuItems = document.querySelectorAll('aside ul li a');

  menuItems.forEach(item => {
    if (item.href.includes(currentLocation)) {
      item.parentElement.classList.add('active');
    }
  });