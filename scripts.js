const form = document.getElementById('form')
const username = document.getElementById('username')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', e => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value
  const lastnameValue = lastname.value
  const emailValue = email.value
  const passwordValue = password.value

  if (usernameValue === '') {
    setErrorFor(username, 'First Name Cannot be empty')
  } else {
    setSuccessFor(username)
  }

  if (lastnameValue === '') {
    setErrorFor(lastname, 'Last Name cannot be empty')
  } else {
    setSuccessFor(lastname)
  }

  if (emailValue === '') {
    setErrorFor(email, 'Looks like this is not an email')
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, 'email@example/com')
  } else {
    setSuccessFor(email)
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty')
  } else {
    setSuccessFor(password)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  //adicionar mensagem de erro
  small.innerText = message

  //adicionar a classe de erro
  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement

  //  classe de sucesso
  formControl.className = 'form-control success'
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}
