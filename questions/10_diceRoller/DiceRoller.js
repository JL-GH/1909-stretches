// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor (sides, numDice) {
    if (!sides || !numDice) {
      throw new Error('Missing param')
    }
    if (typeof sides !== 'number' || typeof numDice !== 'number') {
      throw new Error('NaN')
    }
    if (sides < 1 || numDice < 0) {
      throw new Error('Error, must be numbers')
    }
    this.sides = sides
    this.numDice = numDice
    this.history = []
  }

  roll() {
    let allRolls = []

    for (let i = 1; i <= this.numDice; i++) {
      allRolls.push(Math.floor(Math.random() * this.sides + 1))
    }
    this.history.push(allRolls)
    return allRolls
  }

}

module.exports = { DiceRoller };
