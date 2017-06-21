<?php


require 'E:\UniServer\UniServerZ\www\WeatherBot\vendor\autoload.php';
use Mpociot\BotMan\BotManFactory;
use Mpociot\BotMan\BotMan;

$config = [
    'hipchat_urls' => [
        'YOUR-INTEGRATION-URL-1',
        'YOUR-INTEGRATION-URL-2',
    ],
    'nexmo_key' => 'YOUR-NEXMO-APP-KEY',
    'nexmo_secret' => 'YOUR-NEXMO-APP-SECRET',
    'microsoft_bot_handle' => 'YOUR-MICROSOFT-BOT-HANDLE',
    'microsoft_app_id' => 'YOUR-MICROSOFT-APP-ID',
    'microsoft_app_key' => 'YOUR-MICROSOFT-APP-KEY',
    'slack_token' => 'YOUR-SLACK-TOKEN-HERE',
    'telegram_token' => 'YOUR-TELEGRAM-TOKEN-HERE',
    'facebook_token' => 'EAALXUfo1TWYBAPQQbCDiUkU2ZAWo7dHeqZAVw7r2UPG7O1dqmTdWgWD5GMuZAHUBcdhTzLJOug8tQIboMX0SXtzRc0VgyguiA9hmiieLQo5cuZBGy8Bhx9pMrBi5qIljQYZBzdfYeK7sx6m91kJQqKu6nT2FGRMdn1EskeZADhEw7H2DZB1Oxei',
    'facebook_app_secret' => '397de4e5258e678ab69df9365ea1a925',
    'wechat_app_id' => 'YOUR-WECHAT-APP-ID',
    'wechat_app_key' => 'YOUR-WECHAT-APP-KEY',
];


// create an instance
$botman = BotManFactory::create($config);
$botman->verifyServices('123456mnnmnsdfm1234324adsfkasdf12232434234njsndjk');


// give the bot something to listen for.
$botman->hears('hello', function (BotMan $bot) {
    $bot->reply('Hello yourself.');
});

// start listening
$botman->listen();
die("Whatcha say?");
?>