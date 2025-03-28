function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone_number : document.getElementById("phone_number").value,
        msg_subject : document.getElementById("msg_subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_29krh3l","template_ehjk54v",parms).then(alert("Email Envoyé!!"))
}

