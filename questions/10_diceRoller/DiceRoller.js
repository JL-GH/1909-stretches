// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor (sides, numDice) {
    let totalSides = sides
    let numOfDice = numDice
  }

  roll() {
    let totalVal = 0

    for (let i = 1; i <= this.numOfDice; i++) {
      totalVal += Math.floor(Math.random() * this.totalSides)
    }
    return totalVal
  }

}

module.exports = { DiceRoller };
