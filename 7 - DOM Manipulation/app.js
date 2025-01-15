// DOM Manipulation
// Document Object Model (DOM)
// Allow us to use JavaScript to change the style, content, structure of our website

// .querySelector()
// Pass: #id, .classname, tagname
// Return: first element
const elementWithID = document.querySelector("#first-div");
console.log(elementWithID);

elementWithID.textContent = "Div 1";
elementWithID.style.color = "Green"
elementWithID.style.fontFamily = "Impact"


//  You can only access the first element using .querySelector.
const elementWithClass = document.querySelector(".sample-div")
console.log(elementWithClass);

// .querySelectorAll()
const elementsWithClass = document.querySelectorAll(".sample-div")
console.log(elementsWithClass)
elementsWithClass[1].textContent = "Div2";
elementsWithClass[1].style.color = "#357266";
elementsWithClass[1].style.backgroundColor = "#0E3B43";

const headings = document.querySelectorAll("h3")
console.log(headings)

headings.forEach(function (heading){
  heading.style.color ="#D8F1A0";
  heading.style.backgroundColor = "#00A878"
  heading.style.textAlign = "center";
})

// Updating Element Attributes
const dayNightIcon = document.querySelector("#day-night-icon")
console.log(dayNightIcon)
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png")

// Appending New Elements
const parentElementDiv = document.querySelector("#parent-element");
const createdElement = document.createElement("div")
createdElement.textContent = "Child Element";
parentElementDiv.appendChild(createdElement);
console.log(createdElement)

// Remove an element
const elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();


const darkModeBtn = document.querySelector("#dark-mode-btn")
darkModeBtn.addEventListener("click", function(){
  const pageContainer = document.querySelector("#page-container")
  pageContainer.style.backgroundColor = "black"
  pageContainer.style.color = "white";

  const pageModeText = document.querySelector('#page-mode-text');
  pageModeText.textContent = "Dark Mode";

});

// Modify this button so that, if you are currently in the lightmode.
// When you click the button, you will change to Dark Mode.
// But, if you are currently in the dark mode.
// When you click the button, you will change back to Light Mode.
