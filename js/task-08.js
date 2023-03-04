const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSumbit);

function handleSumbit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
}= event.currentTarget;


    if (email.value === "" || password.value === "") {
        return alert("Please, fill in all form fields!");
    
    } else {
        console.log(`login :${email.value}, Password :${password.value}`)
        event.currentTarget.reset();

    }
}