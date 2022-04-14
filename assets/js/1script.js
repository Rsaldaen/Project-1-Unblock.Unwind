<<<<<<< HEAD
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
=======
// for fetch example
// function getApi() {

    
//     var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=standard&exclude=hourly,minutely,alerts&appid=" + apiKey;
  
//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//        console.log(data);
//       });
//   }
//  getApi();

>>>>>>> e9017c23b254762e3a92ae8240c53ac881c46b95

happyIcon.addEventListener("click", function() {
  localStorage.setItem('mood', 'happy')
});
