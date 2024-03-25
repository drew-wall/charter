/**
 * 
 * @param {Array} numbers - array of integers
 * @returns {String} String
 * 
 * function which takes an array of numbers and returns
 * formatted phone number: (nnn) nnn-nnnn
 * Assumes array is only integers and length of 10
 */
const createPhoneNumber = numbers =>
  `(${numbers.slice(0,3)}) ${numbers.slice(3, 6)}-${numbers.slice(6,10)}`.replaceAll(',', '')

export default createPhoneNumber