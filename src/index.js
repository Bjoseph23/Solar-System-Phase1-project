//Functions to deal with dark mode to be loaded before dom loads so that the page by dafault starts on light mode
let darkbutton = document.getElementById("darkmode")

function dark() {
    let page = document.body;
    // the classlist.toggle means that pressing the button will return it to light mode
    page.classList.toggle("dark-mode");
}
//After our DOM has loaded, we start adding functionalities to our buttons
document.addEventListener("DOMContentLoaded", () => {
 // Define our DOM element to get data within our div of id ;planets-info
 const planetList = document.getElementById("planet-info");

 // Function to display planet details
 function displayPlanetDetails(planet) {

  //Define variables that create Divs within  DOM elements, add the class,id and style within the div and appendChild to it to put it as a div of a div in our DOM
   const planetCard = document.createElement("div");
   planetCard.classList.add("card");
   planetCard.style="display: inline-block;"
   planetList.appendChild(planetCard);

   const planetImage = document.createElement("img");
   planetImage.src = planet.picture;
   planetImage.alt = planet.name;
   planetImage.style.width = "100%";
   planetImage.id = "planet-image";
   planetCard.appendChild(planetImage);
  
   const planetData = document.createElement("div");
   planetData.classList.add("container");
   planetData.id="planet-data"
   planetCard.appendChild(planetData);

   const planetHeading = document.createElement("div");
   planetHeading.id="planet-heading"
   planetData.appendChild(planetHeading);

   const planetName = document.createElement("div");
   planetName.classList.add("info");
   planetName.id="planet-name"
   planetName.innerHTML = `<h2>${planet.name}</h2>`;
   planetHeading.appendChild(planetName);

   const planetType = document.createElement("div");
   planetType.classList.add("info");
   planetType.id="tag-line"
   planetType.innerHTML = `<h3>${planet.tagline}</h3>`;
   planetHeading.appendChild(planetType);

   const planetContent = document.createElement("div");
   planetContent.classList.add("planet-content");
   planetData.appendChild(planetContent);

   const planetDescription = document.createElement("p");
   planetDescription.classList.add("info");
   planetDescription.id="planet-description";
   planetDescription.innerHTML = `<p>${planet.description}</p> <br>`;
   planetContent.appendChild(planetDescription);

   const sunDistance = document.createElement("p");
   sunDistance.classList.add("info");
   sunDistance.id="sun-distance"
   sunDistance.innerHTML = `<p><strong>Planet Distance from sun</strong>: ${planet.distanceFromSun} million Km from the sun.</p>`;
   planetContent.appendChild(sunDistance);

   const moonNumber = document.createElement("p");
   moonNumber.classList.add("info");
   moonNumber.id="moon-number"
   moonNumber.innerHTML = `<p><strong>Number of Moons</strong>: ${planet.numberOfMoons} </p>`;
   planetContent.appendChild(moonNumber);

   const planetSize = document.createElement("p");
   planetSize.classList.add("info");
   planetSize.id="planet-size"
   planetSize.innerHTML = `<p><strong>Size of planet</strong>: ${planet.planetSize} million km</p>`;
   planetContent.appendChild(planetSize);

   const nickName = document.createElement("p");
   nickName.classList.add("info");
   planetDescription.id="nick-name"
   nickName.innerHTML = `<p> <strong>Nickname: </strong>: ${planet.nickname} </p>`;
   planetContent.appendChild(nickName);
 }
 //Function to handle planet search
 function findPlanet(searchname) {
  const planetCards = document.querySelectorAll(".card");
  //For each planet that has a matching name, displat it, else don't
  for (const pcard of planetCards) {
    const pcardName = pcard.querySelector("#planet-name").innerText.toLowerCase();
    const searchTerm = searchname.toLowerCase();
    // Check if the planet entered matches the the planet name selected with the variable called pcardName and display it, else it returns no planets found
    if (pcardName.includes(searchTerm)) {
      pcard.style.display = "inline-block";
    } else {
      pcard.style.display = "none";    
    }
  }
 }
 //function to filter by planet size
 const filterSizeButton = document.getElementById("filter-size");

 filterSizeButton.addEventListener("click", () => {
  // Declare a function that will handle the sorting of planets in ascending order
   function sortBySize(planetA, planetB) {
     return planetA.planetSize - planetB.planetSize; // This line compares the planetSize property of both planets.A positive result indicates planetA is larger, a negative result indicates planetB is larger.
   }
   // Get an array of all planets from fetched data. This is another fetch request because the data being received is not in the usual order of that in the db.file.
   const allPlanets = fetch("http://localhost:3000/planets") // Allocate our fetch request to a variable so that we do not need type the same fetch request again
     .then((resp) => resp.json())
     .then((data) => data);
 
   // Sort the planet data by size
   allPlanets.then((planets) => planets.sort(sortBySize));//Use .sort built in fucntion to sort the planets based on their size and call our function sortBySize
 
   // Clear the existing planet list, this is to remove the previous ranking from distace from sun
   planetList.innerHTML = "";
 
   // Display sorted planets on each card
   allPlanets.then((planets) => planets.forEach((planet) => displayPlanetDetails(planet)));
 });
 //function to filter by number of moons
const filterMoonButton = document.getElementById("filter-moon"); // Assuming the button has id "filter-moon"

//Add an event listener for when the filter butoon for Number of moons button is clicked
filterMoonButton.addEventListener("click", () => {
  // Declare a function that will handle the sorting of planets by number of moons (descending order)
  function sortByMoonCount(planetA, planetB) {
    return planetB.numberOfMoons - planetA.numberOfMoons; // Descending order (most moons first) 
  }

  // Get an array of all planets from fetched data. This is another fetch request because the data being received is not in the usual order of that in the db.file.
  allPlanets = fetch("http://localhost:3000/planets") // Allocate our fetch request to a variable again. We cannot use the other variable because of the block scope logic
    .then((resp) => resp.json())
    .then((data) => data);

  // Sort the planet data by number of moons (descending order)
  allPlanets.then((planets) => planets.sort(sortByMoonCount));

  // Clear the existing planet list
  planetList.innerHTML = "";

  // Display sorted planets on each card
  allPlanets.then((planets) => planets.forEach((planet) => displayPlanetDetails(planet)));
});


 //DOM elements for search
 const search =document.getElementById("serach");
 const searchButton=document.getElementById("searchButton")
 
  //Add functionality to our Submit button
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const planetName = document.getElementById("pname").value;
    const people = document.getElementById("people").value;
    const date = document.getElementById("date").value;
    const yourName = document.getElementById("yname").value;

    // Create a new message box for each booking entry
    const bookingMessage = document.createElement("div"); // 
    bookingMessage.classList.add("ui", "message"); // For reach message box, give it a class of message and ui, ui is for style

    // Create a header element for the message box
    const messageHeader = document.createElement("h3");
    messageHeader.textContent = `Booking Details`;

    // Create paragraphs for information
    const planetPara = document.createElement("p");  
    planetPara.textContent = `Planet Name: ${planetName}`;
    
    const peoplePara = document.createElement("p");
    peoplePara.textContent = `Number of People: ${people}`;

    const DatePara = document.createElement("p");
    DatePara.textContent = `Travel Date: ${date}`;

    const yourNamePara = document.createElement("p");
    yourNamePara.textContent = `Your Name: ${yourName}`;
    

    // Create and add a delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("ui", "icon", "button", "red"); // Style the button
    deleteButton.textContent = "Delete";

    // Function to handle delete button click (attached later) that will delete the div/message box of booking details
    function handleDeleteClick() {
      bookingMessage.parentNode.removeChild(bookingMessage);
    }

    // Attach delete button click event listener
    deleteButton.addEventListener("click", handleDeleteClick);

    // Add elements to the message box
    bookingMessage.appendChild(messageHeader);
    bookingMessage.appendChild(planetPara);
    bookingMessage.appendChild(peoplePara);
    bookingMessage.appendChild(DatePara);
    bookingMessage.appendChild(yourNamePara);
    bookingMessage.appendChild(deleteButton);

    // Append the message box to the booking container
    const bookingContainer = document.getElementById("booking-container");
    bookingContainer.appendChild(bookingMessage);

    // Clear form fields after submission
    form.reset();
  });

  //Add functionality to our search button
  searchButton.addEventListener("click", () => {
    const nameToBeSearched=search.value.toLowerCase();
    findPlanet(nameToBeSearched);
  });

  // Make a GET request to fetch JSON data with planets
 fetch("http://localhost:3000/planets",{
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }})
   .then((resp) => resp.json())
   .then((data) => {
     if (Array.isArray(data)) {
       // Use forEach loop to display details for each planet
       data.forEach((planet) => displayPlanetDetails(planet));//Function to create a card for each planet for the number of planets within the array in the db.json file
     } else {
       planetList.innerHTML = "<li>Invalid JSON format. Expected an array of Planets.</li>";
     }
   })
   .catch((error) => {
     console.error("Fetch error:", error);
     planetList.innerHTML = "<h2><p><em></em>Error fetching data.</p></h2>";// If the data is not succesfully fetched, an error is displayed in the console
   });
});