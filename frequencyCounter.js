const toBeC=["a", "b", "a", "c", "b", "a"];

let frequency = {}

for(let i =0;i<toBeC.length;i++){
    if(frequency[toBeC[i]]){
        frequency[toBeC[i]]++
    }else{
        frequency[toBeC[i]]=1
    }
}