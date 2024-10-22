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