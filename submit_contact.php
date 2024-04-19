<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $firstname = $_POST['firstname'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Adresse e-mail où vous souhaitez recevoir le message
    $to = "carl.pichard@hotmail.fr";
    
    // Sujet de l'e-mail
    $subject = "Nouveau message depuis le formulaire de votre site";
    
    // Corps de l'e-mail
    $body = "Prénom: " . $firstname . "\n";
    $body .= "Nom: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Message: " . $message . "\n";
    
    // Envoi de l'e-mail
    mail($to, $subject, $body);
    
    // Affichage d'un message de confirmation
    echo "Votre message a été envoyé avec succès!";
}
?>
