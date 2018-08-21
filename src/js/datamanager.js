const APIManager = Object.create(null, {
    saveVisitEntry: {
        value: (entry) => {
            return fetch("http://localhost:8088/visits", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            })
                .then(response => response.json())
        }
    },
    getAllVisits: {
        value: () => {
            return fetch("http://localhost:8088/visits?_order=desc&_sort=date").then(r => r.json())
        }
    },
    deleteEntry: {
        value: (id) => {
            return fetch(`http://localhost:8088/visits/${id}`, {
                method: "DELETE"
            })
                .then(r => r.json())
        }
    }
})

module.exports = APIManager