# Solar-System-Phase1-project

#### Date, 2024/04/14

#### By *Bill Mageni*

## Description

#### Solar Sytem Researchers Description
As reserchers studying the solar sytem and the immense universe surround our precious planet earth, our web appication provides anyone anywhere to access data from our database about different planets in our solar sytem, filter them by the number of moons or by their planet size and also change the page to dark mode. The web application is very user friendly.

## Detailed Description

The folder called,Solar-System-Phase1-project, contains three files and two folders. The name of the two folders are:
1. assets(This file has images used within the project as well as a file called style.css that contains the styling for the HTML document)
2. src(This contains the JavaScript file needed to fetch data from our database and to add functionality to our buttons.)

The other files in the main Solar-System-Phase1-project excluding the README.md file include:
```
1. A db.json file(This contiains a database of planets out-sourced from a public API at: https://github.com/k99sharma/planets-api/blob/main/controllers/getPlanet.js)

2. An index.html file(This contains the documant the runs in the browser window)
```
In the web view, the user is able to interract with the data in various ways. The user can search a planet by name, filter the planets provided by size, filter the planets by number of moons. The user is also able to book a flight to any planet of their choice.

## Response Format
When a user opens the webpage, the fetch is:
```
fetch("http://localhost:3000/planets",{
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }})
```
For a fetch request for example for a planet with an id of 2:
fetch("http://localhost:3000/planets/2)
```json 
   Example Response:
   {
     "id": 2,
     "name":"Venus",
     "tagline":"Terrestrial Planet",
     "tagline_icon":"https://img.icons8.com/ios/50/ffffff/earth-planet.png",
     "picture":"https://upload.wikimedia.org/wikipedia/commons/0/08/Venus_from_Mariner_10.jpg",
     "textureUrl":"https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg",
     "description":"Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. Venus rotates on its axis backward, compared to most of the other planets in the solar system. Venus was the first planet to be explored by a spacecraft. Venus has a solid surface covered in dome-like volcanoes, rifts, and mountains
     with expansive volcanic plains and vast, ridged plateaus.",
     "distanceFromSun":"108.20",
     "planetSize":"12104",
     "yearLength":"225",
     "numberOfMoons":"0",
     "nickname":"ROMAN GODDESS OF LOVE",
     "spaceTexture_url":"https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
   }
   ```

## Installation and Project Setup
You use git clone to be able to download the documents in the GitHub

Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services.

Get a free API Key at:
```
https://github.com/Bjoseph23/Solar-System-Phase1-project
 ```
Clone the repo
```
git clone https://github.com/Bjoseph23/Solar-System-Phase1-project
```
And Lastly in the terminal, install relevent files with:
```
 npm install
```

## Setup

After installation, run this command to get the backend started:

```console
$ json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/planets](http://localhost:3000/planets)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for the API will be:
[http://localhost:3000](http://localhost:3000).

## Installation Requirements
Git

### Installation instruction
```
Git clone https://github.com/Bjoseph23/Solar-System-Phase1-project
```

## Lisences
MIT License

Copyright (c)  Bill Mageni 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Refrences and Acknowledgements
For the planets and references, I woudl like to acknowldge the following:

1. NASA's public data on the solar sytem that provided my with up-to-date facts and information of our solar sytem as well as interesting facts. Below is the link to the website containing information on planets: 
```
https://science.nasa.gov/solar-system/planets/
```
2. The data from the public API provided by a software developer by the name Kalash Sharma. His public API on the solar sytem proved very useful and important to this project. Below are the links to his GitHub and Public API for planets.
```
1:https://github.com/k99sharma
2:https://github.com/k99sharma/planets-api
```

## Technologies used
HTML
Javascript
CSS

## Support and contact details
github.com/Bjoseph23







