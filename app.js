function updateTime() {
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(".date");
    let chicagoTimeElement = chicagoElement.querySelector(".time");
    let chicagoTime = moment().tz("America/Chicago");
    chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = chicagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");
    dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
    dublinTimeElement.innerHTML = dublinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let athensElement = document.querySelector("#athens");
  if (athensElement) {
    let athensDateElement = athensElement.querySelector(".date");
    let athensTimeElement = athensElement.querySelector(".time");
    let athensTime = moment().tz("Europe/Athens");
    athensDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
    athensTimeElement.innerHTML = athensTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
