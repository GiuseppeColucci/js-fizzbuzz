var num=Math.round(Math.random(0)*101);
console.log(num)
if(num==100%3){
    alert(num+'fizz')
}
else if (num==100%5){
    alert(num+'buzz')
}
else if(num==100%5)&&(num==100%3){
    alert(num+'buzzfizz')
    
}
else{
    alert(num)
}



// (100%3!=0)=fizz
// (100%5!=0)=buzz
// if(x(100%3!=0)&&(100%5!=0){
//     console.log('FIZZBUZZ')
// }
