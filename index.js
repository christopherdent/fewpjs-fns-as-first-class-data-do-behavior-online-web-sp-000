/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}


function greet(time) {
  const hour = parseInt(time);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  if ( hour <17 && hour > 12 ) return "Good Afternoon"
  }
