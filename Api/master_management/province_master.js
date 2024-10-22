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