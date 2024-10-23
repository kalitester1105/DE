function openAddSignModal() {
    document.getElementById('addSignModal').classList.remove('hidden');
}

function closeAddSignModal() {
    document.getElementById('addSignModal').classList.add('hidden');
}

function toggleSubMenu(event) {
    event.preventDefault(); // Prevent the default link behavior
    const submenu = event.currentTarget.nextElementSibling;
    submenu.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide the submenu
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
    document.getElementById('provinceNameError').classList.add('hidden');

    const provinceName = document.getElementById('provinceName').value.trim();
    let isValid = true;

    // Validation for Province Name
    if (provinceName === '') {
        document.getElementById('provinceNameError').classList.remove('hidden');
        isValid = false;
    }

    // If all validations pass, you can proceed with form submission
    if (isValid) {
        alert('Province added successfully!');
        // Handle form submission here, e.g., API call
        const provinceData = {
            provinceName,
        };

        console.log(provinceData); // For demonstration purposes, replace this with your API call
    }
}