const formEl = document.querySelector('.login-form');
const inputEmail = document.querySelector('[name="email"]');
const inputPassword = document.querySelector('[name="password"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData ={
        email,
        password,
    }

    if (email === '' || password === '') {
        window.alert("Please, fill in all form fields!")
    }else(console.log(formData))
    formEl.reset();
}
