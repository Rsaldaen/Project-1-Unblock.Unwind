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