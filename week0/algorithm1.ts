const data = require('./phone-book.json')
const PERFORMANCE_TITLE = 'search the phone book'

// It's return correct answer but it's not a good algorithm

console.time(PERFORMANCE_TITLE)

interface PhoneBookItem {
  id: number
  firstname: string
  lastname: string
  phone: number
  date: string
  email: string
}

function searchByNameInPhoneBook(
  data: {
    phoneBook: [PhoneBookItem]
  },
  query: string
) {
  let result: PhoneBookItem | null = null

  for (
    let index = 0, phoneBookLength = data.phoneBook.length;
    index < phoneBookLength;
    index++
  ) {
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

searchByNameInPhoneBook(data, 'Renie')

console.timeEnd(PERFORMANCE_TITLE)
