
const populateMenu = (e) => {
  e.preventDefault();
  const content = document.getElementById('content');
  content.innerHTML = "";

  const menuHeading = document.createElement('h2');
  menuHeading.textContent = "This is the Menu";

  content.appendChild(menuHeading);
}

export default populateMenu;
