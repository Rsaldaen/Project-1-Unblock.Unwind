var showDadJoke = function() {
    var dadJokeUrl = "https://v2.jokeapi.dev/joke/Any";
    // var dadJokeUrl = "https://api.pgamerx.com/joke&WrUt0h8hXLov";

    fetch(dadJokeUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.setup);
        console.log(data.delivery);
        document.getElementById("jokeQ").append(data.setup);
        document.getElementById("jokeA").append(data.delivery);
    })
}


$("#getJoke").click(function() {
    showDadJoke();
    $(".humor").empty();
})