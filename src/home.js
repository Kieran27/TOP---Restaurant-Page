

const populateHome = (e) => {
  e.preventDefault();
  const content = document.getElementById('content');
  content.innerHTML = "";

  const homeHeading = document.createElement('h2');
  homeHeading.textContent = "This is the Home Section";

  content.appendChild(homeHeading);
}

export default populateHome;
