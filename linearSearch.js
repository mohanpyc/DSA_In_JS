const arr = [1,2,3,4,5,6]
const findLocationOf = 5

let found = false;

for(let i=0;i<arr.length;i++){

   if(arr[i]===findLocationOf){
      console.log('Found Location At :',i)
      found = true;
      break;
   }

}

if(!found){
   console.log("location not found")
}
