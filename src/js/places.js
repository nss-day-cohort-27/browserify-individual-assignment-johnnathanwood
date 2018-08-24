
////////////////////// this will build the post on the page once submitted///////////////////////////////////////

const placesComponent = (item) => {
    return `
        <div  id="entryCard--${item.id}" class="entry">
            <fieldset class="countryCard">
            <header class="entry__header">
                <h2 id="title--${item.id}">${item.country}</h2>
            </header>
            
            <p id="content--${item.id}" class="entry__content">${item.description}</p>
        
            <h3 id="date--${item.id}" class="from_date">${item.dateFrom}---${item.dateTo}</h3>
            </fieldset>
            
            <footer>
            
                <button class="entry__edit" id="edit--${item.id}">Edit</button>
            
            
                <button class="entry__delete" id="delete--${item.id}">Delete</button>
            
            </footer>
        </div>
    `
}

///////////////////////////////item.date is only reading the "to" index///////////////////////////////////////

module.exports = placesComponent