const PERFORMANCE_TITLE = 'search the number'

const numbers = [0, 3, 4, 9, 10, 15, 5, 6, 8, 2]

/*
 * Linear search
 * O(n)
 * Ω(1)
 */

console.time(PERFORMANCE_TITLE)

const searchNumber = (data: number[], query: number) => {
  let result = -1

  if (!data || !query) return result

  for (let index = 0, dataLength = data.length; index < dataLength; index++) {
    if (data[index] === query) {
      result = data[index]
      break
    }
  }
  return result
}

console.log(searchNumber(numbers, 5))

console.timeEnd(PERFORMANCE_TITLE)
