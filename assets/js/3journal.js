// ---------------for local storage ---------------------
var currentDate = document.getElementById("currentDate");
var saveButton = document.getElementById("saveButton");
var journalInput = document.querySelector(".myTextArea");
var dateList = document.querySelector("#historyDates");
var displayArea = document.getElementById("displayArea");

// for current date
var todayDate = moment ().format("MM/DD/YYYY");
currentDate.textContent = todayDate;


var anything = JSON.parse(localStorage.getItem("journal"));
var dateHistory = [];

if  (anything) {
    for (var i=0; i < anything.length; i++) {
        dateHistory.push(anything[i].journalDate);
    }
}


// console.log(JSON.parse(localStorage.getItem("journal")));
var allJournal = [];

saveButton.addEventListener("click", function(event) {

    event.preventDefault();

    // get input value from search form
    var inputText = journalInput.value.trim();
           
    // Return from function early if inputText is blank
    if (inputText === "") {
        return;
    }

    // save date and journal as object
    var journalInfo = {
        journalDate: todayDate,
        journalText: inputText,
    }

    allJournal.push(journalInfo);

    // store value: stringify and set key in localStorage to cityHistroy array
    localStorage.setItem("journal", JSON.stringify(allJournal));

    // Add new day to dateHistory array, clear the input for journal box
    dateHistory.push(todayDate);
    journalInput.value = "";
    // console.log(dateHistory);

    renderDateHistory();
                
});

function renderDateHistory () {

    dateList.innerHTML = "";

    // Get stored journalInfo from localStorage
    var storedJournal = JSON.parse(localStorage.getItem("journal"));
    // console.log(storedJournal);

    // Render a new li for each button
    for (var i=0; i < dateHistory.length; i++) {
        
        var savedDate = dateHistory[i];

        var button = document.createElement("button");
        button.textContent = savedDate;
        button.setAttribute("data-index", i);
        

        button.setAttribute("data-journaltext", storedJournal[i].journalText);
        button.setAttribute("data-showdate", storedJournal[i].journalDate);
        button.setAttribute("class", "showingText");

        button.classList.add("waves-effect", "btn", "blue", "lighten-3", "black-text", "text-darken-3", "hoverable", "bt3");
        // console.log(storedJournal[i]);

        dateList.appendChild(button);
        
    }

}

document.addEventListener ("click", event => {
    if (event.target.classList.contains("showingText")) {
        // console.log(event.target);
        displayArea.innerHTML = event.target.dataset.journaltext
    }
})

// This function is being called below and will run when the page loads.
function init() {
    // Get stored journalInfo from localStorage
    var storedJournal = JSON.parse(localStorage.getItem("journal"));
  
    // If saved journalInfo was retrieved from localStorage, update the cityHistory array to it
    if (storedJournal) {
      allJournal = storedJournal;
    //   console.log(allJournal);
    }

    renderDateHistory();
  }

// Calls init to retrieve data and render it to the page on load
init();


//------------------ for displaying mood ------------------------
function displayMood (){
    var mood = localStorage.getItem('mood'); 
    console.log(mood);
    if (mood === "sad"){
         var moodIcon = document.createElement('div')
        moodIcon.innerHTML = `<i class="large material-icons myIcon1" id="sad">sentiment_very_dissatisfied</i></a>`
        document.getElementById('moodDisplay').append(moodIcon)  
    } else if (mood === "neutral") {
    var moodIcon = document.createElement('div')
    moodIcon.innerHTML = `<i class="large material-icons myIcon2" id="neutral">sentiment_neutral</i></a>`
    document.getElementById('moodDisplay').append(moodIcon)
    } else if (mood === "content"){
        var moodIcon = document.createElement('div')
        moodIcon.innerHTML = `<i class="large material-icons myIcon3" id="content">sentiment_satisfied</i></a>`
        document.getElementById('moodDisplay').append(moodIcon) 
    } else {
        var moodIcon = document.createElement('div')
        moodIcon.innerHTML = `<i class="large material-icons myIcon4" id="happy">sentiment_very_satisfied</i></a>`
        document.getElementById('moodDisplay').append(moodIcon)
    }
}
displayMood();
var prompts = [
" List 5 things you’re grateful for today. ",
" What do you like most about your personality? ",
" Whom do you trust the most? Why? ",
" What are your strengths in friendships or relationships (e.g., kindness, empathy)? ",
" What do you most want for your children (or future children)? ",
" How do you draw strength from loved ones? ",
" What boundaries could you set in your relationships to safeguard your own wellbeing? ",
" What do you value most in your relationships, with romantic partners, friends or family? ",
" What five traits do you value most in potential partners? ",
" Write a love letter to yourself. ",
" What are three important lessons have you learned from previous relationships? ",
" What are three things that are working well in your current relationship? ",
" What are three things that could be better in your current relationship? ",
" How do you show compassion to others? How can you extend that same compassion to yourself? ",
" I get anxious when _____________. ",
" When do you feel most happy? ",
" What was one moment of joy or beauty you experienced today? ",
" Describe a place where you feel most relaxed and peaceful. ",
" Write a letter of forgiveness to yourself. ",
" What or who motivates you the most? ",
" Share an act of selflessness or kindness you did for someone. How did it feel to do this? ",
" What was your favorite story or book as a child? Why did you like it so much? ",
" What’s the most rewarding part of your work? ",
" What’s your favorite part of your day? ",
" Which parts of your daily life cause the most stress or frustration? How do you cope with them? ",
];


    var prompts = prompts[Math.floor(Math.random() * prompts.length)];
        document.getElementById("randomprompts").innerHTML = prompts;
