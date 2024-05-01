//.......................................Number methods...............................//
//.......................................parseInt()...................................//
// console.log(parseInt("10")); //10
// console.log(parseInt("12.45"));  //12
// console.log(parseInt("12",8));  //10
// console.log(parseInt("12 years")); //12
// console.log(parseInt("years 12")); //NaN
// console.log(parseInt("null"))  //NaN
// console.log(parseInt("")); //NaN
// console.log(parseInt("undefined")) //NaN
// console.log(parseInt("12",8));  //10 converts 12 to decimal
// console.log(parseInt("12",16));  //18 converts 12 to hexadecimal
// console.log(parseInt("0x12"));   //takes 12 ans converts it to hexadecimal
// console.log(parseInt("010"));  //10
// console.log(parseInt(" 90 "));  //90


//.......................................parseFloat().................................//
// console.log(parseFloat("10")); //10
// console.log(parseFloat("12.45")); //12.45
// console.log(parseFloat("years 12")); //NaN
// console.log(parseFloat("null")) //NaN
// console.log(parseFloat("undefined")); //NaN
// console.log(parseFloat(" 90 ")); //90
// console.log(parseFloat("10.00")); //10

//......................................isFinite()...................................//
//returns true if the number is finite else returns false
// console.log(Number.isFinite(2)) //true
// console.log(Number.isFinite(undefined)) //false
// console.log(Number.isFinite(null)) //false
// console.log(Number.isFinite("")) //false
// console.log(Number.isFinite(0)) //true
// console.log(Number.isFinite(0 / 0)) //false
// console.log(Number.isFinite(2 / 0)) //false
// console.log(Number.isFinite(4 / 2)) //true
// console.log(Number.isFinite(10 / NaN)) //false
// console.log(Number.isFinite(NaN / NaN)) //false
// console.log(Number.isFinite(NaN / 0)) //false

// => difference between Number and parseFloat is that parseFloat will return a number as soon as it encounters with a number bt Number will try to read the character after a number and returns NaN if cannot specify the character

// console.log(Number("3ex")); //NaN
// console.log(parseFloat("3ex")); //3

// console.log(Number('9,59 $')) // NaN
// console.log(parseFloat('9,59 $'))  //9

// => Number() converts binary octal and hexadecimal numbers to numbers whereas parseFloat() does not

// console.log(Number("0b101")); //5
// console.log(Number("0o110")); //72
// console.log(parseFloat("0b101")); //0
// console.log(parseFloat("0o110")); //0

// => Number() treats whitespaces as input and also parses input and return number and also number() takes booleans as number whereas parseFloat() will not parse whitespaces unless it contains numbers and will not even parse booleans

// console.log(Number("")); //0
// console.log(Number("\n")) //0
// console.log(Number("\n 120")); //120
// console.log(Number(true)); //1
// console.log(Number(false)); //0
// console.log(parseFloat("")); //NaN
// console.log(parseFloat("\n")) //NaN
// console.log(parseFloat("\n 120")); //120
// console.log(parseFloat(true)); //NaN
// console.log(parseFloat(false)); //NaN

//........................................toPrecision()............................//
//it returns a string representing a Number object
// console.log((0.002).toPrecision(4)); //0.002000
// console.log((1.002).toPrecision(4)); //1.002
// //0 before decimal is not consider as signinficant
// //This happens because in the first line we have only 3 significant digit after decimal and we want to precise till 4 significant digit hence 3 0's are added after 4
// //bt in the second line 1 is consider as significant hence we have already have 4 singinficant digits hence nothing will happen
// console.log((5.123466).toPrecision(3)); //5.12
//if we write null,undefined,empty string it will throw error


//.........................................toFixed()..............................//
// returns a string representing the given number with fixed notation
// console.log((12.45).toFixed(3)); //12.450
// console.log((5.129466).toFixed(3)); //5.129
// console.log((12.0002222).toFixed()); //12
// gives error for falsy values


