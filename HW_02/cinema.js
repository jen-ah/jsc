// create a Cinema class
module.exports = class Cinema{
    // construct the class
    constructor(name){
        this.name = name
        this.visitedBy = []
        this.moviesShown = []
    }
    show(movie){
        this.moviesShown.push(movie)
    }
}
