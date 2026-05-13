function registerUser(){
    let name=document.getElementById("regName").value;
    let email=document.getElementById("regEmail").value;
    let password=document.getElementById("regPassword").value;

    let user={
        name:name,
        email:email,
        password:password
    }

    localStorage.setItem("user",JSON.stringify(user))

    alert("register Successfully")

    window.location="login.html";
}

function loginUser(){
    let email=document.getElementById("loginEmail").value;
    let password=document.getElementById("loginPassword").value;

    let storedUser=JSON.parse(localStorage.getItem("user"))

    if(email===storedUser.email&&password===storedUser.password){
        localStorage.setItem("currentUser",storedUser.name)
        alert("Login Successfull")
        window.location="quiz.html"
    }
    else{
        alert("Invalid User Name And Password")
    }

}

function submitQuiz(){

    let score=0;
    let q1=document.querySelector('input[name="q1"]:checked')
    let q2=document.querySelector('input[name="q1"]:checked')
    let q3=document.querySelector('input[name="q1"]:checked')
    let q4=document.querySelector('input[name="q1"]:checked')
    let q5=document.querySelector('input[name="q1"]:checked')
    let q6=document.querySelector('input[name="q1"]:checked')
    let q7=document.querySelector('input[name="q1"]:checked')
    let q8=document.querySelector('input[name="q1"]:checked')
    let q9=document.querySelector('input[name="q1"]:checked')
    let q10=document.querySelector('input[name="q1"]:checked')

    if(q1) score+=Number(q1.value);
    if(q2) score+=Number(q2.value);
    if(q3) score+=Number(q3.value);
    if(q4) score+=Number(q4.value);
    if(q5) score+=Number(q5.value);
    if(q6) score+=Number(q6.value);
    if(q7) score+=Number(q7.value);
    if(q8) score+=Number(q8.value);
    if(q9) score+=Number(q9.value);
    if(q10) score+=Number(q10.value);

    let userName=localStorage.getItem("currentUser");

    document.cookie="Score="+score;

    let markList=JSON.parse(localStorage.getItem("markList"))||[];

    markList.push({
        name:userName,
        mark:score
    })

    localStorage.setItem("markList",JSON.stringify(markList))
    localStorage.setItem("score",score)
    window.location="result.html";
}

window.onload = function(){

    let username = document.getElementById("userName");
    let userMark = document.getElementById("userMark");
    let markTable = document.getElementById("markTable");

    if(username){

        let name = localStorage.getItem("currentUser");
        let score = localStorage.getItem("score");

        username.innerHTML = "Name : " + name;
        userMark.innerHTML = "Mark : " + score + " / 10";

        let markList = JSON.parse(localStorage.getItem("markList")) || [];

        let data = "";

        markList.forEach(function(item){

            data += `
            <tr>
                <td>${item.name}</td>
                <td>${item.mark}</td>
            </tr>
            `;
        });

        markTable.innerHTML = data;
    }
}