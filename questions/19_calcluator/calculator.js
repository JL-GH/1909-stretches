class Calculator {
  constructor(){
    let value = 0

    this.add = (num) => {
      value = value + num
      return this
    }
    this.subtract = (num) =>  {
      value = value - num
      return this
    }
    this.multiply = (num) =>  {
      value = value * num
      return this
    }
    this.divide = (num) => {
      if (num === 0) {
        return this
      }
      else {
        value = value / num
      }
      return this
    }
    this.clear = () =>  {
      value = 0
      return this
    }
    this.getValue = () => {
      return value
    }
  }
  get value() {
    return this.getValue()
  }

}

module.exports = { Calculator };
