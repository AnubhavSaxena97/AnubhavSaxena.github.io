<?php

// Enter your e-mail address.
$to = 'anubhavsaxena97@gmail.com';

if ( isset($_GET['test']) ) {
	mail($to, 'Message from contact form', 'It\'s working!', 'From: ' . $to . "\r\n");
	die('Testing e-mail has been sent.');
}

function isValidEmail( $email = null )
{
	return preg_match( "/^
	[\d\w\/+!=#|$?%{^&}*`'~-]
	[\d\w\/\.+!=#|$?%{^&}*`'~-]*@
	[A-Z0-9]
	[A-Z0-9.-]{0,61}
	[A-Z0-9]\.
	[A-Z]{2,6}$/ix", $email );
}

if ( !empty($_POST['name']) && isValidEmail($_POST['email']) && !empty($_POST['text'])) {
	
	$message = $_POST['text'];
	$headers = 'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>' . "\r\n" . 'Reply-To: ' . $_POST['email'];
	
	if ( mail($to, 'Message from contact form', $message, $headers) ) echo 'sent';
	
} else {
	echo 'invalid';
}
