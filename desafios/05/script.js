const btnLogin = document.querySelector('.btn-login');
const form = document.querySelector('form');

btnLogin.addEventListener('click', (event)=>{
   event.preventDefault();
   form.classList.add("form-hide");
});

form.addEventListener('animationend', (event)=>{
   if (event.animationName === 'down'){
      form.style.display = 'none';
   }
});


