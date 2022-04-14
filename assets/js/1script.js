var sadIcon = document.querySelector(".myIcon1");
var neutralIcon = document.querySelector(".myIcon2");
var contentIcon = document.querySelector(".myIcon3");
var happyIcon = document.querySelector(".myIcon4");


sadIcon.addEventListener("click", function () {
  localStorage.setItem('mood', 'sad')
  
});


neutralIcon.addEventListener("click", function() {
  localStorage.setItem('mood' , 'neutral')
});

contentIcon.addEventListener("click", function() {
  localStorage.setItem('mood', 'content')
});

happyIcon.addEventListener("click", function() {
  localStorage.setItem('mood', 'happy')
});
