window.onload = function() {
  document.getElementById("date").innerHTML = new Date().toLocaleDateString();

  const firstName = getCookie('firstName');
  const welcomeMessage = document.getElementById('welcomeMessage');
  if (firstName) {
    welcomeMessage.textContent = `Welcome back, ${firstName}`;
    document.getElementById('firstName').value = firstName;
    document.getElementById('notYou').style.display = 'block';
    document.getElementById('userName').textContent = firstName;
  } else {
    welcomeMessage.textContent = 'Welcome New User';
  }
}


function updateValue(value) {
    document.getElementById('sliderValue').textContent = value;
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearError(elementId) {
    document.getElementById(elementId).textContent = "";
}

// Validation Functions
function validateFirstName() {
    const firstName = document.getElementById("firstName").value.trim();
    const regex = /^[a-zA-Z'-]{1,30}$/;

    if (!firstName) {
        showError("firstNameError", "First name is required.");
        return false;
    } else if (!regex.test(firstName)) {
        showError("firstNameError", "First name can only contain letters, apostrophes, and dashes.");
        return false;
    } else {
        clearError("firstNameError");
        return true;
    }
}

function validateMiddleInitial() {
    const middleInitial = document.getElementById("middleInitial").value.trim();
    const regex = /^[a-zA-Z]?$/; // Optional single letter

    if (middleInitial && !regex.test(middleInitial)) {
        showError("middleInitialError", "Middle initial must be a single letter.");
        return false;
    } else {
        clearError("middleInitialError");
        return true;
    }
}

function validateLastName() {
    const lastName = document.getElementById("lastName").value.trim();
    const regex = /^[a-zA-Z'-]{1,30}$/;

    if (!lastName) {
        showError("lastNameError", "Last name is required.");
        return false;
    } else if (!regex.test(lastName)) {
        showError("lastNameError", "Last name can only contain letters, apostrophes, and dashes.");
        return false;
    } else {
        clearError("lastNameError");
        return true;
    }
}

function validateDOB() {
    const dobField = document.getElementById("dob");
    const dobValue = new Date(dobField.value);
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());

    if (!dobField.value) {
        showError("dobError", "Date of birth is required.");
        return false;
    } else if (dobValue > today) {
        showError("dobError", "Date of birth cannot be in the future.");
        return false;
    } else if (dobValue < minDate) {
        showError("dobError", "Date of birth cannot be more than 120 years ago.");
        return false;
    } else {
        clearError("dobError");
        return true;
    }
}

function formatSSN() {
    const ssnField = document.getElementById("ssn");
    let value = ssnField.value.replace(/\D/g, '');
    if (value.length > 3 && value.length <= 5) {
        value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 5) {
        value = value.slice(0, 3) + '-' + value.slice(3, 5) + '-' + value.slice(5, 9);
    }
    ssnField.value = value;
}

function validateSSN() {
    const ssnField = document.getElementById("ssn").value.trim();
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;

    if (!ssnField) {
        showError("ssnError", "Social Security Number is required.");
        return false;
    } else if (!ssnPattern.test(ssnField)) {
        showError("ssnError", "Invalid SSN. Use format: 123-45-6789.");
        return false;
    } else {
        clearError("ssnError");
        return true;
    }
}

function validateAddress1() {
    const address1 = document.getElementById("address1").value.trim();

    if (!address1) {
        showError("address1Error", "Address Line 1 is required.");
        return false;
    } else if (address1.length < 2 || address1.length > 30) {
        showError("address1Error", "Address Line 1 must be between 2 and 30 characters.");
        return false;
    } else {
        clearError("address1Error");
        return true;
    }
}

function validateAddress2() {
    const address2 = document.getElementById("address2").value.trim();

    if (address2 && (address2.length < 2 || address2.length > 30)) {
        showError("address2Error", "Address Line 2 must be between 2 and 30 characters.");
        return false;
    } else {
        clearError("address2Error");
        return true;
    }
}

function validateCity() {
    const city = document.getElementById("city").value.trim();

    if (!city) {
        showError("cityError", "City is required.");
        return false;
    } else if (city.length < 2 || city.length > 30) {
        showError("cityError", "City must be between 2 and 30 characters.");
        return false;
    } else {
        clearError("cityError");
        return true;
    }
}
fetch("states.json")

function validateState() {
    const state = document.getElementById("state").value;

    if (!state) {
        showError("stateError", "Please select a state.");
        return false;
    } else {
        clearError("stateError");
        return true;
    }
}

function validateZip() {
    const zip = document.getElementById("zip").value.trim();
    const zipPattern = /^\d{5}$/;

    if (!zip) {
        showError("zipError", "Zip Code is required.");
        return false;
    } else if (!zipPattern.test(zip)) {
        showError("zipError", "Zip Code must be 5 digits.");
        return false;
    } else {
        clearError("zipError");
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value.trim().toLowerCase();
    const emailField = document.getElementById("email");
    emailField.value = email;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        showError("emailError", "Email is required.");
        return false;
    } else if (!emailPattern.test(email)) {
        showError("emailError", "Invalid email format.");
        return false;
    } else {
        clearError("emailError");
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if (!phone) {
        showError("phoneError", "Phone number is required.");
        return false;
    } else if (!phonePattern.test(phone)) {
        showError("phoneError", "Invalid phone number. Use format: 000-000-0000.");
        return false;
    } else {
        clearError("phoneError");
        return true;
    }
}

function validateUserId() {
    const userId = document.getElementById("userId").value.trim();
    const regex = /^[a-zA-Z][a-zA-Z0-9_-]{4,19}$/;

    if (!userId) {
        showError("userIdError", "User ID is required.");
        return false;
    } else if (!regex.test(userId)) {
        showError("userIdError", "User ID must be 5-20 characters, start with a letter, and contain only letters, numbers, dash, or underscore.");
        return false;
    } else {
        clearError("userIdError");
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const userId = document.getElementById("userId").value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!password) {
        showError("passwordError", "Password is required.");
        return false;
    } else if (password.length < 8) {
        showError("passwordError", "Password must be at least 8 characters long.");
        return false;
    } else if (!regex.test(password)) {
        showError("passwordError", "Password must include uppercase, lowercase, and a number.");
        return false;
    } else if (password.includes(userId)) {
        showError("passwordError", "Password cannot contain the User ID.");
        return false;
    } else {
        clearError("passwordError");
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!confirmPassword) {
        showError("confirmPasswordError", "Please confirm your password.");
        return false;
    } else if (password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match.");
        return false;
    } else {
        clearError("confirmPasswordError");
        return true;
    }
}

// Validate Form Function
function validateForm() {
    let isValid = true;

    if (!validateFirstName()) isValid = false;
    if (!validateMiddleInitial()) isValid = false;
    if (!validateLastName()) isValid = false;
    if (!validateDOB()) isValid = false;
    if (!validateSSN()) isValid = false;
    if (!validateAddress1()) isValid = false;
    if (!validateAddress2()) isValid = false;
    if (!validateCity()) isValid = false;
    if (!validateState()) isValid = false;
    if (!validateZip()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validateUserId()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateConfirmPassword()) isValid = false;

    // Check if at least one radio button is selected
    const vaccinated = document.querySelector('input[name="vaccinated"]:checked');
    if (!vaccinated) {
        alert("Please select your vaccination status.");
        isValid = false;
    }

    if (isValid) {
        document.getElementById("submitButton").style.display = "inline-block";
        alert("All fields are valid. You can now submit the form.");
    } else {
        document.getElementById("submitButton").style.display = "none";
        alert("Please correct the errors in the form.");
    }
}

// Submit Form Function
function submitForm() {
  const rememberMe = document.getElementById('rememberMe').checked;
  const firstName = document.getElementById('firstName').value.trim();
  if (rememberMe && firstName) {
    setCookie('firstName', firstName, 2); // Cookie expires in 2 days
  } else {
    deleteCookie('firstName');
  }
  alert("Form submitted successfully!");
  window.location.href = "thankyou.html";
}

function startAsNewUser() {
  deleteCookie('firstName');
  document.getElementById('registrationForm').reset();
  document.getElementById('welcomeMessage').textContent = 'Welcome New User';
  document.getElementById('notYou').style.display = 'none';
}


// Review Form Function
function reviewForm() {
    const form = document.getElementById("registrationForm");
    const reviewDiv = document.getElementById("reviewSection");

    // Gather checkbox values
    let checkedConditions = [];
    form.querySelectorAll('input[name="conditions"]:checked').forEach((checkbox) => {
        checkedConditions.push(checkbox.value);
    });

    // Get radio button value
    const vaccinatedValue = form.querySelector('input[name="vaccinated"]:checked')?.value || "Not specified";

    // Get slider value
    const sliderValue = document.getElementById("health").value;

    // Generate review content
    let reviewContent = `
        <h3>Review Your Information</h3>
        <p><strong>Personal Information:</strong></p>
        First Name: ${form.firstName.value}<br>
        Middle Initial: ${form.middleInitial.value || "N/A"}<br>
        Last Name: ${form.lastName.value}<br>
        Date of Birth: ${form.dob.value}<br>
        
        <p><strong>Contact Information:</strong></p>
        Email: ${form.email.value}<br>
        Phone: ${form.phone.value}<br>
        
        <p><strong>Address:</strong></p>
        ${form.address1.value}, ${form.address2.value || "N/A"}, ${form.city.value}, ${form.state.value} ${form.zip.value}<br>
        
        <p><strong>Health Information:</strong></p>
        Conditions: ${checkedConditions.length > 0 ? checkedConditions.join(", ") : "None"}<br>
        Vaccinated: ${vaccinatedValue}<br>
        Health Status: ${sliderValue}/10<br>
        
        <p><strong>Account Information:</strong></p>
        User ID: ${form.userId.value}<br>
    `;

    // Display review content in the div
    reviewDiv.innerHTML = reviewContent;
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days*24*60*60*1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(cname) == 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


// Load States Dynamically
document.addEventListener("DOMContentLoaded", function () {
    const stateDropdown = document.getElementById("state");

    // Fetch states from the JSON file
    fetch("states.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch states.");
            }
            return response.json();
        })
        .then(states => {
            states.forEach(state => {
                const option = document.createElement("option");
                option.value = state.abbreviation;
                option.textContent = state.name;
                stateDropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error loading states:", error);
        });
});
