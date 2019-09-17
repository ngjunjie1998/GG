<?php
include 'Telegram.php';
$bot_token = '980805135:AAEWOjsDBR7BX8S99TNnAHg34z9YThCarNY';
$telegram = new Telegram($bot_token);
$text = $telegram->Text();
$chat_id = $telegram->ChatID();
$content = array('chat_id' => $chat_id, 'text' => 'Hello');
$telegram->sendMessage($content);