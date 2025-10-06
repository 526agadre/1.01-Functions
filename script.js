// Helper function: writes any HTML into the #out div
function render(html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet() {
  const name = prompt("What is your name?");
  if (!name) {
    render("<h1>Do you not have a name? You left it blank!</h1>");
    return;
  }
  else {
    render(`<p>Hello, ${name}!</p>`);
  }
}

/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers() {
  // TODO: Write your code here
}

/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay() {
  const currentHour = new Date().getHours();
  let message = "";
  if (currentHour < 12) {
    message = "Good morning!";
  } else if (currentHour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }
  render(`<p>${message}</p>`);
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween() {
  const minInput = prompt("Enter the minimum number:");
  const maxInput = prompt("Enter the maximum number:");
  const min = parseInt(minInput);
  const max = parseInt(maxInput);
  if (isNaN(min) || isNaN(max)) {
    render("<p>Invalid input. Please try again.</p>");
    return;
  }
  if (min >= max) {
    render("<p>Please make sure the minimum is less than the maximum.</p>");
    return;
  }

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  render(`<p>Random number between ${min} and ${max}: ${randomNum}</p>`);
}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput() {
  render("<p>Output cleared.</p>");
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc.).
  3) Press the button to change the background color of the output box to a random color.
  4) Ask the user for a number and display that number doubled.
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/

function changeTitle() {
  document.title = "New Page Title!";
  render("<p>Page title changed!</p>");
}
document.getElementById('btnChangeTitle').addEventListener('click', changeTitle);

let colorIndex = 0;
const colors = ['red', 'green', 'blue', 'orange', 'purple'];
function cycleTextColor() {
  const outDiv = document.getElementById('out');
  outDiv.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  render(`<p>Text color changed to ${outDiv.style.color}!</p>`);
}
document.getElementById('btnCycleColor').addEventListener('click', cycleTextColor);

function randomBackgroundColor() {
  const outDiv = document.getElementById('out');
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  outDiv.style.backgroundColor = randomColor;
  render(`<p>Background color changed to ${randomColor}!</p>`);
}
document.getElementById('btnRandomBgColor').addEventListener('click', randomBackgroundColor);

function doubleNumber() {
  const numInput = prompt("Enter a number to double:");
  const num = parseFloat(numInput);
  if (isNaN(num)) {
    render("<p>Invalid input. Please enter a valid number.</p>");
    return;
  }
  const doubled = num * 2;
  render(`<p>${num} doubled is ${doubled}.</p>`);
}
document.getElementById('btnDouble').addEventListener('click', doubleNumber);