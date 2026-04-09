function showSelectedCountry(event) {
  event.preventDefault();

  let selectedCountry = event.target.value;

  if (selectedCountry === "paris") {
    let parisTime = moment()
      .tz("Europe/Paris")
      .format("dddd, MMMM D, YYYY H:mm:ss");

    alert(
      `Your current time zone is Europe/Paris and the current time is ${parisTime}`,
    );
  }

  if (selectedCountry === "tokyo") {
    let tokyoTime = moment()
      .tz("Asia/Tokyo")
      .format("dddd, MMMM D, YYYY H:mm:ss");

    alert(
      `Your current time zone is Asia/Tokyo and the current time is ${tokyoTime}`,
    );
  }

  if (selectedCountry === "sydney") {
    let sydneyTime = moment()
      .tz("Australia/Sydney")
      .format("dddd, MMMM D, YYYY H:mm:ss");

    alert(
      `Your current time zone is Australia/Sydney and the current time is ${sydneyTime}`,
    );
  }
}

let countrySelect = document.querySelector("#countries");
countrySelect.addEventListener("change", showSelectedCountry);
