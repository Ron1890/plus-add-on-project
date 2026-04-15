function showSelectedCity(event) {
  if(event.target.value.length>0)
{let currentTime= moment().tz(event.target.value).format("dddd, MMMM D, YYYY H:mm");
    alert(
      `Your current time zone is ${event.target.value} and the current time is ${currentTime}`);
    
  }
}

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showSelectedCity);
