// create a People class
module.exports = class People{
    // construct the class
    constructor(name){
        this.name = name
     }
     // insert a function for visiting a cinema
     visit(cinema){
         cinema.visitedBy.push(this.name)
     }
     // insert a function for watching a movie
     watch(movie){
         movie.watchedBy.push(this.name)
     }
     // insert a function for rating a movie
     rate(movie){
         movie.ratedBy.push(this.name)
     }
 }