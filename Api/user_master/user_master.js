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