//................................................Date()............................................//
// Date formates
// function getDateFormat(input) {
//     let date = new Date()
//     input=input.toUpperCase();
//     let dateObject = {
//         "YYYY-DD-MM": date.getFullYear() + "-" + date.getDate() + "-" + date.getMonth(),
//         "YYYY-MM-DD": date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
//         "YYYY/DD/MM": date.getFullYear() + "/" + date.getDate() + "/" + date.getMonth(),
//         "YYYY/MM/DD": date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate(),
//         "DD-MM-YYYY": date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
//         "MM-DD-YYYY": date.getMonth() + "-" + date.getDate() + "-" + date.getFullYear(),
//         "DD/MM/YYYY": date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
//         "MM/DD/YYYY": date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
//     };
//     return dateObject[input];
// }
// console.log(getDateFormat("YYYY-DD-MM"))
// console.log(getDateFormat("yyyy-mm-dd"))
// console.log(getDateFormat("mm/dd/yyyy"))


// gereral date function
// function gereralDateFunction(input, type) {
//     let date = new Date();
//     switch (type.toLowerCase()) {
//         case "months":
//             date.setMonth(date.getMonth() + input);
//             break;
//         case "years":
//             date.setFullYear(date.getFullYear() + input);
//             break;
//         case "days":
//             date.setDate(date.getDate() + input);
//             break;
//         case "weeks":
//             date.setDate(date.getDate() + input * 7);
//             break;
//         default:
//             return "Invalid";
//     }
//     return date;
// }
// console.log(gereralDateFunction(2, "Years"));
// console.log(gereralDateFunction(2,"months"));
// console.log(gereralDateFunction(2,"weeks"));
// console.log(gereralDateFunction(2,"days"));

//..................................................getUTC & getDate---------------------------------------//
// let date = new Date();
// console.log(date.getHours());
// console.log(date.getUTCHours());
// UTC returns the date and time according to the universal time zone whereas get returns the date and time of local time zone

//..............................................iso date string()...........................................//
//it returns all the date into its specific date formats which is YYYY-MM-DD : hh:mm:ss its timezone is always UTC time zone with suffix Z
// let date  = new Date()
// console.log(date.toISOString());

//..............................................questions.................................................//
// => Write a JavaScript function to test whether a date is a weekend
// function isWeekend(date){
//      let curDate = new Date(date);
//      if(curDate.getDay()==6 || curDate.getDay()==0 ){
//         return "It's Weekend";
//      }
//      else{
//         return "It's Working Day";
//      }
// }
// console.log(isWeekend("July 09,2023")); //It's Weekend
// console.log(isWeekend("2023-07-12")); //It's Working Day

// => Write a JavaScript function to get the difference between two dates in days.
// function dateDifference(date1, date2) {
//     let dt1 = new Date(date1);
//     let dt2 = new Date(date2);
//     let result = dt2.getTime() - dt1.getTime()
//     return Math.floor(result / (1000 * 60 * 60 * 24));
// }
// console.log(dateDifference('04/02/2014', '11/04/2014')); //216
// console.log(dateDifference('07/12/2023','07/07/2023')); //-5

// =>  Write a JavaScript function to get the last day of a month.
// function lastDay(year,month){
//     return new Date(year,month+1,0).getDate();
// }
// console.log(lastDay(2014,0)); //31
// console.log(lastDay(2023,1)); //28

// => Write a JavaScript function to calculate 'yesterday's day.
// function getYesterday(date) {
//     let dt = new Date(date);
//     dt.setDate(dt.getDate()-1);
//     return dt.toString();
// }
// console.log(getYesterday('07-11-2023'));
// console.log(getYesterday('Nov 15, 2014'));
// console.log(getYesterday('Nov 16, 2015'));

// => Write a JavaScript function to get the maximum date from an array of dates.
// function maxDate(date){
//     let dt = date.map((dateString)=>new Date(dateString));
//     return new Date(Math.max(...dt));
// }
// console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']))

