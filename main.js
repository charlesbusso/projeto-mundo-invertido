
const txtName = document.getElementById(txtName)
const txtEmail = document.getElementById(txtEmail)
const txtLevel = document.getElementById(txtLevel)
const txtCharacter = document.getElementById(txtCharacter)
const btnSubscribe = document.getElementById(btnSusbribe)

btnSubscribe.addEventListener('click', () => {
   const subscription = {
    nome: txtName.ariaValueText,
    email: txtEmail.ariaValueText,
    level: txtLevel.ariaValueMax,
    character: txtCharacter.ariaValueText,
   }

   console.log(subscription)
    
})

