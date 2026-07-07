let empid : number = 1234;
console.log(empid);

let firstname : string = "Ashok";
let lastname : string = "Pula";
console.log(`Name of employee is ${firstname} ${lastname}`);

let doyouhavevisa : boolean = true;

let age: undefined;

let empsalary : null = null;


//Union >>> represents more than one dagtatype
//Example: 

let empadress : string | number ;

 empadress  = 500081;

 console.log(empadress);

  empadress  = "Hyderabad";

  console.log(empadress);


  //Non primitive datatypes

  interface  personalInfo {

    name : string;
    age : number;
    empid : number;
    visa : boolean;
    address : {
               city : string;
               pincode : number;
               state : string;

     }

  }

   let person :  personalInfo = {

    name : "Ashok",
    age : 32,
    empid : 45072,
    visa : true,
    address : {
               city : "Hyderabad",
               pincode : 500081,
               state : "Telangana"

     }

  }

   console.log(person.address);


   // Array >> array represents a list of values

   let fruits : string [] = ["Apples", "Oranges", "Lemons"];
   let prices : number [] = [100, 200, 300];
   let fruitsAndPrices : (string | number)[] =["Apples",100, "Oranges",200, "Lemons",300];
   console.log(fruitsAndPrices);
   console.log(fruits);
   console.log(prices);

   // Tuple: Tuple is an ardred data types 
