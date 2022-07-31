const calculateTime = (date2, date1) => {
  let num_1 = new Date(date1);
  let num_2 = new Date(date2);
  if(String(num_2) === "Invalid Date" || String(num_1) === "Invalid Date"){
    return String('Error: Invalid Input Provided.');
  }
  ms_year = 3.154e+10
  ms_month = 2.628e+9
  let elapsed = Math.abs(num_2 - num_1);
  let years = elapsed / ms_year
  let month_secs = (years%1) * ms_year
  let months = month_secs / ms_month
  years = Math.round(years)
  months = Math.round(months)
  let month_v_months = null
  if(months === 1){
    month_v_months = ' month';
  }
  else{
    month_v_months = ' months'
  }
  return String('Time elapsed ' + years + ' years, ' + months + month_v_months)
  // Given two dates, calculate and return the amount of time elapsed in years and months
};


console.log(calculateTime(1635176171332, 'May 1, 1995'));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, '1975-8-11'));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, 'birthdate'));
// Error: Invalid input provided.