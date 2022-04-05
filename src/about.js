

const populateAbout = (e) => {
  e.preventDefault();
  const content = document.getElementById('content');
  content.innerHTML = "";

  const aboutHeading = document.createElement('h2');
  aboutHeading.textContent = "This is the About Section";

  content.appendChild(aboutHeading);
}

export default populateAbout;
