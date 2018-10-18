import axios from "axios";

export default {

    findItemsByCategory: function(category) {
        return axios.get("/api/menuitems/" + category)

    }

}

    // getChickenItems: function() {
    //     return axios.get("/api/chicken")
    // }

//     getBeefItems: function() {
//         return axios.get("/api/beef")
//     },

//     getSidesItems: function() {
//         return axios.get("/api/sides")
//     },

//     getDessertItems: function() {
//         return axios.get("/api/dessert")
//     }
// };








// axios.get("/chicken", { params: { q: query } });

// axios.get("/beef", { params: { q: query }});

// axios.get("/sides", { params: {q: query }});

// axios.get("/dessert", { params: {q: query }});


