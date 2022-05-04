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
interface Person {
  name: string
  family: string
  tell: number
  address: string
}

const person: Person = {
  name: 'Ali',
  family: 'Taee',
  tell: 9361702478,
  address: 'Tehran, ejare dar',
}

let person2 = { ...person, name: 'Ted' }

console.log({ person, person2 })
