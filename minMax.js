const arr=[3,5,6,77,3,55,33,7,2]

let largest = arr[0]
let smallest = arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
    if(arr[i]<smallest){
        smallest=arr[i]
    }
}

console.log("min is ",smallest," Max is ",largest)