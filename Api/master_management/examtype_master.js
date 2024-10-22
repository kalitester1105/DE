function submitAddSign(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    const errorElements = [
        'examCatDescriptionError',
        'totalQuestionsError',
        'totalTimeError',
        'perQuestionTimeError',
        'examTypeError',
        'reqScoreError'
    ];
    errorElements.forEach(id => document.getElementById(id).classList.add('hidden'));

    // Get input values
    const examCatDescription = document.getElementById('examCatDescription').value.trim();
    const totalQuestions = document.getElementById('totalQuestions').value.trim();
    const totalTime = document.getElementById('totalTime').value.trim();
    const perQuestionTime = document.getElementById('perQuestionTime').value.trim();
    const examType = document.getElementById('examType').value;
    const reqScore = document.getElementById('reqScore').value.trim();

    let isValid = true;

    // Validation
    if (examCatDescription === '') {
        document.getElementById('examCatDescriptionError').classList.remove('hidden');
        isValid = false;
    }

    if (totalQuestions === '') {
        document.getElementById('totalQuestionsError').classList.remove('hidden');
        isValid = false;
    }

    if (totalTime === '') {
        document.getElementById('totalTimeError').classList.remove('hidden');
        isValid = false;
    }

    if (perQuestionTime === '') {
        document.getElementById('perQuestionTimeError').classList.remove('hidden');
        isValid = false;
    }

    if (examType === '') {
        document.getElementById('examTypeError').classList.remove('hidden');
        isValid = false;
    }

    if (reqScore === '') {
        document.getElementById('reqScoreError').classList.remove('hidden');
        isValid = false;
    }

    // If all validations pass, you can proceed with form submission
    if (isValid) {
        alert('Exam Type added successfully!');
        // Handle form submission here, e.g., API call
        const examData = {
            examCatDescription,
            totalQuestions,
            totalTime,
            perQuestionTime,
            examType,
            reqScore,
        };

        console.log(examData); // For demonstration purposes, replace this with your API call
    }
}