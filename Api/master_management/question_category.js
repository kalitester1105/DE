function submitAddSign(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    document.getElementById('categoryNameError').classList.add('hidden');

    // Get input values
    const question = document.getElementById('categoryName').value.trim();
    let isValid = true;

    // Validation
    if (question === '') {
        document.getElementById('categoryNameError').classList.remove('hidden');
        isValid = false;
    }

    // If the validation passes, proceed with form submission
    if (isValid) {
        alert('Question added successfully!');
        // Handle form submission here, e.g., API call
        const questionData = { question };

        console.log(questionData); // For demonstration purposes, replace this with your API call
    }
}