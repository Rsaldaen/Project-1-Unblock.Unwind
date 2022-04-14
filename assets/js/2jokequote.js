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

var quotearray = "https://type.fit/api/quotes";

var showQuote = function() {
    fetch(quotearray)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var randomquote = data[Math.floor(Math.random() * 1000)];
      document.getElementById("motivate").append(randomquote.text);
    }) 
}
showQuote();

$("#getQuotes").click(function() {
    showQuote();
    $(".quotes").empty();
})


// this is for showing and hiding the joke and quote blocks
var jokeBlock = document.querySelector('#jokeBlock');
var quoteBlock = document.querySelector('#quoteBlock');

function hideBlock(block) {
    block.style.display = "none";
}

if (document.location.search === "?q=inspiration") {
    hideBlock(jokeBlock); 
} else if (document.location.search === "?q=humor") {
    hideBlock(quoteBlock); 
} else {
    jokeBlock.style.display = "block";
    quoteBlock.style.display = "block";
}