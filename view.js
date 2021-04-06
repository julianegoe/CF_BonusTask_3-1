let View = {
    showFavs: function(object) {
        let container = document.querySelector("#movie-list");
        let headline = document.createElement("h1");
        let director = document.createElement("p");
        headline.innerText = object.title;
        director.innerText = object.director;
        container.appendChild(headline);
        container.appendChild(director);
    },
    clearFavs: function() {
        let container = document.querySelector("#movie-list");
        container.innerHTML = " ";
    },
    update: function(favs) {
        /* this.clearFavs(); */
        favs.forEach(function (fav) {
            View.showFavs(fav);
        })
    }
};

export {View}