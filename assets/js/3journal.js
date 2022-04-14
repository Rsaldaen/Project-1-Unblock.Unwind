var currentDate = document.getElementById("currentDate");
var saveButton = document.getElementById("saveButton");
var journalInput = document.querySelector(".myTextArea");
var dateList = document.querySelector("#historyDates");
var displayArea = document.getElementById("displayArea");

// for current date
var todayDate = moment ().format("MM/DD/YYYY");
currentDate.textContent = todayDate;

// for local storage
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
