let startDate = document.getElementById("date");
const button = document.getElementById("btn");
let age = document.getElementById("result")
// using this line we can't select the future dates
startDate.max = new Date().toISOString().split("T"[0]);

let diff = 0;

// console.log(startDate);
button.addEventListener("click", ()=> {
  let birthDate = new Date(startDate.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1; // we use + 1 because in case of month it is start from 0 "0 == January"
  let y1 = birthDate.getFullYear();

  let endDate = new Date();
  let d2 = endDate.getDate();
  let m2 = endDate.getMonth() + 1;
  let y2 = endDate.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else { // in this case if the current month is less than the birth month then we decrease the y3 by one and ad that with the next years remaning month
    y3--;
    m3 = 12 + (m2 - m1); 
  }
  if(m3<0){
    m3=11;
    y3--;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = 30 + (d2 - d1);
  }
  age.innerHTML =`Your age is ${y3}Years ${m3}Months ${d3}Days`
});


