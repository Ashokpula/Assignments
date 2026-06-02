
//const  hikePercentage  = hikeCalculation(baseSalary, experience, rating);





function primeNumber(n: number): boolean {


        
    for (let i = 2; i < n; i++) {
   
    if (n%i===0) {

    return false;

     }

   }

    return true;
    

    }
 


let num : number = 11;

if  (primeNumber(num)=== true){

    console.log(`${num} is a prime number`);

    }

else {
    console.log(`${num} is not a prime number`);
}

