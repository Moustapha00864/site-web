document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('ko-Mwoqpx4zv9e6jE');
    
    // 2. Gestionnaire d'événement
    document.getElementById('sendBtn').addEventListener('click', function() {
        // 3. Récupération des données
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone_number = document.getElementById("phone_number").value;
        const msg_subject = document.getElementById("msg_subject").value;
        const message = document.getElementById("message").value;
        

        // 4. Vérification de la validité des champs
        if (name === "" || email === "" || phone_number === "" || msg_subject === "" || message === "") {
            document.getElementById("msgSubmit").innerHTML = "Veuillez bien remplir tous les champs !";
            document.getElementById("msgSubmit").style.color = "red";
            msgSubmit.style.fontSize = "20px"; // Réduction de la taille du texte
            document.getElementById("msgSubmit").style.display = "block"; // Affiche le message d'erreur
        } else {
            // 5. Envoi avec feedback visuel
            const params = {
                name: name,
                email: email,
                phone_number: phone_number,
                msg_subject: msg_subject,
                message: message,
                time: new Date().toLocaleString('fr-FR')
            };

            emailjs.send("service_lp6nn0l", "template_bme44mh", params)
                .then(() => {
                    document.getElementById("msgSubmit").innerHTML = "Message envoyé merci !";
                    document.getElementById("msgSubmit").style.color = "green";
                    msgSubmit.style.fontSize = "20px"; // Réduction de la taille du texte
                    document.getElementById("contactForm").reset();
                })
                .catch(error => {
                    document.getElementById("msgSubmit").innerHTML = "Erreur d'envoi";
                    document.getElementById("msgSubmit").style.color = "red";
                    console.error("Erreur EmailJS:", error);
                });
        }
    });
});
