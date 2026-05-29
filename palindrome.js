const text = 'radar'
const num =1221

let isPalindrome="";
let isNumPalindrome=0;
let copyNum = num;

for(let i=text.length-1;i>=0;i--){
    isPalindrome+=text[i]
}

console.log(isPalindrome==text?"its a palindrome":"not a palindrome")



while(copyNum>0){
    isNumPalindrome= isNumPalindrome*10+ copyNum%10
    copyNum=Math.floor(copyNum/10)
}

console.log(isNumPalindrome==num?"its a palindrome":"not a palindrome")