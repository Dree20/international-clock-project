function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = document.querySelector(".date");
    let losAngelesTimeElement = document.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM   Do,  YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      " h:mm:ss [<small>] A [</small>]"
    );
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = document.querySelector("#date");
    let parisTimeElement = document.querySelector("#time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do,YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      " h:mm:ss [<small>] A [</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);
