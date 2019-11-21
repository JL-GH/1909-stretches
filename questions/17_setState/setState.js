// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState(newState) {
    // YOUR CODE
    // this.state = {...this.state, ...newState}
    this.state = Object.assign({}, this.state, newState)
    return this.state
  }

  // goBack() {
  //   this.state = newState.pop()
  // }
}

module.exports = { StatefulThing };
