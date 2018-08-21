
/////////////////// require other modules to be used on this page//////////////////////////////////
const formManager = require("./placesform")
const countryList = require("./placesList")
const APIManager = require("./datamanager")

/////////////////// place form on dom using innerHTML////////////////////////////////////////////
document.querySelector("#countryForm").innerHTML = formManager.renderCountryForm()

const listVisits = () => {
    APIManager.getAllVisits()
        .then(allVisits => countryList(allVisits))
}

listVisits()

//////////This is the EventListener for the save button that listens for "click"//////////////////////////////////

document.querySelector("#saveLocationButton").addEventListener("click", () => {
/////////// Get form field values//////////////////////////////////////////////////////////////////////////////////
///////////// Create object from them////////////////////////////////////////////////////////////////////////////
/////////////// Add date/////////////////////////////////////////////////////////////////////////////////////////
    const newLocation = {
        country: document.querySelector("#country").value,
        image: document.querySelector("#countryImg").value,
        description: document.querySelector("#description").value,
        date: document.querySelector("#from").value,
        date: document.querySelector("#to").value,

    }

//////////This is the EventListener for the delete button that listens for "click"//////////////////////////////////
//////////It is deleting the entry because it is going through APIManager and finding the id/////////////////////
 document.querySelector(".countryList").addEventListener("click", evt => {
        if (evt.target.classList.contains("entry__delete")) {
            const id = parseInt(evt.target.id.split("--")[1])
            APIManager.deleteEntry(id).then(listVisits)
        }
    })

////////////////////// POST to API///////////////////////////////////////////////////////////////////////////////
    APIManager.saveVisitEntry(newLocation)
        .then(() => {
////////////////////// Clear the form fields/////////////////////////////////////////////////////////////////////
            formManager.clearForm()
            listVisits()
        })
})


