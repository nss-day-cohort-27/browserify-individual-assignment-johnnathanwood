const placesComponent = require("./places")

const listElement = document.querySelector(".countryList")

const countryList = (visits) => {
    listElement.innerHTML = ""

    visits.map(entry => {
        listElement.innerHTML += placesComponent(entry)
    })
}

module.exports = countryList