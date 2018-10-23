// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift()
}

function appendDriver(name) {
  const driversCopy = drivers.slice()
  driversCopy.push(name)
  return driversCopy
}

function prependDriver(name) {
  driversCopy.pop()
}