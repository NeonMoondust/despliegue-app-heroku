let form = document.querySelector('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

form.onsubmit = async (event) => {
    event.preventDefault();
    let username_data = username.value;
    let email_data = email.value;
    let password_data = password.value;
    let fecha = new Date();

    try {
        await fetch("/users", {
            method: "post",
            body: JSON.stringify({
                username_data,
                email_data,
                password_data,
                fecha
            }),
        });
        location.reload();
        alert('Usuario registrado Correctamente');
    } catch (e) {
        console.log(e);
        alert("Something went wrong");
    }
}