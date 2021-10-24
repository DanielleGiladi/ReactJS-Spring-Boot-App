# ReactJS-Spring-Boot-App

This App is a Search Engine of NBA players ,its allow you to shows the list of your favorite players and add more to it.
The frontend writeen in ReactJS and the backend written in Java spring boot.

import the project as a mavan project.
To start the backend you need to run the class NbaPlayersApplication.
Run the react-frontend , and it will open yow the browser.

FROUNTEND:
Component:
1. SearchNbaPlayersComponent - This window shows the search from, and the list of the result , and allow you the save player to the favorite list.
2. ListNbaPlayerComponent - This window shows the list of the favorite NBA players, and aloow yoy to go to the search window.

Service:
Player Service - connect between the restAPI and the frontend.

Backend:
1.Player - This class that reprsent a NBA player. 
2.PlayerController - This class contain the RestAPI methods.
Implement the restful api service:
* Get the list of the favorite -> http://localhost:8080/favorite
* Get the list of the search -> http://localhost:8080/allPlayer?firstName=$$$&lastName=&&&
* Post - save a favorite NBA player -> http://localhost:8080/addPlayer  player


<img src = "images/mainScreen.png" width="400">  <img src = "images/favorite window - before.png" width="400">
<img src = "images/mainScreen.png" width="400">  <img src = "images/search window.png" width="400">
<img src = "images/mainScreen.png" width="400">  <img src = "images/favorite window - after save.png" width="400">

