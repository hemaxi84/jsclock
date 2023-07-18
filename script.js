const months = ["January","February","March", "April", "May", "June", "July", "August", "September", "October","November","December",
];
const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

const clockDisplay = document.getElementById("clockDisplay");
const timezoneDisplay = document.getElementById("timezoneDisplay");
const dateDisplay = document.getElementById("dateDisplay");
const timezoneSelect = document.getElementById("timezone");

function showtime() {

    let date = new Date();
    
    // convert date to given time zone select
    let tzdate = date.toLocaleString("en-US", {
        timeZone: timezoneSelect.value,
    });

    //string to date object
    todaytime = new Date(tzdate);

    //set am pn and 12 hour format
    let hours = todaytime.getHours();
    let ampm = hours > 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours;

    //add 0 to look align
    hours= String(hours).padStart(2,"0");
    minutes= String(todaytime.getMinutes()).padStart(2,"0");
    seconds= String(todaytime.getSeconds()).padStart(2,"0");

    clockDisplay.innerHTML =`${hours} : ${minutes} : ${seconds} ${ampm}`;

    setTimeout(showtime, 1000);

}

function showDate() {

    timezoneDisplay.innerHTML = timezoneSelect.value;
    let date = new Date();
    dateDisplay.innerHTML = `${date.getDate()} ${ months[date.getMonth()]}  ${date.getFullYear()} ${weekday[date.getDay()]}`;

    
    showtime();
}

showDate();



