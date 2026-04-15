function showSelectedCity(event) {
  let selectedTimeZone = event.target.value;

  let selectedCityText = event.target.options[event.target.selectedIndex].text;

  if (selectedTimeZone.length > 0) {
    let currentTime = moment()
      .tz(selectedTimeZone)
      .format("dddd, MMMM D, YYYY H:mm");

    alert(
      `Your current city is ${selectedCityText} and the current time is ${currentTime}`,
    );
  }
}

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showSelectedCity);
