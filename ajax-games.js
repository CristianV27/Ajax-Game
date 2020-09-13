var baseUrl = "https://games-world.herokuapp.com";
var games;

getGames("/games");

function getGames(url) {
    fetch (baseUrl + url, {method: "GET"})
    .then(
        function(response) {
            return response.json();
        }
    )
    .then(
        function(jsonResponse) {
            games = jsonResponse;
            games.forEach(function(element){
                displayGames(element);
            });
        } 
    )
}

function displayGames(games) {
    var gamesList = document.getElementById("gamesList");
    var gameDiv = document.createElement("div");
    var gameTitle = document.createElement("li");
    var gameDescription = document.createElement("section");
    // var gameImage = document.createElement("img");
    
    var gameImage = new Image;
    gameImage.src = games.imageUrl;

    gamesList.appendChild(gameDiv);
    gameDiv.appendChild(gameTitle);
    gameDiv.appendChild(gameDescription);
    gameDiv.appendChild(gameImage);

    gameTitle.innerHTML = games.title;
    gameDescription.innerHTML = games.description;

    

    

    
    
}