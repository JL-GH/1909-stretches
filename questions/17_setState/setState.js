// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState({newState}) {
    // YOUR CODE
    const curStateKeys = Object.keys(currentState)
    const currentState = this.state
    const newStateKeys = Object.keys(newState)

    for (let i = 0; i < curStateKeys.length; i++) {
      let curKey = curStateKeys[i]
      let newKey = newState[i]
      let val = currentState[curStateKeys[i]]

      if ()
    }
  }
}

module.exports = { StatefulThing };
