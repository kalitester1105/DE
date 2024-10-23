function openAddSignModal() {
    document.getElementById('addSignModal').classList.remove('hidden');
  }

  function closeAddSignModal() {
    document.getElementById('addSignModal').classList.add('hidden');
  }
  function toggleSubMenu(event) {
    event.preventDefault();
    const submenu = event.currentTarget.nextElementSibling;
    submenu.classList.toggle('hidden'); // Toggle the visibility of the submenu
  }
  function setActive(event) {
    // Deactivate User Management
    const userManagement = document.getElementById('user-management');
    userManagement.classList.remove('active');

    // Activate User Master
    const userMaster = document.getElementById('user-master');
    userMaster.classList.add('active');
  }

  const currentLocation = window.location.pathname;
  const menuItems = document.querySelectorAll('aside ul li a');

  menuItems.forEach(item => {
    if (item.href.includes(currentLocation)) {
      item.parentElement.classList.add('active');
    }
  });
function submitAddSign(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error message
    document.getElementById('categoryNameError').classList.add('hidden');

    const categoryName = document.getElementById('categoryName').value.trim();
    let isValid = true;

    // Validation for Category Name
    if (categoryName === '') {
        document.getElementById('categoryNameError').classList.remove('hidden');
        isValid = false;
    }

    // If all validations pass, you can proceed with form submission
    if (isValid) {
        alert('Category added successfully!');
        // Handle form submission here, e.g., API call
        // For example, you can create a data object and send it to your API
        const categoryData = {
            categoryName,
        };

        console.log(categoryData); // For demonstration purposes, you can replace this with your API call
    }
}