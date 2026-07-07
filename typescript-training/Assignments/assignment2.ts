let customerName : string = "John Doe";
let creditScore : number  = 720;
let income : number = 55000.0;
let isEmployed : boolean = true;
let debtToIncomeRatio : number  = 35.0;

if (creditScore >= 750) {
  console.log(`${customerName} loan is automatically approved`);
   }
else if ( creditScore >= 650 && creditScore <= 750){

      
      if (income >= 50000){
         
                  if (isEmployed == true) {
                        
                         if (debtToIncomeRatio < 40) {
                           console.log(`${customerName} loan is approved.`);
                              } 
                         else {
                           console.log(`${customerName} loan is denied as DIR is more than 40.`);
                              }

                       } 
                    
                  else {
                     console.log(`${customerName} loan is denied as the customer is unemployed.`);
                       }
         }
        else {
               console.log(`${customerName} loan is denied as the salary is less than 50k.`);
             }
       
    }  

else {
    console.log(`${customerName} loan is denied as credit score is less than 650.`);  
}