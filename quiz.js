function checkAnswer() {
   // Step 2: Identify the correct answer
      const correctAnswer = "4";


   // Step 3: Retrieve the user’s selected answer
      const selectedOption = document.querySelector('input[name="quiz"]:checked');
      const feedback = document.getElementById("feedback");


    // Step 4: Handle case when no option is selected
      if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange";
        return;
      }

      const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
       feedback.textContent = "Correct!";
         feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Step 6: Add event listener to the button
    document.getElementById("submit-answer").addEventListener("click", checkAnswer);