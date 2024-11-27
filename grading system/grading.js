    const marks=85;
    let grade;
    switch(true){
        case(marks>=90):
        grade="A"
        break;
        case(marks>=80):
        grade="B"
        break;
        case(marks>=70):
        grade="C"
        break;
        case(marks>=60):
        grade="D"
        break;
        case(marks<60):
        grade="E"

    }
    console.log(grade)

    // const students=["james","john","salma","adan"];
    // let text=""
    // for(let i=0; i<students.length; i++) {
    //   text+= students[i]+"<br>";
    // }
    // console.log(students)

const person={fname:"james",lname:"john",age:10};
let text="";
for (let detail in person){
    text+=person[detail];
}
console.log(person)

// let numb="";
// let i=0;
// while (i<10) {
//     numb+=i;i++;
// }
// console.log(numb)

// let numb="";
// let i=0;
// do {
//    numb+=i;i++; 
// } while (i<10);
// console.log(numb)

const cars=["bmw","ford","volvo","saab"];
let i=0;
let txt="";

while (cars[i]) {
    txt+=cars[i];i++;
}
console.log(txt)

let numb="";
for(let i=0; i<10;i++) {
    if(i===3) {break}
    numb+="the number is"+i;
}
console.log(numb)

let num="";
for(let i=0;i<10;i++){
    if(i===4){continue}
    num+="the number is"+i;
}
console.log(num)