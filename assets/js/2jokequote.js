var showDadJoke = function() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
            'X-RapidAPI-Key': '44718af8bcmshe03b01036bf3ea5p180c01jsn9ae2852dc1f3'
        }
    };
    
    fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            console.log(data.body[0].setup);
            console.log(data.body[0].punchline);
            document.getElementById("jokeQ").append(data.body[0].setup);
            document.getElementById("jokeA").append(data.body[0].punchline);
        })
}

$("#getJoke").click(function() {
    showDadJoke();
    $(".humor").empty();
})


// var showDadJoke = function() {
//     var dadJokeUrl = "https://v2.jokeapi.dev/joke/Any";

//     fetch(dadJokeUrl)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         console.log(data.setup);
//         console.log(data.delivery);
//         document.getElementById("jokeQ").append(data.setup);
//         document.getElementById("jokeA").append(data.delivery);
//     })
// }


// $("#getJoke").click(function() {
//     showDadJoke();
//     $(".humor").empty();
// })