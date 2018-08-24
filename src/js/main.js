
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
        // image: document.querySelector("#countryImg").value,
        description: document.querySelector("#description").value,
        dateFrom: document.querySelector("#from").value,
        dateTo: document.querySelector("#to").value,

    }

    ////////////////////// POST to API///////////////////////////////////////////////////////////////////////////////
    APIManager.saveVisitEntry(newLocation)
    .then(() => {
        ////////////////////// Clear the form fields/////////////////////////////////////////////////////////////////////
        formManager.clearForm()
        listVisits()
    })
})

//////////This is the EventListener for the delete button that listens for "click"//////////////////////////////////
//////////It is deleting the entry because it is going through APIManager and finding the id/////////////////////
 document.querySelector(".countryList").addEventListener("click", evt => {
        if (evt.target.classList.contains("entry__delete")) {
            const id = parseInt(evt.target.id.split("--")[1])
            APIManager.deleteEntry(id).then(listVisits)
        }
        if (evt.target.id.includes("edit")) {
            let entryID = evt.target.id.split("--")[1]
            let parent = evt.target.parentElement.parentElement
            let country = document.querySelector(`#title--${entryID}`).textContent
            console.log(country)
            let description = document.querySelector(`#content--${entryID}`).textContent
            let date = document.querySelector(`#date--${entryID}`).textContent
            let fromDate = date.split("---")[0] 
            let toDate = date.split("---")[1]
            
            
            parent.innerHTML = `
            
            <fieldset>
            <div class="countryButton">
            <header class="entry__header">
                <input id="editedCountry" value="${country}">
            </header>
            </div>
            <div class="descriptionCard">
                <textarea id="editedPageContent">${description}</textarea>
            </div>
            <div class="dateCard">
                <input id="editedfromDate" value="${fromDate}">
                <input id="editedtoDate" value="${toDate}">
            </div>
            </fieldset>
            <footer>
            <div class="entryButtons">
                <button class="entry__save" id="save--${entryID}">Save</button>
                <button class="entry__delete" id="delete--${entryID}">Delete</button>
            </div>
            </footer>  
            `  
        }
        if (evt.target.id.includes("save")) {
            let entryID = evt.target.id.split("--")[1]
            let newVisit = {
                    country: document.querySelector("#editedCountry").value,
                    description: document.querySelector("#editedPageContent").value,
                    // image: "",
                    dateFrom: document.querySelector("#editedfromDate").value,
                    dateTo: document.querySelector("#editedtoDate").value
                    
            }
            APIManager.editEntry(entryID, newVisit).then(listVisits)    
        }
    })



