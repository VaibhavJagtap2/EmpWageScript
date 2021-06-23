//UC1 if else Condition
{
const IS_ABSENT = 0
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("UC1 - Employee is ABSENT");
} else {
    console.log("UC1 - Employee is PRESENT");
    }
}

//UC2 Switch Case
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HRS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HRS;
        break;
    default:        
}

let empWage = empHrs * WAGE_PER_HR;
console.log("UC2 - Emp Wage: " + empWage);