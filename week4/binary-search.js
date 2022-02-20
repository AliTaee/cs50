const PERFORMANCE_TITLE = 'search the number'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
 * Binary search
 * O(log n)
 * Ω(1)
 */

console.time(PERFORMANCE_TITLE)

const searchNumber = (list, query) => {
  if (!list || !query) return false

  const listLength = list.length
  const middleOfList = Math.floor(listLength / 2)

  if (list.length === 1 && list[0] !== query) {
    return 'Not found'
  }

  if (list[middleOfList] === query) {
    return query
  } else if (list[middleOfList] > query) {
    return searchNumber(list.splice(0, middleOfList), query)
  } else if (list[middleOfList] < query) {
    return searchNumber(list.splice(middleOfList, listLength), query)
  }
}

console.log(searchNumber(numbers, 3))

console.timeEnd(PERFORMANCE_TITLE)
