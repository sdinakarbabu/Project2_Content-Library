loginContainer.addEventListener('click',()=>{
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





