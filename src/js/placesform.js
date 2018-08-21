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
                    <h2>New Country</h2>
                    <fieldset class="placesField">
                    <label for="country">Country</label>
                    <input required type="text" id="country" placeholder="Enter Country">
                    </fieldset>
                        <fieldset class"img">
                        <label for="img">Upload Image</label>   
                        <input required type="file" id="countryImg" accept="image">
                        </fieldset>
                            <fieldset class="descriptionField">
                            <label for="description">Description</label>
                            <textarea id="description" placeholder="Enter visit description">
                            </textarea>
                            </fieldset>
                                <fieldset>
                                <legend>Visit dates</legend>
                                <label for="start">From</label>
                                <input type="date" id="from" name="visit" 
                                    value="2018-07-22"
                                    min="1990-01-01"
                                    max="2018-12-31" />
                                        <label for="to">To</label>
                                        <input type="date" id="to" name="visit"
                                        value="2018-07-29"
                                        min="1990-01-01" max="2018-12-31"/ >
                                        </div>
                                </fieldset>
                                    <button onclick="alert('Visit has been added!')" id="saveLocationButton">Save Location</button>
                                        <article><h2>Places I have been to</h2></article>
                                 `
            }
        },


    })
/////// export formManager to be used on main.js to call renderCountryForm for document.querySelector/////////////
module.exports = formManager