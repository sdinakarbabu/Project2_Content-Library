// Page Changing
let signupContainer = document.getElementById("signupContainer");
let loginContainer = document.getElementById("loginContainer");
let changeSlideCreate = document.getElementById("changeSlideCreate");
let changeSlideLoginEle = document.getElementById("changeSlideLogin");

changeSlideLoginEle.addEventListener('click',()=>{
    signupContainer.classList.toggle("testLeft");
    loginContainer.classList.toggle("testLeft");
})
changeSlideCreate.addEventListener('click',()=>{
    signupContainer.classList.toggle("testLeft");
    loginContainer.classList.toggle("testLeft")
})


// Login Page Details
let usernameEle = document.getElementById("username");
let passwordEle = document.getElementById("password");
let loginSubmitEle = document.getElementById("loginSubmit");
let errorMessageEle = document.getElementById("errorMessage");
   
loginSubmitEle.addEventListener('click',()=>{
    var user =usernameEle.value;
    var pass = passwordEle.value;
    try {
        if(user !== user.toLowerCase()){
            
            errorMessageEle.textContent = "Entered details Incorrect"
        }
        else {
            let pattern =/^[a-z]+[a-z]$/;
            if(pattern.test(user)){
               document.cookie = `User =${user}`;
               errorMessageEle.textContent=`${document.cookie}`
               let data = {
                    User:user,
                    password:pass
                }
                console.log(data);
                window.location.href='../html/home.html';
                
            }else {
                errorMessageEle.textContent="Entered details Incorrect"
            }
            
        }

        //Login Details
        let Data = {
            username:Username,
            password:Password
        }


        let url = "http://localhost:3000/login"
        let options = {
            method :"post",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(data)
        }

        let fetchData = fetch(url,options) 
        .then((response) =>{return response.json()})

        console.log(fetchData)


    }
    catch(err){
        errorMessageEle.textContent = err
    }
   
})
   



// Sign up page



let signupSubmitEle = document.getElementById("signupSubmit");
let errorIssuesEle = document.getElementById("errorIssues");

let firstNamePattern =/^[A-Z a-z]+[a-z]$/;
let lastNamePattern =/^[a-z]+[a-z]$/;
let usernamePattern =/^[a-z]+[a-z]$/;
let emailPattern = /^[a-z]+[a-z \d]+@[a-z]+?\.+[a-z]{2,3}$/;
let contactNumber = /^[0-9]+\d$/;


let Name="";
let Username="";
let Email="";
let Contact="";
let Password="";


signupSubmitEle.addEventListener('click',()=>{
    let firstNameEle = document.getElementById("firstName").value;
    let secondNameEle = document.getElementById("secondName").value;
    let usernameEle = document.getElementById("username").value;
    let emailEle = document.getElementById("email").value;
    let contactNumberEle = document.getElementById("contactNumber").value;
    let createPasswordEle = document.getElementById("createPassword").value;
    let confirmPasswordEle = document.getElementById("confirmPassword").value;
    try {
        // Name Checking
        if((firstNamePattern.test(firstNameEle)) && (lastNamePattern.test(secondNameEle)) && ((firstNameEle || secondNameEle) != "")){ 
            Name = firstNameEle+" "+secondNameEle;
        }else {
            errorIssuesEle.textContent = "Enter Correct Name";
        }

        // Username Verify
        if(usernamePattern.test(usernameEle)){
            Username = usernameEle;
            errorIssuesEle.textContent ="successfull"

        }else{
            errorIssuesEle.textContent = "Enter Correct Email";
    
        }

       // Email verify
        if(emailPattern.test(emailEle)){
            Email = emailEle;
            errorIssuesEle.textContent ="successfull"

        }else{
            errorIssuesEle.textContent = "Enter Correct Email";
    
        }

        //Number Verify Completed
        if((contactNumber.test(contactNumberEle))&& (contactNumberEle !="")){
            Contact = contactNumber;
            errorIssuesEle.textContent ="successfull"
        }
        else {
            errorIssuesEle.textContent = "Enter Correct Number";
        }

        // Password verify
        if(createPasswordEle === confirmPasswordEle){
            Password = createPasswordEle;
            window.location.href='../html/home.html';

        }else {
            errorIssuesEle.textContent = "Password Not Matched";
        }




        //Register Details
        let Data = {
            name:Name,
            username:Username,
            email:Email,
            contact:Contact,
            password:Password
        }
        let url = "http://localhost:3000/register"
        let options = {
            method :"post",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(data)
        }

        let fetchData = fetch(url,options) 
        .then((response) =>{return response.json()})

        console.log(fetchData)
    
    
    }catch(err){
        console.log(err)
    }
})





