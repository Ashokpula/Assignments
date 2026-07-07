//4 types of funtions

//1. Funtion without parameters and wothout return types

//2  Funtion without parameters and with return types

//3  Funtion with parameters and without return types

//4  Funtion with parameters and with return types

//5 Function with optional parameters


//there are 3 different types of functions

//1.Names Functions 

//Syntax:

//function functionname(a: number, b: number) : return type{

    //function body
//}



//2. Arrow/ Lamba functions >> Function delcared without any name and implemented after an arrow mark 

//syntax
//(parameters) ==> {
   // function body}

let sum = (a: number ,b: number ) => (a+b);

console.log(sum(2,5));


//3. Annonymous Functions >> Function declared without name and used as a parameter in another function

//syntax:
///function functionname(annonymous function as parameter) return type {}

function calculator1 (x:number) : void {

    console.log(x*x);

}
calculator1(5);


// Creating a function 
function calculator (square : (x:number) => number) : void {

    console.log(square(5));

}
calculator1(5);
//Calling a function 

calculator(

    function (a:number) : number {

        return a*a
    }


);