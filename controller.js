import {Model} from "./model.js";
import {View} from "./view.js";

let Controller = {
    M: Model,
    V: View,
    handleInput: function(event) {
        console.log("hello world");
        let movieObject = {
        title: "New title",
        director: "Cool Name"
    };
        this.M.addFav(movieObject);
        this.V.update(this.M.favs)
    },
    hello: function() {
        let container = document.querySelector("#movie-list");
        container.innerText = "Hello World"

    }
};


document.querySelector("#fav").addEventListener("submit", (e) => {Controller.handleInput(e)})