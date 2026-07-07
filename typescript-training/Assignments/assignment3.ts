let students: string[] = ["Suresh","Mahesh","Naresh"] ;
let marks : number[] = [75, 80, 82] ;
let updatedMarks : number[] = [];
let total: number = 0;
for (let i = 0; i < marks.length; i++) {

    updatedMarks[i] = marks[i]! + 10;
    //console.log(updatedMarks);
    total+= updatedMarks[i]!;
    //console.log(total);
    console.log(`${students[i]}: ${updatedMarks[i]}`);
    
    
}
let  averageMarks: number = total / updatedMarks.length;
console.log(`Average Marks : ${averageMarks}`);