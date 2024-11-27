let countdown=10;
while (countdown>0) {
    console.log(countdown);
    countdown--;
}
console.log("happy new years!")


let num="";
for(let i=0;i<10;i++){
    if(i===4){continue}
    num+="the number is"+i;
}
console.log(num)


let list =[1,2,3,4,5,6,7];
let count=0;
for (let x in list){
    {
    let i = 0; i < Array.length; i++;
    count++;
}
}   
console.log(count)


let alist = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < alist.length; i++) {
    sum += alist[i]; 
}
console.log(sum);

