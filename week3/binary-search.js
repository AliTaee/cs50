const PERFORMANCE_TITLE = 'search the number'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
 * Binary search
 * O(log n)
 * Ω(1)
 */

console.time(PERFORMANCE_TITLE)

const searchNumber = (list, query) => {
  let start = 0,
    end = list.length

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (list[mid] === query) return list[mid]

    list[mid] < query ? (start = mid + 1) : (end = mid - 1)
  }

  return -1
}

console.log(searchNumber(numbers, 3))

console.timeEnd(PERFORMANCE_TITLE)

/* First version of Binary search
const searchNumber = (list, query) => {
  if (!list || !query) return -1

  const listLength = list.length
  const middleOfList = Math.floor(listLength / 2)

  if (list.length === 1 && list[0] !== query) {
    return -1
  }

  if (list[middleOfList] === query) {
    return query
  } else if (list[middleOfList] > query) {
    return searchNumber(list.splice(0, middleOfList), query)
  } else if (list[middleOfList] < query) {
    return searchNumber(list.splice(middleOfList, listLength), query)
  }
}
*/
