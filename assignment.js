class book{
    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }

getSummary(){
    return `${this.title} by ${this.author}, ${this.pages} pages.`
}

}
const myBook = new book("The Alchemist", "Paulo Coelho", 197);
console.log(myBook.getSummary()); 

class student{
    constructor(name,age,grade){
        this.name=name;
        this.age=age;
        this.grade=grade;
    }

promote() {
    this.grade+=1;
    return `Student:${this.name},Age:${this.age},Grade:${this.grade}`
}  

}
const student1= new student("ali",15,80);
console.log(student1.promote())

// question 2

class BankAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount} into account ${this.accountNumber}. New balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount} from account ${this.accountNumber}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient balance or invalid amount.");
        }
    }

    
    transferFunds(amount, anotherAccount) {
        if (amount > 0 && amount <= this.balance) {
            this.withdraw(amount);
            anotherAccount.deposit(amount);
            console.log(`Transferred $${amount} from account ${this.accountNumber} to account ${anotherAccount.accountNumber}`);
        } else {
            console.log("Transfer failed due to insufficient balance or invalid amount.");
        }
    }
}


const account1 = new BankAccount(101, 500);
const account2 = new BankAccount(102, 300);

account1.deposit(200); 
account1.withdraw(150); 
account1.transferFunds(100, account2); 

console.log(`Final Balance - Account 1: $${account1.balance}, Account 2: $${account2.balance}`);

class Employee {
    constructor(name, salary, position) {
        this.name = name;
        this.salary = salary;
        this.position = position;
    }

    
    giveRaise(percent) {
        if (percent > 0) {
            const increase = (this.salary * percent) / 100;
            this.salary += increase;
            console.log(`${this.name} received a ${percent}% raise. New salary: $${this.salary.toFixed(2)}`);
        } else {
            console.log("Raise percentage must be positive.");
        }
    }
}
const employee1 = new Employee("Alice", 50000, "Software Engineer");
console.log(`Employee: ${employee1.name}, Salary: $${employee1.salary}, Position: ${employee1.position}`);

employee1.giveRaise(10);

//question 3
class User {
    #password;
    constructor(username,password){
        this.username=username;
        this.#password=password;
    }

setPassword(newPassword){
    if (newPassword.length <6) {
      console.log(`password must be more than 6 characters`)
    }
else{
    this.#password=newPassword;
    console.log(`new password set successfully!`)
   }
 }
 authenticate (passwordAttempt){
    if (passwordAttempt == this.#password) {
        console.log(`Authentication successfull!`)
    return true;
    }
    else{
        console.log(`Authentication unsuccessful!`)
    return false;
    }
}
}


const user1 = new User("John Doe", "Password");



user1.setPassword("pass1234");

user1.authenticate("wrongpass");
user1.authenticate("pass1234");
