const multiply = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 * num2
  }
  throw new Error('num1 and num2 are not numbers')
};

module.exports = { multiply };
