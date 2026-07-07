// For Loop >> 

for (let p : number = 1;p<= 10; p++) {
   console.log("name");
}

//While Loop >> When we dont know the totoal number of iteration and when we have conditions 

let j : number = 1;
let isPageLoaded : boolean = false;

while(j> 0 ){
    if( isPageLoaded  || j< 10 )
    console.log("Refresh the page");
    break;
    j++
}


//Special cases of loops

//1. For in Loop >> works for object

let fruits : string[] = ["Apples", "oranges" , "Mangos"];

for (let i : number = 0;i<= fruits.length-1; i++) {
   console.log(fruits[i]);
}


for (let fruit of fruits) {
    console.log(fruit);
}

//2, For of loop >> works for array and others 
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
for (let key in person){
    console.log(key);
    console.log(person[key as keyof  personalInfo] );

}

//3. Do while Loop  >> When we have to execute the statement atleast once irrespcitve of condition

console.log("----- Do While ----");
let x:number =0;
do {

   console.log("do while loop is executed")
   //x++;
}while(x>0)


//Mainly 3 Jumping statements
// 1 Break '
// 2. Continue
// 3. Return

