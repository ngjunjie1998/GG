

var telegramBot = require('node-telegram-bot-api');
var token ='980805135:AAEWOjsDBR7BX8S99TNnAHg34z9YThCarNY';
var api = new telegramBot(token, {polling: true});
const options = {polling: true};
const telegramBot1 = require('node-telegram-bot-api');

const bot = new telegramBot1('980805135:AAEWOjsDBR7BX8S99TNnAHg34z9YThCarNY');

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('3TPT Safety Bot is now running!');
});

api.onText(/\/Help/, function(msg, match) {
var fromId = msg.from.id;
api.sendMessage(fromId, "I cant't help you. \n/Help\n/Start\n/Question ");
});


/*
api.onText(/\/start/, function(msg, match) {
var fromId = msg.from.id;
api.sendMessage(fromId, "They call me TestBot. " +
"To help you I just have a f ew commands.\n/help\n/start\n/Question");
});
*/


// Matches /Question
api.onText(/\/Question/, function Question(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Yes','No'],
        ['/Hide']
      ]
    })
  };
  api.sendMessage(msg.chat.id, 'Do you like this?', opts);
});


api.onText(/Yes/, function yes(msg) {
  const why = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Troublesome','Easy'],
        ['/Start','/Hide']
      ] 
    })
  };	
  api.sendMessage(msg.chat.id, 'Why?', why);
});


api.onText(/No/, function no(msg) {
  const why1 = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard : [
        ['Troublesome','Easy'],
        ['/Start','/Hide']
      ]  

    })
  };
  api.sendMessage(msg.chat.id, 'Why?', why1);
});


/*bot.on(['/start', '/back'], msg => {

    let replyMarkup = bot.keyboard([
        ['/buttons', '/inlineKeyboard'],
        ['/start', '/hide']
    ], {resize: true});

    return bot.sendMessage(msg.from.id, 'Keyboard example.', {replyMarkup});

});*/
api.onText(/\/Start/ , function no(msg) {
  const start = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard : [
       ['/Question'],
        ['/Start', '/Hide']
    ]

    })
  };
  api.sendMessage(msg.chat.id, 'Menu', start);
});

api.onText(/Easy/ , function no(msg) {
  const start = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard : [
       ['/Question'],
        ['/Start', '/Hide']
    ]

    })
  };
  api.sendMessage(msg.chat.id, 'Menu', start);
});

api.onText(/Troublesome/ , function no(msg) {
  const start = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard : [
       ['/Question'],
        ['/Start', '/Hide']
    ]

    })
  };
  api.sendMessage(msg.chat.id, 'Menu', start);
});


api.onText(/\/Hide/ , function ni(msg) {
  const hide = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      ReplyKeyboardRemove
 : [
       ['/Question'],
        ['/Start', '/Stop']
    ],remove_keyboard: true

    })
  };
  api.sendMessage(msg.chat.id, 'Hide', hide);
});

/*chat_id: 11764944,
	api.onText(/\/Hide/, function no(msg) {
  api.sendMessage(msg.chat.id, 'Hi', start);
reply_markup: JSON.stringify({
    remove_keyboard: true
})}); */


/*api.onText(/\/Hide/, function no(msg) {
   
const Hide = { text: 'some text',
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
    hide_keyboard: true
})
};
});*/


console.log("TestBot has started. Start conversations in your Telegram.");
app.listen(process.env.PORT || 5000);
bot.start();

////////////////////////////
