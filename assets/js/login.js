function validateLogin(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    document.getElementById('emailError').classList.add('hidden');
    document.getElementById('passwordError').classList.add('hidden');

    // Get input values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    // Validate Email
    if (!validateEmail(email)) {
      document.getElementById('emailError').classList.remove('hidden');
      isValid = false;
    }

    // Validate Password
    if (password === '') {
      document.getElementById('passwordError').classList.remove('hidden');
      isValid = false;
    }

    // If validation passes, you can handle the login logic here
    if (isValid) {
      alert('Login successful!'); // Replace this with your actual login logic
      console.log({ email, password }); // For demonstration purposes, replace this with your login API call
    }
  }

  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return re.test(email);
  }