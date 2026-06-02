
//const  hikePercentage  = hikeCalculation(baseSalary, experience, rating);

let num : number = 35;



function primeNumber(n: number): boolean {

    if (num = 1){

     return true;

}

for (let i = 2; i < n; i++) {
   
    if (n%i===0) {

    return false;

    }

    return true;
}
 
}



if  (primeNumber(num)){

    console.log(`${num} is a prime number`);

    }

else {
    console.log(`${num} is not a prime number`);
}

