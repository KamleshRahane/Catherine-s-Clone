
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "from_message-error");
    messageElement.classList.add(`form_message-${type}`);
};

function setInputError(inputElement, message) {
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent= message;
};

function clearInputError(inputElement) {
    inputElement.classList.remove("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
};

document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");


    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    //perform the authentication login
let users = JSON.parse(localStorage.getItem("users"))||[];
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        let name = document.getElementById("loginname").value;
        let pass = document.getElementById("loginpass").value;
        let flag = false;
        users.map(el=>{
            if((el.name==name||el.email==name)&&el.password==pass){
                localStorage.setItem("loggedin",JSON.stringify(el.name))
                window.location.href=`/landing_page/index.html`
                flag= true
            }
        })
        if(!flag){
        setFormMessage(loginForm, "error", "Invalid username/password combination");
        }
    });
createAccountForm.addEventListener("submit", e=>{
    e.preventDefault();

    let user={
        name:document.getElementById("signupUsername").value,
        email:document.getElementById("createmail").value,
        password:document.getElementById("createpass").value
    }
users.push(user)
    localStorage.setItem("users",JSON.stringify(users))
    window.location.reload();

})

    document.querySelectorAll(".form_input").forEach(inputElement =>{
        inputElement.addEventListener("blur", e=> {
            if (e.target.id ==="signupUsername" && e.target.value.length > 0 && e.target.value.length< 10){
                setInputError(inputElement, "Username must be at least 10 charactor in length");

            }else{
                clearInputError(inputElement)
            }
        })
    })


});