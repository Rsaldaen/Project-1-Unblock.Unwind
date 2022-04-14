var sadIcon = document.querySelector(".myIcon1");
var neutralIcon = document.querySelector(".myIcon2");
var contentIcon = document.querySelector(".myIcon3");
var happyIcon = document.querySelector(".myIcon4");


sadIcon.addEventListener("click", function () {
  localStorage.setItem('mood', 'sad')
  
  neutralIcon.classList.remove('sad');
  contentIcon.classList.remove('sad');
  happyIcon.classList.remove('sad');
  sadIcon.classList.add('sad');
  
});


neutralIcon.addEventListener("click", function() {
  localStorage.setItem('mood' , 'neutral')
  sadIcon.classList.remove('sad');
  contentIcon.classList.remove('sad');
  happyIcon.classList.remove('sad');
  neutralIcon.classList.add('sad');
});

contentIcon.addEventListener("click", function() {
  localStorage.setItem('mood', 'content')
  sadIcon.classList.remove('sad');
  happyIcon.classList.remove('sad');
  neutralIcon.classList.remove('sad');
  contentIcon.classList.add('sad');
});

happyIcon.addEventListener("click", function() {
  localStorage.setItem('mood', 'happy')
  sadIcon.classList.remove('sad');
  happyIcon.classList.remove('sad');
  neutralIcon.classList.remove('sad');
  happyIcon.classList.add('sad');
});
