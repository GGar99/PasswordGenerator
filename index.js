// index.js
// Array of characters used for generating passwords
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// References to the password buttons
let passOne = document.getElementById("pass-one");
let passTwo = document.getElementById("pass-two");

// Password length
let passwordLength = 12;

// Function to get a random character from the characters array
function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

// Function to generate a random password of the specified length
function generateRandomPassword() {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter();
    }
    return randomPassword;
}

// Function to generate and display the random passwords in the buttons
function generateAndDisplayPasswords() {
    const generatePasswordOne = generateRandomPassword();
    const generatePasswordTwo = generateRandomPassword();

    passOne.textContent = generatePasswordOne;
    passTwo.textContent = generatePasswordTwo;
}

// Get a reference to the "Generate passwords" button and add a click event listener
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generateAndDisplayPasswords);

// Function to show the popup message
function showPopupMessage(message) {
    const popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = message;
    popupMessage.style.display = "block";
    setTimeout(() => {
        popupMessage.style.display = "none";
    }, 1500); // Hide the popup after 1.5 seconds (adjust as needed)
}

// Copy password to clipboard when clicked
passOne.addEventListener("click", () => copyToClipboard(passOne.textContent));
passTwo.addEventListener("click", () => copyToClipboard(passTwo.textContent));

// Function to copy password text to clipboard
function copyToClipboard(passwordText) {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = passwordText;
    document.body.appendChild(tempTextArea);

    // Select and copy the text to clipboard
    tempTextArea.select();
    document.execCommand("copy");

    // Remove the temporary text area from the DOM
    document.body.removeChild(tempTextArea);

    // Show the "Password Copied!" popup message
    showPopupMessage("Password Copied!");

    // Visual feedback that the password has been copied 
    passOne.classList.add("copied");
    passTwo.classList.add("copied");
    setTimeout(() => {
        passOne.classList.remove("copied");
        passTwo.classList.remove("copied");
    }, 1000); // Remove the class after 1 second. 1500 = 1.5 secs
}