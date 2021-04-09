import {Model} from "./model.js";
import {View} from "./view.js";

let Controller = {
    M: Model,
    V: View,
    handleInput: function(event) {
        event.preventDefault();
        let movieObject = {
        title: event.target.elements.title.value,
        director: event.target.elements.director.value
    };
        this.M.addFav(movieObject);
        this.V.update(this.M.favs)
        document.getElementById("fav").reset();
    }
};

document.getElementById("fav").addEventListener("submit", (e) => Controller.handleInput(e));