
// datasets

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "`!@#$^&*<>?/|()+-";

// selectors

const upperinput = document.getElementById("uppercase");
const lowerinput = document.getElementById("lowercase");
const numberinput = document.getElementById("number");
const symbolinput = document.getElementById("spcl");
const lengthinput = document.getElementById("totalchar");
const password_output = document.getElementById("pass-box");

// function for generating random data

const getRandomData = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

// function for generating random password

const generateRandomPassword = (password = "") => {
  if (upperinput.checked) {
    password = password + getRandomData(uppercase);
  }
  if (lowerinput.checked) {  
    password = password + getRandomData(lowercase);
  }
  if (numberinput.checked) {
    password = password + getRandomData(number);
  }
  if (symbolinput.checked) {
    password = password + getRandomData(symbol);
  }
  if (password.length < totalchar.value) {
    return generateRandomPassword(password);
  }
  password_output.innerText = truncateString(password, totalchar.value);
};

// after clicking the btn calling the generateRandomPassword() function

generateRandomPassword();
document.getElementById("btn").addEventListener("click", function () {
  generateRandomPassword();
});

// trim the pwd upto totalcharvalue

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) ;
  } else {
    return str;
  }
}
