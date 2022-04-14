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
            if (data.body[0].NSFW == false) {
                console.log(data);
                console.log(data.body[0].setup);
                console.log(data.body[0].punchline);
                document.getElementById("jokeQ").append(data.body[0].setup);
                document.getElementById( "jokeA").append(data.body[0].punchline);
            } else {
                return showDadJoke();
            }
        })
}
showDadJoke();

$("#getJoke").click(function() {
    showDadJoke();
    $(".humor").empty();
})
