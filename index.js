//Functions to deal with dark mode to be loaded before dom loads
let darkbutton = document.getElementById("darkmode")

function dark() {
    let page = document.body;
    // the classlist.toggle means that pressing the button will return it to light mode
    page.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded") /*() => {
    // DOM elements
    const planetList = document.getElementById("planet-list");
    const planetImage = document.getElementById("planet-image");
    const planetName = document.getElementById("planet-name");
    const planetType = document.getElementById("tag-line");
    const planetDescription = document.getElementById("planet-description");
    const sunDistance = document.getElementById("sun-distance");
    const moonNumber = document.getElementById("moon-number");
    const nickName = document.getElementById("nick-name");
  
    // Variables to store data
    let currentPlanet = null;
    let planetsData = [];
  
    // Functions to display planet details
    function displayPlanetDetails(planet) {
      planetImage.src = planet.picture;
      planetImage.alt = planet.name;
  
      planetDescription.innerHTML = `
        <h2>${planet.name}</h2>
        <p>${planet.description}</p> <br>`
        
      planetName.innerHTML=`<h2>${planet.name}`
      planetType.innerHTML=`<h3>${planet.tagline}`
      sunDistance.innerHTML=`<p><strong>Planet Distance from sun</strong>: ${planet.distanceFromSun} million Km from the sun.</p>`
      moonNumber.innerHTML=`<p><strong>Number of Moons</strong>: ${planet.numberOfMoons} </p>`
      nickName.innerHTML=`<p> <strong>Nickname: </strong>: ${planet.namesake} </p>`
    }
  
    // Function to update planet information on server (optional)
    function updatePlanetInfo(planet) {
      if (planet) {
        // Replace with your actual server-side update logic (e.g., using fetch with PUT method)
        console.log("Simulating update on server:", planet);
      }
    }
  
    // Function to update planet list
    function updatePlanetList() {
      // Clear any existing planet list items
      planetList.innerHTML = "";
  
      // Create and populate list items for each planet
      planetsData.forEach((planet) => {
        const li = document.createElement("li");
        li.textContent = planet.title || planet.name; // Use title if available, otherwise fallback to name
  
        // Add a click event listener to the list item
        li.addEventListener("click", () => {
          currentPlanet = planet;
          displayPlanetDetails(planet);
        });
  
        // Append the list item to the planet list
        planetList.appendChild(li);
      });
  
      if (planetsData.length > 0) {
        currentPlanet = planetsData[0];
        displayPlanetDetails(currentPlanet);
      }
      // Update planet information on server (optional, uncomment if implemented)
      // updatePlanetInfo(currentPlanet);
    }
  
    // Make a GET request to fetch JSON data with planets
    fetch("http://localhost:3000/planets")
      .then((resp) => resp.json())
      .then((data) => {
        // Check if data is an array of planets
        if (Array.isArray(data)) {
          planetsData = data; // Store planet data
  
          // Display details of the first planet by default
          if (data.length > 0) {
            currentPlanet = data[0];
            displayPlanetDetails(currentPlanet);
          }
          updatePlanetList();
        } else {
          planetList.innerHTML = "<li>Invalid JSON format. Expected an array of Planets.</li>";
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        planetList.innerHTML = "<li>Error fetching data.</li>";
      });
  });
  */