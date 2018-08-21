
////////////////////// this will build the post on the page once submitted///////////////////////////////////////

const placesComponent = (item) => {
    return `<fieldset>
        <div class="entry">
            <header class="entry__header">
                <h2>${item.country}</h2>
            </header>
            <fieldset>
            <article class="entry__content">
                ${item.description}
            </article>
            </fieldset>
            <article class="from_date">
                ${item.date}---${item.date}
            </article>
            </fieldset>
            <button class="entry__delete" id="delete--${item.id}">Delete</button>
        </div>
    `
}

module.exports = placesComponent