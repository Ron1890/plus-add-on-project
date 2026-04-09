function showSelectedCity(event) {
  event.preventDefault();

  let selectedCity = event.target.value;

  if (selectedCity === "paris") {
    let parisTime = moment()
      .tz("Europe/Paris")
      .format("dddd, MMMM D, YYYY H:mm:ss");

    alert(
      `Your current time zone is Europe/Paris and the current time is ${parisTime}`,
    );
  }

  if (selectedCity === "tokyo") {
    let tokyoTime = moment()
      .tz("Asia/Tokyo")
      .format("dddd, MMMM D, YYYY H:mm:ss");

    alert(
      `Your current time zone is Asia/Tokyo and the current time is ${tokyoTime}`,
    );
  }

  if (selectedCity === "sydney") {
    let sydneyTime = moment()
      .tz("Australia/Sydney")
      .format("dddd, MMMM D, YYYY H:mm:ss");

    alert(
      `Your current time zone is Australia/Sydney and the current time is ${sydneyTime}`,
    );
  }
}

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showSelectedCity);
