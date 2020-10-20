var num=Math.round(Math.random(0)*101);
var per3=(num%3 ==0);
var per5=(num%5 ==0);




if(per3 == true && per5 == true){
    alert(num + 'FizzBuzz')
}
else if (per5==true){
    alert(num+'BUZZ')
}
else if( per3==true){
    alert(num+'FIZZ')
}
else{
    alert(num)
}




