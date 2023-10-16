// get all the buttons we want to show/not show.
const buttonList = document.querySelectorAll('.individual-wrapper');

// get the button to control view/no view.
const hamburgerMenu = document.getElementById('hamburger');

// listen for the click event on the hamburger button.
hamburgerMenu.addEventListener('click', ()=>buttonList.forEach(button => {
  button.classList.toggle('hide');
}));