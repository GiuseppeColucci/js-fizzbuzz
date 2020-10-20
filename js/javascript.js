
// generatrore di numeri da 1 a 100
var num=Math.round(Math.random(0)*101);
// condizioni di verifica
// divisione per 3
var per3=(num%3 ==0);
// divisione per 5
var per5=(num%5 ==0);



// condizioni
// prima verifica
if(per3 == true && per5 == true){
    alert(num + 'FizzBuzz')
}
// seconda verifica
else if (per5==true){
    alert(num+'BUZZ')
}
// terza verifica
else if( per3==true){
    alert(num+'FIZZ')
}
// ultima verifica
else{
    alert(num)
}




