// This project is about people, cinemas and movies
// For now, the following interactions exist:
// People can go to cinemas
// People can watch movies
// Cinemas can show movies
// People can rate movies
// Later on this can be extended, e.g. to have cinemas sell snacks which people can buy etc.

// First we import the Classes
const People = require('./people.js')
const Movie = require('./movie.js')
const Cinema = require('./cinema.js')

// And also the Database
const Database = require('./database')

// create some Movies
const matrix = new Movie('The Matrix')
const batman = new Movie('Batman Begins')
const bond = new Movie('Casino Royale')
const mib = new Movie('Men in Black')

// create some People
const peter = new People('Peter')
const josh = new People('Josh')
const alexa = new People('Alexa')
const katie = new People('Katie')

// create some Cinemas
const best = new Cinema('BEST Cinema')
const world = new Cinema('Cinema World')
const star = new Cinema('Cinestar')

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

// Save movies
Database.save(bond)
Database.save(batman)
Database.save(matrix)
Database.save(mib) 

// Save cinemas
Database.save(best)
Database.save(world)
Database.save(star)

// Save people
Database.save(alexa)
Database.save(katie)
Database.save(josh)
Database.save(peter)

// Load
const loadedFile = Database.load()

console.log(loadedFile)
