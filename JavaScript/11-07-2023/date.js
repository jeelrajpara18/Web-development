// let date= new Date('February 31,2019');
// console.log(date.getDate());

// let date=new Date("1996-12-31")
// console.log(date.getDate())

// let date=new Date("1996-12-29");
// console.log(date.getDay());
// 0-sunday;
// 1-monday;
// 2-tuesday;
// 3-wednesday;
// 4-thursday;
// 5-friday;
// 6-saturday;

// let date=new Date("2/31/2011");
// console.log(date.getDate());

// let date=new Date()
// let day=date.getDay();
// let dayNames=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
// console.log(dayNames[day])

// let date=new Date("2/19/30");
// console.log(date.getFullYear());

// let date=new Date();
// console.log(date.getSeconds())

// let date = new Date("March 13 , 08 01:59")
// console.log(date.getHours());
// console.log(date.getMinutes());

// let date= new Date("1995-12-25T23:15:30");
// console.log(date.getTime());
// console.log(date.getHours());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// let date = new Date(2020,1,1);
// date.setDate(100);
// date.setDate(-100);
// console.log(date);

// 1. Write a JavaScript function to check whether an `input` is a date object or not.
// function is_date(input){
//     if(Object.prototype.toString.call(input)=="[object Date]"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(is_date("October 13, 2014 11:13:00"));
// console.log(is_date(new Date(86400000)));
// console.log(is_date(new Date(99,5,24,11,33,30,0)));
// console.log(is_date([1, 2, 4, 0]));

// 2. Write a JavaScript function to get the current date.
// function day(input){
//     let date = new Date();
//     let DD =  date.getDate();
//     let MM =  date.getMonth();
//     let YYYY =  date.getFullYear();

//     if(DD<10) DD='0'+DD;
//     if(MM<10) MM='0'+MM;
//     return (YYYY + input + MM + input + DD)
// }
// console.log(day("/"));
// console.log(day("-"));

//3. Write a JavaScript function to get the number of days in a month.
// function getNumberOfDays(year,month){
//     return new Date(month,year,0).getDate()
// }
// console.log(getNumberOfDays(1, 2012));
// console.log(getNumberOfDays(2, 2011));
// console.log(getNumberOfDays(9, 2012));
// console.log(getNumberOfDays(12, 2012));

//4. Write a JavaScript function to get the month name from a particular date.
// function month_name(month){
//     let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//     return months[month.getMonth()];
// }
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));

//5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).
// function compare_dates(date1, date2) {
//     if (date1 > date2) return "Date1 > Date2";
//     else if (date1 < date2) return "Date1 < Date2";
//     else return "Date1 = Date2";
// }
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
// console.log(compare_dates(new Date('11/12/2012 00:00'), new Date('11/14/2013 00:03')))

//6. Write a JavaScript function to add specified minutes to a Date object.
// function add_minutes(date,minutes){
//      return new Date(date.getTime() + minutes *60000);
// }
// console.log(add_minutes(new Date(2014,10,2), 30).toString());

//7. Write a JavaScript function to test whether a date is a weekend.
