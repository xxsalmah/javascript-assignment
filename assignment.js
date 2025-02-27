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

// console.log(user1.#password);

user1.setPassword("pass1234");

user1.authenticate("wrongpass");
user1.authenticate("pass1234");

//question 4 
//inheritance

class vehicle {
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    Describe(){
        return `this is a ${this.year},${this.make},${this.model}`
    }
}

class car extends vehicle {
    constructor(make,model,year,fueltype){
        super(make,model,year)
        this.make=make;
        this.model=model;
        this.year=year;
        this.fueltype=fueltype;
    }
    
    Describe(){
        return `this is a ${this.year},${this.make},${this.model} and runs on ${this.fueltype}`
    }
}

const myCar= new car ("scuderia","ferrari",2025, "petrol")
console.log(myCar.Describe())

//polymorphism

class Animal {
    makeSound() {
        return "Some generic animal sound";
    }
}


class Dog extends Animal {
    makeSound() {
        return "Bark";
    }
}

class Cat extends Animal {
    makeSound() {
        return "Meow";
    }
}

const myDog = new Dog();
const myCat = new Cat();

console.log(myDog.makeSound()); 
console.log(myCat.makeSound()); 

//static
class MathUtill {
    
  static calculateAreaOfCircle(radius) {
    return Math.PI* radius;
}
}
console.log(MathUtill.calculateAreaOfCircle(90))

class UserCounter {
    static userCount = 0;
  
    constructor(name) {
      this.name = name;
      UserCounter.userCount++; 
    }
  
    static getUserCount() {
      return `Total Users: ${UserCounter.userCount}`;
    }
  }
  
  
  const uuser1 = new UserCounter("Alice");
  const user2 = new UserCounter("Bob");
  const user3 = new UserCounter("Charlie");
  
  console.log(UserCounter.getUserCount()); 

  //advanced oop manipulation 

  class Movie {
    constructor(title, director, rating) {
        this.title = title;
        this.director = director;
        this.rating = rating;
    }

    static filterByRating(movies, minRating) {
        return movies.filter(movie => movie.rating >= minRating);
    }
}

const movies = [
    new Movie("Inception", "Christopher Nolan", 8.8),
    new Movie("Titanic", "James Cameron", 7.8),
    new Movie("The Dark Knight", "Christopher Nolan", 9.0),
    new Movie("Avatar", "James Cameron", 7.9),
    new Movie("Interstellar", "Christopher Nolan", 8.6),
];

const lowRatedMovies = Movie.filterByRating(movies, 7.0);

console.log(lowRatedMovies);


  
