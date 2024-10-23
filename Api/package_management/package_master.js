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
    document.getElementById('packageNameError').classList.add('hidden');
    document.getElementById('descriptionError').classList.add('hidden');
    document.getElementById('statusError').classList.add('hidden');
    document.getElementById('validityError').classList.add('hidden');
    document.getElementById('priceError').classList.add('hidden');
    document.getElementById('maxUserError').classList.add('hidden');
    document.getElementById('moduleMaxUserError').classList.add('hidden');

    // Get input values
    const packageName = document.getElementById('packageName').value.trim();
    const description = document.getElementById('description').value.trim();
    const status = document.getElementById('status').value.trim();
    const validity = document.getElementById('validity').value.trim();
    const price = document.getElementById('price').value.trim();
    const maxUser = document.getElementById('maxUser').value.trim();
    const moduleMaxUser = document.getElementById('moduleMaxUser').value.trim();
    
    let isValid = true;

    // Validation
    if (packageName === '') {
        document.getElementById('packageNameError').classList.remove('hidden');
        isValid = false;
    }

    if (description === '') {
        document.getElementById('descriptionError').classList.remove('hidden');
        isValid = false;
    }

    if (status === '') {
        document.getElementById('statusError').classList.remove('hidden');
        isValid = false;
    }

    if (validity === '') {
        document.getElementById('validityError').classList.remove('hidden');
        isValid = false;
    }

    if (price === '') {
        document.getElementById('priceError').classList.remove('hidden');
        isValid = false;
    }

    if (maxUser === '') {
        document.getElementById('maxUserError').classList.remove('hidden');
        isValid = false;
    }

    if (moduleMaxUser === '') {
        document.getElementById('moduleMaxUserError').classList.remove('hidden');
        isValid = false;
    }

    // If validation passes, proceed with form submission
    if (isValid) {
        alert('Package added successfully!');
        // Handle form submission here, e.g., API call
        const packageData = {
            packageName,
            description,
            status,
            validity,
            price,
            maxUser,
            moduleMaxUser
        };

        console.log(packageData); // For demonstration purposes, replace this with your API call
    }
}
