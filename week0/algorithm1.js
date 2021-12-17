const data = require('./phone-book.json')
const PERFORMANCE_TITLE = 'search the phone book'

// It's return correct answer but it's not a good algorithm

console.time(PERFORMANCE_TITLE)

function searchByNameInPhoneBook(query) {
  let result = null

  for (let index = 0; index < data.phoneBook.length; index++) {
    let firstname = data.phoneBook[index].firstname

    if (firstname.toLocaleLowerCase() === query.toLocaleLowerCase()) {
      result = data.phoneBook[index]
      break
    }
  }

  if (result === null) {
    console.log(`There is no result with ${query}`)
  } else {
    console.log(result)
  }
}

searchByNameInPhoneBook('Tabbatha')

console.timeEnd(PERFORMANCE_TITLE)
