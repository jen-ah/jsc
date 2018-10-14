// This project is about people, cinemas and movies
// For now, the following interactions exist:
// People can go to cinemas
// People can watch movies
// Cinemas can show movies
// People can rate movies
// Later on this can be extended, e.g. to have cinemas sell snacks which people can buy etc.

// create a Movie class
var Movie = class{
    // construct the class
    constructor(title){
       this.name = title
       this.shownAt = []
       this.watchedBy = []
       this.ratedBy = []
    }
    // Movie is not an actor yet, so we do not add any further functions here for now
}

// create some Movies
var matrix = new Movie('The Matrix')
var batman = new Movie('Batman Begins')
var bond = new Movie('Casino Royale')
var mib = new Movie('Men in Black')

// create a People class
var People = class{
    // construct the class
    constructor(name){
       this.name = name
       this.moviesWatched = []
       this.cinemasVisited = []
       this.moviesRated = []
    }
    // insert a function for visiting a cinema
    visit(cinema){
        this.cinemasVisited.push(cinema)
        cinema.visitedBy.push(this.name)
    }
    // insert a function for watching a movie
    watch(movie){
        this.moviesWatched.push(movie)
        movie.watchedBy.push(this.name)
    }
    // insert a function for rating a movie
    rate(movie){
        this.moviesRated.push(movie)
        movie.ratedBy.push(this.name)
    }
}

// create some People
var peter = new People('Peter')
var josh = new People('Josh')
var alexa = new People('Alexa')
var katie = new People('Katie')

var Cinema = class {
    // construct the class
    constructor(name){
        this.name = name
        this.visitedBy = []
        this.moviesShown = []
    }
    show(movie){
        this.moviesShown.push(movie)
        movie.shownAt.push(this)
    }
}

// create some Cinemas
var best = new Cinema('BEST Cinema')
var world = new Cinema('Cinema World')
var star = new Cinema('Cinestar')

// let's have some cinemas show some movies
best.show(bond)
best.show(batman)
world.show(matrix)
world.show(mib)
star.show(bond)
star.show(matrix)

// let's have some people visit some cinemas, watch some movies and rate them
josh.visit(best)
josh.watch(batman)
alexa.visit(world)
alexa.watch(mib)
alexa.rate(mib)
katie.visit(star)
katie.watch(bond)
peter.visit(best)
peter.watch(batman)
peter.rate(batman)
katie.visit(star)
katie.watch(matrix)



 
// check that everything got recorded correctly

// Movies
console.log(bond)
console.log(batman)
console.log(matrix)
console.log(mib)

// Cinemas
console.log(best)
console.log(world)
console.log(star)

// People
console.log(alexa)
console.log(katie)
console.log(josh)
console.log(peter)

