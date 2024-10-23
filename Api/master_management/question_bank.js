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

    // Clear previous error messages
    document.getElementById('questionError').classList.add('hidden');
    document.getElementById('questionTypeError').classList.add('hidden');
    document.getElementById('examTypeError').classList.add('hidden');
    document.getElementById('correctAnswerError').classList.add('hidden');

    // Get input values
    const question = document.getElementById('question').value.trim();
    const questionType = document.getElementById('questionType').value;
    const examType = document.getElementById('examType').value;
    const correctAnswer = document.getElementById('correctAnswer').value;
    let isValid = true;

    // Validation
    if (question === '') {
        document.getElementById('questionError').classList.remove('hidden');
        isValid = false;
    }

    if (questionType === '') {
        document.getElementById('questionTypeError').classList.remove('hidden');
        isValid = false;
    }

    if (examType === '') {
        document.getElementById('examTypeError').classList.remove('hidden');
        isValid = false;
    }

    if (correctAnswer === '') {
        document.getElementById('correctAnswerError').classList.remove('hidden');
        isValid = false;
    }

    // If the validation passes, proceed with form submission
    if (isValid) {
        alert('Question added successfully!');
        // Handle form submission here, e.g., API call
        const questionData = {
            question,
            questionType,
            examType,
            correctAnswer,
            options: {
                A: document.getElementById('optionA').value,
                B: document.getElementById('optionB').value,
                C: document.getElementById('optionC').value,
                D: document.getElementById('optionD').value,
            },
            // Handle images if necessary
            images: {
                A: document.getElementById('optionAImage').files[0],
                B: document.getElementById('optionBImage').files[0],
                C: document.getElementById('optionCImage').files[0],
                D: document.getElementById('optionDImage').files[0],
            }
        };

        console.log(questionData); // For demonstration purposes, replace this with your API call
    }
}
