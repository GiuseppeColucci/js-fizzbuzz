var num=Math.round(Math.random(0)*101);
var per3=(num*100%3 !=0);
var per5=(num*100%5 !=1);





if(per3==true){
    alert(num+'fizz')
}
else if (per5==true){
    alert(num+'buzz')
}
else if(per3==true&&per5==true){
    alert(num+'BUZZFIZZ')
}




