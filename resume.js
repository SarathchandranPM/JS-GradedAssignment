// Load the JSON file
var resumeData;
fetch("resume.json")
  .then((response) => response.json())
  .then((data) => {
    resumeData = data.resume;
    showResume(0);
  });

// Show the data for a particular resume object
function showResume(index) {
  var resume = resumeData[index];
  document.getElementById("name").textContent = resume.basics.name;
  document.getElementById("applied-for").textContent = resume.basics.AppliedFor;
  document.getElementById("phone").textContent = resume.basics.phone;
  document.getElementById("email").textContent = resume.basics.email;
  document.getElementById(
    "profiles"
  ).innerHTML = `<a href="${resume.basics.profiles.url}">LinkedIn</a>`;

  //Build a location constant
  const location = resume.basics.location;

  // Build a string containing the property names and values
  let locationText = "";
  for (const property in location) {
    locationText += `${location[property]}&nbsp`;
  }

  // Populate the location field with the data
  const locationField = document.getElementById("address");
  locationField.innerHTML = locationText;

  //Fill up skills field
  const skills = resume.skills.keywords
    .map((keyword) => `<p>${keyword}</p>`)
    .join("");
  document.getElementById("skills").innerHTML = skills;

  //Fill up hobbies field
  const hobbies = resume.interests.hobbies
    .map((hobby) => `<p>${hobby}</p>`)
    .join("");
  document.getElementById("interests").innerHTML = hobbies;

  //Build a experience constant
  const work = resume.work;

  // Build a string containing the property names and values
  let workText = "";
  for (const property in work) {
    workText += `<p><strong>${property}:</strong> ${work[property]}</p>`;
  }

  // Populate the experience field with the data
  const workField = document.getElementById("work");
  workField.innerHTML = workText;

  //Build a internship constant
  const intern = resume.Internship;

  // Build a string containing the property names and values
  let internText = "";
  for (const property in intern) {
    internText += `<p><strong>${property}:</strong> ${intern[property]}</p>`;
  }

  // Populate the internship field with the data
  const internField = document.getElementById("internship");
  internField.innerHTML = internText;

  //Build a projects constant
  const project = resume.projects;

  // Build a string containing the property names and values
  let projectText = "";
  for (const property in project) {
    projectText += `<p><strong>${property}:</strong> ${project[property]}</p>`;
  }

  // Populate the projects field with the data
  const projecctField = document.getElementById("projects");
  projecctField.innerHTML = projectText;

  //Fill up education field
  const education = resume.education;

  // Build a string containing the property names and values
  let educationText = "";
  for (const objectName in education) {
    educationText += `${objectName}:\n`;
    const obj = education[objectName];
    for (const property in obj) {
      educationText += `          ${property}: ${obj[property]}\n`;
    }
    educationText += "\n";
  }

  // Populate the education field with the data
  const educationField = document.getElementById("education");
  educationField.textContent = educationText;

  //Build a achievements constant
  const achieve = resume.achievements;

  // Build a string containing the property names and values
  let achieveText = "";
  for (const property in achieve) {
    achieveText += `<p><strong>${property}:</strong> ${achieve[property]}</p>`;
  }

  // Populate the achievements field with the data
  const achieveField = document.getElementById("achievements");
  achieveField.innerHTML = achieveText;
}

// Handle the click event for the "Previous" button
function prevResume() {
  var currentIndex = resumeData.findIndex(
    (r) => r.basics.name === document.getElementById("name").innerHTML
  );
  if (currentIndex > 0) {
    showResume(currentIndex - 1);
  }
}

// Handle the click event for the "Next" button
function nextResume() {
  var currentIndex = resumeData.findIndex(
    (r) => r.basics.name === document.getElementById("name").innerHTML
  );
  if (currentIndex < resumeData.length - 1) {
    showResume(currentIndex + 1);
  }
}

function searchResume() {}
