const telegrambot = require('node-telegram-bot-api');

const bot = new telegramBot(process.env.BOT_TOKEN); // Get the token from the environment variable
const URL = process.env.URL; // get the Heroku config var URL
const BOT_TOKEN = process.env.BOT_TOKEN || ""; // get Heroku config var BOT_TOKEN
const PORT = process.env.PORT || 2000;

// Config the webhook for heroku
bot.telegrambot.setWebhook(`${URL}bot${BOT_TOKEN}`);
bot.startWebhook(`/bot${BOT_TOKEN}`, null, PORT);


/*const token ='980805135:AAEWOjsDBR7BX8S99TNnAHg34z9YThCarNY';
const api = new telegramBot(token, {webhook: true});
const options = {webhook: true};*/

/*const telegramBot1 = require('node-telegram-bot-api');
const bot = new telegramBot1('980805135:AAEWOjsDBR7BX8S99TNnAHg34z9YThCarNY');*/



bot.onText(/\/Help/, function(msg, match) {
var fromId = msg.from.id;
bot.sendMessage(fromId, "I cant't help you. \n/Help\n/Start\n/Question ");
});


/*
api.onText(/\/start/, function(msg, match) {
var fromId = msg.from.id;
api.sendMessage(fromId, "They call me TestBot. " +
"To help you I just have a few commands.\n/help\n/start\n/Question");
});
*/


// Matches /Question
bot.onText(/\/Question/, function Question(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Yes','No'],
        ['/Hide']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Do you like this?', opts);
});


bot.onText(/Yes/, function yes(msg) {
  const why = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Troublesome','Easy'],
        ['/Start','/Hide']
      ] 
    })
  };	
  bot.sendMessage(msg.chat.id, 'Why?', why);
});


bot.onText(/No/, function no(msg) {
  const why1 = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard : [
        ['Troublesome','Easy'],
        ['/Start','/Hide']
      ]  

    })
  };
  bot.sendMessage(msg.chat.id, 'Why?', why1);
});


/*bot.on(['/start', '/back'], msg => {

    let replyMarkup = bot.keyboard([
        ['/buttons', '/inlineKeyboard'],
        ['/start', '/hide']
    ], {resize: true});

    return bot.sendMessage(msg.from.id, 'Keyboard example.', {replyMarkup});

});*/
bot.onText(/\/Start/ , function no(msg) {
  const start = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard : [
       ['/Question'],
        ['/Start', '/Hide']
    ]

    })
  };
  bot.sendMessage(msg.chat.id, 'Menu', start);
});

bot.onText(/Easy/ , function no(msg) {
  const start = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard : [
       ['/Question'],
        ['/Start', '/Hide']
    ]

    })
  };
  bot.sendMessage(msg.chat.id, 'Menu', start);
});

bot.onText(/Troublesome/ , function no(msg) {
  const start = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard : [
       ['/Question'],
        ['/Start', '/Hide']
    ]

    })
  };
  bot.sendMessage(msg.chat.id, 'Menu', start);
});


bot.onText(/\/Hide/ , function ni(msg) {
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
  bot.sendMessage(msg.chat.id, 'Hide', hide);
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