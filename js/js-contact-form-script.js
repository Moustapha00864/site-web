// 1. Initialisation
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('ko-Mwoqpx4zv9e6jE');
    
    // 2. Gestionnaire d'événement
    document.getElementById('sendBtn').addEventListener('click', function() {
        // 3. Récupération des données
        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone_number: document.getElementById("phone_number").value,
            msg_subject: document.getElementById("msg_subject").value,
            message: document.getElementById("message").value,
            time: new Date().toLocaleString('fr-FR')
        };

        // 4. Envoi avec feedback visuel
        emailjs.send("service_lp6nn0l", "template_bme44mh", params)
            .then(() => {
                document.getElementById("msgSubmit").innerHTML = "Message envoyé !";
                document.getElementById("msgSubmit").style.color = "green";
                document.getElementById("contactForm").reset();
            })
            .catch(error => {
                document.getElementById("msgSubmit").innerHTML = "Erreur d'envoi";
                document.getElementById("msgSubmit").style.color = "red";
                console.error("Erreur EmailJS:", error);
            });
    });
});