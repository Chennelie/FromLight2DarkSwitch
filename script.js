let button = document.querySelector(".change-button");
let container =  document.querySelector("#container");

function switchTheme() {
  if(container.getAttribute("data-theme") == "dark") {
    container.setAttribute("data-theme", "light");
  } else {
    container.setAttribute("data-theme", "dark");
  } 
}