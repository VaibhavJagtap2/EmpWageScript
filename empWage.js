//UC3 Switch Case
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
NUM_OF_WORKING_DAYS = 20;
MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck) {
switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HRS;
    case IS_FULL_TIME:
        return FULL_TIME_HRS;
    default:        
        return 0;
    }
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HR;
console.log("Total Days: " + totalWorkingDays + " Total Hrs: " +totalEmpHrs+ " Emp Wage: " + empWage);


