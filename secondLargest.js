const elements = [1,23,34,54,65,32,6,7];
let secondLargest = elements[0];
let firstLargest = elements[0];

for(let i=0;i<elements.length;i++){
    if(elements[i]>firstLargest){
        secondLargest=firstLargest
        firstLargest=elements[i]
    }else if(elements[i]>secondLargest && elements[i]<firstLargest){
        secondLargest=elements[i]
    }
}
console.log(secondLargest,elements,firstLargest)
