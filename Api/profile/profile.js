function openEditModal() {
    // Open the modal
    document.getElementById('editProfileModal').classList.remove('hidden');
  }

  function closeEditModal() {
    // Close the modal
    document.getElementById('editProfileModal').classList.add('hidden');
  }

  function updateProfile() {
    // Get the values from the input fields
    const name = document.getElementById('editName').value;
    const email = document.getElementById('editEmail').value;
    const dob = document.getElementById('editDOB').value;
    const state = document.getElementById('editState').value;
    const country = document.getElementById('editCountry').value;
    const height = document.getElementById('editHeight').value;
    const width = document.getElementById('editWidth').value;

    // Update the profile information
    // You can implement the logic to save this information (e.g., via an API call)

    console.log("Profile Updated:", { name, email, dob, state, country, height, width });

    // Close the modal after saving
    closeEditModal();
  }
  function toggleSubMenu(event) {
    event.preventDefault(); // Prevent the default link behavior
    const submenu = event.currentTarget.nextElementSibling;
    submenu.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide the submenu
  } 



  // add validation

  function validateForm() {
    let isValid = true;

    // Profile Image validation
    const profileImage = document.getElementById('profileImage').value;
    const profileImageError = document.getElementById('profileImageError');
    if (!profileImage) {
      profileImageError.textContent = 'Please upload a profile image.';
      isValid = false;
    } else {
      profileImageError.textContent = '';
    }

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (!name) {
      nameError.textContent = 'Please enter your name.';
      isValid = false;
    } else {
      nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }

    // Date of Birth validation
    const dob = document.getElementById('dob').value;
    const dobError = document.getElementById('dobError');
    if (!dob) {
      dobError.textContent = 'Please select your date of birth.';
      isValid = false;
    } else {
      dobError.textContent = '';
    }

    // Province validation
    const state = document.getElementById('state').value;
    const stateError = document.getElementById('stateError');
    if (!state) {
      stateError.textContent = 'Please select a province.';
      isValid = false;
    } else {
      stateError.textContent = '';
    }

    // Country validation
    const country = document.getElementById('country').value;
    const countryError = document.getElementById('countryError');
    if (!country) {
      countryError.textContent = 'Please select a country.';
      isValid = false;
    } else {
      countryError.textContent = '';
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  }

 // edit validation
 function addprofile() {
    let isValid = true;

    // Name validation
    const name = document.getElementById("editName").value;
    if (name === "") {
        document.getElementById("nameError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("nameError").classList.add("hidden");
    }

    // Email validation
    const email = document.getElementById("editEmail").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("emailError").classList.add("hidden");
    }

    // Date of Birth validation
    const dob = document.getElementById("editDOB").value;
    if (dob === "") {
        document.getElementById("dobError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("dobError").classList.add("hidden");
    }

    // State validation
    const state = document.getElementById("editState").value;
    if (state === "") {
        document.getElementById("stateError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("stateError").classList.add("hidden");
    }

    // Country validation
    const country = document.getElementById("editCountry").value;
    if (country === "") {
        document.getElementById("countryError").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("countryError").classList.add("hidden");
    }

    // If the form is valid, call the updateProfile function
    if (isValid) {
        updateProfile();
    }
}

function updateProfile() {
    // Logic to save/update the profile
    alert('Profile updated successfully!');
}

function closeEditModal() {
    document.getElementById('editProfileModal').classList.add('hidden');
}