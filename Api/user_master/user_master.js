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

    // Clear previous error messages
    document.getElementById('userNameError').classList.add('hidden');
    document.getElementById('emailError').classList.add('hidden');
    document.getElementById('mobileNumberError').classList.add('hidden');

    const userName = document.getElementById('userName').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobileNumber = document.getElementById('mobileNumber').value.trim();
    let isValid = true;

    // Validation for User Name
    if (userName === '') {
      document.getElementById('userNameError').classList.remove('hidden');
      isValid = false;
    }

    // Validation for Email
    if (email === '') {
      document.getElementById('emailError').classList.remove('hidden');
      isValid = false;
    }

    // Validation for Mobile Number
    const mobilePattern = /^\d{10}$/;
    if (mobileNumber === '' || !mobileNumber.match(mobilePattern)) {
      document.getElementById('mobileNumberError').classList.remove('hidden');
      isValid = false;
    }

    // If all validations pass, you can proceed with form submission
    if (isValid) {
      alert('Form submitted successfully!');
      // Handle form submission here, e.g., API call
    }
  }