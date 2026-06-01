const str1='abccddeffg'
const str2='accddbegff'

if(str1.length!=str2.length){
    console.log('not a anagram')
    return;
}

let frequency1 = {}
let frequency2 = {}

for(let i=0;i<str1.length;i++){
    if(str1[i] in frequency1){
        frequency1[str1[i]]+=1
    }else{
        frequency1[str1[i]]=1
    }

    if(str2[i] in frequency2){
        frequency2[str2[i]]+=1
    }else{
        frequency2[str2[i]]=1
    }
}

let sameFrequency=true

for(let item in frequency1){
    if(frequency1[item]!=frequency2[item]){
        sameFrequency=false
    }
}

console.log("this anagram is ",sameFrequency)

