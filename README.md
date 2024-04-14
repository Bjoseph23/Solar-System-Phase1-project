# Solar-System-Phase1-project

#### Date, 2024/04/14

#### By *Bill Mageni*

## Description

# Solar Sytem Researchers
As reserchers studying the solar sytem and the immense universe surround our precious planet earth, our web appication provides anyone anywhere to access data from our database about different planets in our solar sytem, filter them by the number of moons or by their planet size and also change the page to dark mode. The web application is very user friendly and responsive.

## Detailed Description


## Setup

Run this command to get the backend started:

```console
$ json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/planets](http://localhost:3000/planets)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for the API will be:
[http://localhost:3000](http://localhost:3000).

## Core Deliverables

As a user, I can:

1. See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`. You will need to make a GET
   request to the following endpoint to retrieve the film data:Flatdango

   ```json
   GET /plametslms/2

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

2. See a menu of all movies on the left side of the page in the `ul#films`
   element when the page loads. (_optional_: you can style each film in the list
   by adding the classes `film item` to each `li` element.) There is a
   placeholder `li` in the `ul#films` element that is hardcoded in the HTML —
   feel free to remove that element by editing the HTML file directly, or use
   JavaScript to remove the placeholder element before populating the list. You
   will need to make a GET request to the following endpoint to retrieve the
   film data:

   ```json
   GET /films

   Example response:
   [
      {
        "id": 1,
        "name":"Mercury",
        "tagline":"Terrestrial Planet",
        "tagline_icon":"https://img.icons8.com/ios/50/ffffff/earth-planet.png",
        "picture":"https://media.istockphoto.com/id/183817880/photo/mercury.jpg?s=612x612&w=0&k=20&c=Kc_myCnUThIYyb8lVm0mOCtNWqMwRQdbbM8GvA9xoqc=",
        "textureUrl":"https://www.solarsystemscope.com/textures/download/2k_mercury.jpg",
        "description":"Mercury is the smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. It is the closest planet to the Sun. Mercury is a rocky planet, also known as a terrestrial planet. Mercury has a solid, cratered surface, much like the Earth's moon.",
        "distanceFromSun":"57.94 ",
        "planetSize":"4879",
        "yearLength":"88",
        "numberOfMoons":"0",
        "nickname":"ROMAN GOD OF SPEED",
        "spaceTexture_url":"https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
      },
      {
        "id": 2,
        "name":"Venus",
        "tagline":"Terrestrial Planet",
        "tagline_icon":"https://img.icons8.com/ios/50/ffffff/earth-planet.png",
        "picture":"https://upload.wikimedia.org/wikipedia/commons/0/08/Venus_from_Mariner_10.jpg",
        "textureUrl":"https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg",
        "description":"Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. Venus rotates on its axis backward, compared to most of the other planets in the solar system. Venus was the first planet to be explored by a spacecraft. Venus has a solid surface covered in dome-like volcanoes, rifts, and mountains with expansive volcanic plains and vast, ridged plateaus.",
        "distanceFromSun":"108.20",
        "planetSize":"12104",
        "yearLength":"225",
        "numberOfMoons":"0",
        "nickname":"ROMAN GODDESS OF LOVE",
        "spaceTexture_url":"https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
      }
   ]
   ```

3. Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend. I should not
   be able to buy a ticket if the showing is sold out (if there are 0 tickets
   available). **A persistence mechanism is needed for this feature. Read the following paragraph for more details**.

   When a ticket is purchased, you need to do the following 
      - Persist the updated number of `tickets_sold` on
      the server. Remember, the frontend shows the number of available tickets
      based on the `tickets_sold` and the `capacity`, so only the `tickets_sold`
      should be updated on the backend when a ticket is purchased. You will need to
      make a request that follows this structure:

      ```json
      PATCH /planets/:id

      Request Headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
      }

      Request Body: {
      "id": 2
      }
      ----
      Example Response:
      {
        "id": 2,
        "name":"Venus",
        "tagline":"Terrestrial Planet",
        "tagline_icon":"https://img.icons8.com/ios/50/ffffff/earth-planet.png",
        "picture":"https://upload.wikimedia.org/wikipedia/commons/0/08/Venus_from_Mariner_10.jpg",
        "textureUrl":"https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg",
        "description":"Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. Venus rotates on its axis backward, compared to most of the other planets in the solar system. Venus was the first planet to be explored by a spacecraft. Venus has a solid surface covered in dome-like volcanoes, rifts, and mountains with expansive volcanic plains and vast, ridged plateaus.",
        "distanceFromSun":"108.20",
        "planetSize":"12104",
        "yearLength":"225",
        "numberOfMoons":"0",
        "nickname":"ROMAN GODDESS OF LOVE",
        "spaceTexture_url":"https://www.solarsystemscope.com/textures/download/2k_stars.jpg"
      }
      ```

5. Delete a film from the server. Add a delete button next to each film in the
   `ul#films` menu. When the button is clicked, remove the film from the list
   and also delete the film on the server:

   ```json
   DELETE /films/:id

   Example Response:
   {}
   ```

6. When a movie is sold out (when there are no available tickets remaining),
   indicate that the movie is sold out by changing the button text to "Sold
   Out". Also update the film item in the `ul#films` menu by adding a class of
   `sold-out` to the film. For reference, here's what the contents of the
   `ul#films` element should look like with a sold out film:

   ```html
   <li class="film item">(Title of film)</li>
   <li class="sold-out film item">(Title of a sold-out film)</li>
   <li class="film item">(Title of film)</div>
   ```

## Installation and Project Setup
You use git clone to be able to download the documents in the GitHub

Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services.

Get a free API Key at:
```
 https://github.com/Bjoseph23/SA.01-WK2-Code-Challenge

 ```
Clone the repo
```
git clone https://github.com/Bjoseph23/SA.01-WK2-Code-Challenge
```
And Lastly, install relevent files with:
```
 npm install
```
## Installation Requirements
Git

### Installation instruction
```
Git clone https://github.com/Bjoseph23/SA.01-WK1-Code-Challenge
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







