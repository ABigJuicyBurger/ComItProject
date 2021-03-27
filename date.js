document.getElementById("date").innerHTML = formatAMPM();

function formatAMPM() {
var d = new Date (),
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
return days[d.getDay()] + " " + months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();
    
}