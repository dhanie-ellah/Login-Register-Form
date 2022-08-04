// GLOBAL VARIABLES
let login = document.getElementById('login')
let register = document.getElementById('register')
let loginForm = document.getElementById('login-form')
let registerForm = document.getElementById('register-form')
let body = document.getElementById('body')
let darkThemeRegister = document.getElementById('dark-register')
let lightThemeRegister = document.getElementById('light-register')
let darkThemeLogin = document.getElementById('dark-login')
let lightThemeLogin = document.getElementById('light-login')

// SWITCHING BETWEEN LOGIN AND REGISTER
login.addEventListener('click', ()=>{
     loginForm.style.display = 'block'
     registerForm.style.display = 'none'
})

register.addEventListener('click', ()=>{
     registerForm.style.display = 'block'
     loginForm.style.display = 'none'
})

// THEME TOGGLE
darkThemeRegister.addEventListener('click', () => {
     if(body.className === 'body'){
          body.className = 'toggle'
     } else{
          body.className = 'body'
     }
})

lightThemeRegister.addEventListener('click', () => {
     if(body.className === 'toggle'){
          body.className = 'body'
     } else{
          body.className = 'toggle'
     }
})

darkThemeLogin.addEventListener('click', () => {
     if(body.className === 'body'){
          body.className = 'toggle'
     } else{
          body.className = 'body'
     }
})

lightThemeLogin.addEventListener('click', () => {
     if(body.className === 'toggle'){
          body.className = 'body'
     } else{
          body.className = 'toggle'
     }
})

// PREVENTING DEFAULT RELOAD
const registeruser = (event) => {
     event.preventDefault()
}

const loginuser = (event) => {
     event.preventDefault()
}