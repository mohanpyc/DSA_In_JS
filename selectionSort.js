const toBeSorted = [5, 2, 8, 1]

for (let j = 0; j < toBeSorted.length; j++) {
    let smallest=toBeSorted[j]
    let smallestIndex=j
    for (let i = j; i < toBeSorted.length; i++) {
        if(toBeSorted[i]<smallest){
            smallest=toBeSorted[i]
            smallestIndex=i;
        }
    }
    let tempIndexValue=toBeSorted[j]
    toBeSorted[j]=smallest
    toBeSorted[smallestIndex]=tempIndexValue
}
console.log(toBeSorted)