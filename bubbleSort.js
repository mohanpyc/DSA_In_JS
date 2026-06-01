const toBeSorted=[5,2,8,1]
for(let j=0;j<toBeSorted.length;j++){
for(let i=0;i<toBeSorted.length-1-j;i++){
    console.log(i,i+1,'before if')
    if(toBeSorted[i]>toBeSorted[i+1]){
        let tempNext=toBeSorted[i+1]
        let temp=toBeSorted[i]
        toBeSorted[i]=tempNext
        toBeSorted[i+1]=temp
    }
}
}
console.log(toBeSorted,'after sorting')