// const endDate =  "20 March 2024 10:00 PM"

const endDate = prompt("enter the date & time -> MM/DD/YYYY"); 
// const formattedDate = `${endDate.getDate()}-${endDate.getMonth() + 1}-${endDate.getFullYear()}`;


document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  // Date is a property of JS which conver the date into miliseconds
  const end = new Date(endDate);
  // new Date() = it provides the current date time
  const now = new Date(); 
  const diff = (end - now) / 1000;
  // console.log(diff);
  // convert into days
  const days = Math.floor(diff / (24 * 3600));
  inputs[0].value = days;
  // convert into hours
  const hours = Math.floor((diff / 3600) % 24);
  inputs[1].value = hours;
  // convert into minutes
  const minutes = Math.floor((diff / 60) % 60);
  inputs[2].value = minutes;
  // convert into seconds
  const seconds = Math.floor(diff % 60);
  inputs[3].value = seconds;
}
clock();
setInterval(() => {
  clock();
}, 1000);
