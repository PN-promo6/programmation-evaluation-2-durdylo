def checkUniqueness(array) :
    i =1
    wordsNotUnique =[]
    while i < len(array) :
        currentElement = array[i];
        previousElement =array[i-1]
        if currentElement == previousElement :
            print(previousElement)
        i = i+1


words =["chez", "chez", "alors", "chez"]
checkUniqueness(words)
