function solution(str){
  const splitString = str.split('')
  const reverseString = splitString.reverse('')
  const joinString = reverseString.join('')
  return joinString
}