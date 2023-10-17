const input = document.getElementsByClassName("card__email")[0];
const subBtn = document.getElementsByClassName("button")[0];
const error = document.getElementsByClassName("error")[0];
const signupForm = document.getElementsByClassName("card__front")[0];
const successForm = document.getElementsByClassName("card__back")[0];
const emailText = document.querySelector(".card__info strong")

let emailInputValue;

function checkEmail() {
  emailInputValue = input.value;
  
  if (emailInputValue === "") {
    error.textContent = "Please insert an email";
    input.classList.add("errorState");
  } else {
    try {

      emailText.textContent = emailInputValue; // Update the emailText content
      error.textContent = "";
      input.classList.remove("errorState");
    } catch (error) {
      error.textContent = "Valid email required";
      input.classList.add("errorState");
    }
  }
}

subBtn.addEventListener('click', checkEmail);

// Function to flip the card
function flipCard() {
  signupForm.style.display = "none";
  successForm.style.display = "block";
}

function dismissCard() {
  signupForm.style.display = "flex";
  successForm.style.display = "none";
}


// Add event listener to the "Dismiss message" button
document.getElementsByClassName("button")[0].addEventListener('click', flipCard);
document.getElementsByClassName("button")[1].addEventListener('click', dismissCard);
