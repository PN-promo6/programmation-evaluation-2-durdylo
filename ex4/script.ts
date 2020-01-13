function isSingle(array: string[], word: string) {
  let i: number = 0;
  let currentElement: string;
  let count: number = 0
  let isAlone: boolean = true
  while (i < array.length) {
    currentElement = array[i];
    if (currentElement == word) {
      count++
    }
    i++
  }
  if (count > 1) {
    isAlone = false;
  }
  console.log(isAlone)
  return isAlone
}
let arrayWord: string[] = ["chez", "chez", "alors"]
let wordTest: string = "chez"
isSingle(arrayWord, wordTest)
