const form = document.getElementById('form')
const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
// Cap first word
function capId(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}


function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message

}

function showSuccess(input) {
  const formControl = input.parentElement 
   formControl.className = 'form-control success'
}

function chechRequired(inputArr) {
  inputArr.forEach(input => {
    
    if (input.value === '') {
     showError(input, `${capId(input.id)} is required`)
    } else {
      showSuccess(input)
   }
 })
}
function checkLength(input, min, max) {
  if (input.value.length < min ) {
    showError(input,`${capId(input.id)} must be at more than ${min} characters`)
  } else if(input.length > max) {
    showError(input, `${capId(input.id)} must be at least ${min} characters`)
  }
}

function CheckPasswordMatch(input, input2) {
  if (input.value !== input2.value) {
    showError(input2, `${capId(input.id)} must match `)
  }
}

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(input.value.trim())) {
    showError(input, 'Email is not correct')
  } else {
    showSuccess(input)
  }
 }



 function submitForm(e) {
  e.preventDefault()
  console.log(true);

  chechRequired([userName, email, password, password2])
  checkLength(userName, 4, 15)
  checkLength(password, 5, 20)
  CheckPasswordMatch(password, password2)
   checkEmail(email)
   
  
  

   form.reset()
 }

 form.addEventListener('submit', submitForm)

export { submitForm,capId }








