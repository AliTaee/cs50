/* wrong! ❌
const person = {
  name: 'Ali',
  family: 'Taee',
  tell: 9361702478,
  address: 'Tehran, ejare dar',
}

let person2 = person

person2.name = 'React'

console.log({ person, person2 })
*/

// Correct way ✅
const person = {
  name: 'Ali',
  family: 'Taee',
  tell: 9361702478,
  address: 'Tehran, ejare dar',
}

let person2 = { ...person, name: 'Sadaf' }

console.log({ person, person2 })
