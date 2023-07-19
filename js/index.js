const register = document.getElementById('register')
const invite = document.getElementById('invite')
const buttonInvite = document.getElementById('buttoninvite')
const buttonRegister = document.getElementById('buttonregister')
const msgErro = document.getElementById('msgerro')


buttonRegister.addEventListener('click', () => {

    const email = document.getElementById('iemail')
    const emailValue = String(email.value)
    const msgEmail = document.getElementById('msgemail')
    msgEmail.innerHTML = `<strong>${emailValue}</strong>`
    
    const verification = emailValue.match(/@gmail.com/)

    console.log(verification);

    if (verification != null){
        register.classList.replace('registeron','registeroff')
        invite.classList.replace('inviteoff','inviteon')
    }else{
        msgErro.innerHTML = `Valid email required`
    }
    
})

buttonInvite.addEventListener('click', () => {

    register.classList.replace('registeroff','registeron')
    invite.classList.replace('inviteon','inviteoff')
})