// => Write a JavaScript function to get the minimum date from an array of dates.
// function minDate(date){
//     let dt = date.map((dateString)=> new Date(dateString));
//     return new Date(Math.min(...dt));
// }
// console.log(minDate(['2015/02/01', '2015/02/02', '2015/01/03']))

// => Write a JavaScript function that returns the number of minutes in hours and minutes.
// function timeConvert(input) {
//     let num = input;
//     let h = (num / 60);
//     let hours = Math.round(h);
//     let m = (h - hours) * 60;
//     let minutes = Math.round(m);
//     return num + " minutes= " + hours + "hour(s) " + minutes + "minutes(s)";
// }
// console.log(timeConvert(200))

// => Write a JavaScript function to get the number of days in a year.
// function daysInYear(year) {
//     if (year % 4 == 0) {
//         return 366;
//     }
//     else {
//         return 365;
//     }
// }
// console.log(daysInYear(2024))

// => Write a JavaScript function to get the quarter (1 to 4) of the year.
// function quarterOfYear(year){
//     let month = year.getMonth() + 1;
//     return (Math.ceil(month/4))
// }
// console.log(quarterOfYear(new Date(2015,1,21))); //1
// console.log(quarterOfYear(new Date(2015,11,12))); //3

// => Write a JavaScript function to count the number of days passed since the year began.
// function daysPassed(date) {
//     let cur = new Date(date.getTime());
//     let previous = new Date(date.getFullYear(), 0, 1);
//     return Math.ceil((cur - previous + 1) / (1000 * 60 * 60 * 24));
//   }
//   console.log(daysPassed(new Date(2015, 0, 15)));
//   console.log(daysPassed(new Date()))

// => Write a JavaScript program to calculate age.
// function getAge(birthDate) {
//     let today = new Date();
//     let bday = new Date(birthDate);
//     let age = today.getFullYear() - bday.getFullYear();
//     return age;
// }
// console.log(getAge(new Date(2004, 2, 18)))

// => Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).
// function getDays(date){
//     let days=['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
//     let dateIndex = date.getDay();
//     return days[dateIndex]
// }
// console.log(getDays(new Date()));
// console.log(getDays(new Date(2030-10-5)))

// => Write a JavaScript function to get an ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday).
// function numericDate(date){
//     let days = date.getDay();
//     if(days==0){
//         return 7;
//     }
//     else{
//         return days;
//     }
// }
// console.log(numericDate(new Date()))
// console.log(numericDate(new Date("2023-7-9")))

// => Write a JavaScript function to get a full text representation of a month, such as January or June.
// function getMonths(month){
//     let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//     let monthIndex = month.getMonth();
//     return months[monthIndex]
// }
// console.log(getMonths(new Date()))
// console.log(getMonths(new Date("2023-10-15")));

// => Write a JavaScript function to get a two-digit year representation.
// function sortYear(year) {
//     let date = new Date(year);
//     return String(date.getFullYear()).substring(2);
// }
// console.log(sortYear("2023"));
// console.log(sortYear("2024"))

// => Write javascript program to print number of weekend and working day in a month
// function workingAndWeekDays(year, month) {
//     let startDate = new Date(year, month - 1, 1);
//     let endDate = new Date(year, month, 0);
//     let weekCount = 0;
//     let weekendCount = 0;
//     for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
//         let date = i.getDay();
//         if (date == 0 || date == 6) {
//             weekendCount++;
//         }
//         else {
//             weekCount++;
//         }
//     }
//     return { workingDay:weekCount, weekend:weekendCount }
// }
// console.log(workingAndWeekDays(2023, 9))
// console.log(workingAndWeekDays(2024,2))

// => Number of working days in a year
// function WorkingDays(year){
//     let totalWorkingDays = 0;
//     let startDate = new Date(year,0,1);
//     let endDate = new Date(year,11,31);
//     for(let i = startDate;i<=endDate;i.setDate(i.getDate()+1)){
//         let date = i.getDay();
//         if(date!==0 && date!==6){
//             totalWorkingDays ++;
//         }
//     }
//     return totalWorkingDays;
// }
// console.log(WorkingDays(2023))