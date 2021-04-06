let Model = {
    favs: [{title: "Interstellar", director: "Christopher Nolan"}],
    addFav: function(fav) {
        this.favs.push(fav);
        console.log(this.favs)
    }
};

export {Model} 