const arrayElements = [
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4],
  [1, 2, 3],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
]

const generateRandonNumber = () => {
  const int = Math.random()
  return Math.round(int * 10)
}

const generateRandonArray = () => {
  const value = generateRandonNumber()
  const randonArray = arrayElements[value]
  return randonArray
}

const generateRandonNumberBetween = (min = 40, max = 90) => {
  const value = Math.random() * (max - min) + min
  return Math.round(value)
}

export {
  generateRandonArray,
  generateRandonNumberBetween
}
