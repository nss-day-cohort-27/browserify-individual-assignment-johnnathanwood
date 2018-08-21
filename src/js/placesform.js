const formManager = Object.create(null, {

/////////// this will clear the country and description field once uploaded////////////////////////////////
    clearForm: {
        value: () => {
            document.querySelector("#country").value = ""
            document.querySelector("#description").value = ""
        }
    },

////////// this is what will be rendered using .innerHTML////////////////////////////////////////////
        renderCountryForm: {
            value: () => {
                return `
                    <h2>Places Ive Visited</h2>
                    <fieldset class="placesField">
                    <label for="country">Country</label>
                    <input required type="text" id="country" placeholder="Enter Country">
                    </fieldset>
                        <fieldset class"img">
                        <label for="img">Upload Image</label>   
                        <input required type="file" id="countryImg">
                        </fieldset>
                            <fieldset class="descriptionField">
                            <label for="description">Description</label>
                            <textarea id="description placeholder="Enter visit description" rows="10">
                            </textarea>
                            </fieldset>
                                <fieldset>
                                <legend>Visit dates</legend>
                                <div><label for="start">From</label>
                                <input type="date" id="from" name="visit" 
                                    value="2018-07-22"
                                    min="2018-01-01"
                                    max="2018-12-31" />
                                </div>
                                        <div>
                                        <label for="to">To</label>
                                        <input type="date" id="to" name="visit"
                                        value="2018-07-29"
                                        min="2018-01-01" max="2018-12-31"/ >
                                        </div>
                                </fieldset>
                                    
                            <button id="saveLocationButton">Save Location</button>
                            `
            }
        }
    })

//     renderCountryForm: {
//         value: () => {
//             return `
//         <fieldset>
//         <label for="country">Country</label>
//         <input required type="text" id="country">
//         </fieldset>
//         <fieldset>
//         <label for="description">Description</label>
//         <input required type="text" id="description">
//         </fieldset>
//         <button id="saveVisitButton">Save Visit</button>
//         `
//         }
//     }
// })


/////// export formManager to be used on main.js to call renderCountryForm for document.querySelector/////////////
module.exports = formManager