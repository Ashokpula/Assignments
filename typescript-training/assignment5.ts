type EmployeeInfo = [baseSalary: number, experience: number, rating: number];

let employeeData: Map<string, number[]> = new Map();
employeeData.set("Alice Johnson", [75000, 5, 4.2]);
employeeData.set("Bob Smith", [68000, 3, 3.8]);
employeeData.set("Carol Davis", [82000, 7, 4.5]);
employeeData.set("David Brown", [90000, 10, 2.0]);
employeeData.set("Eva Green", [60000, 2, 3.5]);

//Function to calculate hike

function hikeCalculation(baseSalary: number,experience: number,rating: number): number {
    let variablePayPercentage : number = 0;
    let bonus : number = 0;
    let reward : number =0;
    

    if (rating >= 4.0)  {

        variablePayPercentage = 15;
        bonus = 1500;


    }
    else if (rating >= 3) {

        variablePayPercentage = 10;
        bonus = 1200;

    }

    else {
        variablePayPercentage = 3;
        bonus = 300;
    }

    if (experience >= 5){
     reward = 5000;

    }

    const hike =  (baseSalary * variablePayPercentage) / 100 + bonus + reward;
    const hikeValue : number = (hike / baseSalary) * 100;
    return hikeValue;

}

// map to store hike

const hikeMap: Map<string, number> = new Map();

for (const key of employeeData.keys()) {
  const data = employeeData.get(key)!;

  //const [baseSalary, experience, rating] = data;
 const baseSalary = data[0];
  const experience = data[1];
  const rating = data[2];

  const  hikePercentage  = hikeCalculation(baseSalary, experience, rating);
  hikeMap.set(key, hikePercentage);

  
}


console.log(hikeMap);

