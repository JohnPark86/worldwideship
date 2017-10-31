<?php
if($_POST){
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $puCity = $_POST['puCity'];
    $puState = $_POST['puState'];
    $puZip = $_POST['puZip'];
    $dvCity = $_POST['dvCity'];
    $dvState = $_POST['dvState'];
    $dvZip = $_POST['dvZip'];
    $year = $_POST['year'];
    $make = $_POST['make'];
    $model = $_POST['model'];
    $running = $_POST['running'];
    $info = $_POST['info'];

    $message = "Name: " . $name . "\r\n" .
    		"Phone Number: " . $number . "\r\n" .
    		"e-mail:" . $email . "\r\n" . 
    		"Pick-up City: " . $puCity . "\r\n" .
    		"Pick-up State: " . $puState . "\r\n" .
    		"Pick-up Zip Code: " . $puZip . "\r\n" .
    		"Delivery City: " . $dvCity . "\r\n" .
    		"Delivery State: " . $dvState . "\r\n" .
    		"Delivery Zip Code: " . $dvZip . "\r\n" .
    		"Year: " . $year . "\r\n" .
    		"Make: " . $make . "\r\n" .
    		"Model: " . $model . "\r\n" .
    		"Running/Inop: " . $running . "\r\n" .
    		"Additional Information: " . $info;

    $headers = "From worldwideshippingllc Website \r\n";
    $headers .= "Content-type: text/html\r\n";
    
//send email
    $retVal = mail("Support@worldwideshippingllc.com", "New Quote Inquiry", $message, $headers);

    if( $retVal == true ) {
            echo "Your message has been sent successfully. \r\n We will contact you soon with a quote!";
         }else {
            echo "Your message could not be sent at this time. \r\n Please try again later or call us!";
         }
}
?>