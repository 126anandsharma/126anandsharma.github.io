<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php'; // Adjust the path as needed

// Replace these with your own email settings
$smtpHost = 'smtp.gmail.com';
$smtpUsername = 'fiveanand0@gmail.com';
$smtpPassword = 'etatrnvemgjhsjev'; // Make sure to use an app-specific password if 2FA is enabled
$smtpPort = 587; // TLS port

if ($_POST) {
    $name = trim(stripslashes($_POST['name']));
    $email = trim(stripslashes($_POST['email']));
    $subject = trim(stripslashes($_POST['subject'] ?? 'Contact Form Submission'));
    $contact_message = trim(stripslashes($_POST['message']));

    $message = "";
    $message .= "Email from: " . $name . "<br />";
    $message .= "Email address: " . $email . "<br />";
    $message .= "Message: <br />";
    $message .= nl2br($contact_message);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = $smtpHost;
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUsername;
        $mail->Password = $smtpPassword;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $smtpPort;

        $mail->setFrom($smtpUsername, 'Your Name');
        $mail->addAddress('anand9862824581@gmail.com'); // Replace with your recipient email address

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $message;

        $mail->send();
        echo 'OK';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
