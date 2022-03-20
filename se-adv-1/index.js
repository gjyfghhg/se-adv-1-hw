function showMessage(name, greeting) {
  console.log(greeting + "," + name + "," + " " + "whats up");
}

showMessage("Edward", "good morning");
showMessage("Edwrad", "good morning");
showMessage("Eddard", "good morning");
showMessage("Ennard", "bad morning");

function displayMessage(from, text = "No text was given") {
  console.log(`${from}: ${text}`);
}

// displayMessage("Afton", "I always come back");

function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(100, 500));
