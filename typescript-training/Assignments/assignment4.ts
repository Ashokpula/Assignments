
let bankTransactions : number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let totalCreditAmount : number = 0;
let totalDebitAmount : number  = 0;
let totalAmount : number  = 0;
let totalDebitTransactions : number = 0;
let totalCreditTransactions : number = 0;
 let suspiciousTransactions: number = 0;
 //let amount : number;

for (let amount of bankTransactions ){


    if (amount>0) {

        totalCreditTransactions++;
        totalCreditAmount+= amount;
        if (amount > 10000){
            suspiciousTransactions++;
            console.log(`Suspicious credit Transaction with Amount:", ${amount}`);
        }

    }

    else {
        totalDebitTransactions++;
        totalDebitAmount+= amount;
          if (amount < -10000){
            suspiciousTransactions++;
            console.log(`Suspicious debit Transaction with Amount:, ${amount}`);
        }

    }

}
totalAmount = totalDebitAmount + totalCreditAmount;
console.log(`"Total amount:", ${totalAmount}`);
console.log(`"Total amount credited :",  ${totalCreditAmount}`);
console.log(`"Total amount debited:", ${totalDebitAmount}`);
console.log(`"Total number of credit transactions:",  ${totalCreditTransactions}`);
console.log(`"Total number of credit transactions:", ${totalDebitTransactions}`);
console.log(`"Total number of suspicious transactions:", ${suspiciousTransactions}`);







