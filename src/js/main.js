/////////////////// require other modules to be used on this page//////////////////////////////////

const formManager = require("./placesform")
const countryList = require("./placesList")

/////////////////// place form on dom using innerHTML////////////////////////////////////////////
document.querySelector("#countryForm").innerHTML = formManager.renderCountryForm()