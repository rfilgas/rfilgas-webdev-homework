let form =document.querySelector('form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // event.preventDefault();

  const inputs = document.querySelectorAll("input");
  let valid_inputs = 4
  const invalid = Array.from(inputs).filter( input => input.value === "");
  if(invalid.length === valid_inputs){
    console.warn("You must enter some data to submit this form.");
    return;
  }

  console.groupCollapsed("========= Form Submission =========");
  if(form.elements.username.value === ""){
    console.log("Username: no Submission")
  }
  else{
    console.log("Username: ", form.elements.username.value);
  }
  if(form.elements.email.value === ""){
    console.log("Email: no Submission")
  }
  else{
    console.log("Email: ", form.elements.email.value);
  }
  if(username.form.elements.newsletter_opt_in.value === ""){
    console.log("Newsletter: no Submission")
  }
  else if(username.form.elements.newsletter_opt_in.value === "y"){
    console.log("Newsletter: Yes")
  }
  else if(username.form.elements.newsletter_opt_in.value === "n"){
    console.log("Newsletter: No")
  }
  else{
    console.log("Newsletter: ", form.elements.newsletter_opt_in.value);
  }
  if(username.form.elements.registration_date.value === ""){
    console.log("Date: no Submission")
  }
  else{
    console.log("Date: ", form.elements.registration_date.value);
  }



  // Add your code here
}

