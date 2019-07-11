function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  return console.log(string.toUpperCase())
}
function logWhisper(string) {
  return console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  if (string = 'I love you, Grandma.') {
    return console.log(`I love you, too.`)
  } 
  else if (string.toLowerCase()){
    return console.log(`I can't hear you!`)
  }
  else if (string.toUpperCase()) {
    return console.log (`YES INDEED!`)
  }
    }
sayHiToGrandma('HELLO')
sayHiToGrandma('hello')
sayHiToGrandma('I love you, Grandma.')