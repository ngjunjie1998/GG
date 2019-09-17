const TeleBot = require('telebot');
const bot = new TeleBot('986210722:AAF4k3pIYBhquvknmdGGR1d8K9rdqsPeU74');
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('3TPT Safety Bot is now running!');
});

bot.on('text', (msg) => {
    if(msg.text.toLowerCase().includes("/keyword") || msg.text.toLowerCase().match("/keywords")){
    return msg.reply.text('Keyword masterlist as stated below:\n/start /hello\n/rc / Route Card\n/fe / Fire Evacuation\nThank you\nHello / hi\nSafety Advocate\nSafety Targets\nSafety Stoppage\nLevel 2 / Training Inspection\nCat Status\nWRC / Work Rest Cycle\nTemperature Taking\nHydration Plan\nHeat Injury\nAVPU\nMan Down Drill / MDD\nTag Line/ Tagline\nArmy Core Ideas\nHazard / Unsafe Act / Near Miss / Accident / Incident');
  }
   if(msg.text.toLowerCase().includes("hello") || msg.text.toLowerCase() === "hi"){
    return msg.reply.text('Hello!');
  }
  if(msg.text.toLowerCase().includes("/start") || msg.text.toLowerCase().includes("/hello")){
    return msg.reply.text('Good Day! Do feel free to ask anything regarding safety in 3TPT!!');
  }
  if(msg.text.toLowerCase().includes("safety advocate") || msg.text.toLowerCase().includes("safety advocates")){
		return msg.reply.text("Safety Advocates are Our Battalion's very own NSF Safety Ambassadors who are driven to spread awareness of safety as well as ensure that there are no Safety breaches.");
  }
  if(msg.text.toLowerCase().includes("safety targets") || msg.text.toLowerCase().includes("safety target")){
		return msg.reply.text("Army WY19/20 Safety Targets, \n1: Zero Fatal Injuries \n2: Zero Major Injuries\n3: Zero Heat Strokes \n4:Zero Negligent Discharge of Live Ammunition \n5:Zero Severe Vehicle Incidents");
  }
  if(msg.text.toLowerCase().includes("safety stoppage") || msg.text.toLowerCase().includes("safety pause")|| msg.text.toLowerCase().includes("stoppage")|| msg.text.toLowerCase().includes("pause")){
		return msg.reply.text("Anyone who spots a safety breach can call for an immediate stop to it and report to the Conducting Officer..");
  }
  if(msg.text.toLowerCase().includes("level 2") || msg.text.toLowerCase().includes("training inspection")){
		return msg.reply.text("Training Inspection Guide => https://form.gov.sg/#!/5d2ed1bad1db4d0018c5f494");
  }
  if(msg.text.toLowerCase().includes("CAT status") || msg.text.toLowerCase().includes("cat status")){
		return msg.reply.text("The primary means of monitoring the CAT status should be through the WISE phone. \n \nBut commanders can also leverage on calling 62826821 for the CAT1 Hotline.");
  }
  if(msg.text.toLowerCase().includes("wrc") || msg.text.toLowerCase().includes("work rest cycle") || msg.text.toLowerCase().includes("WRC") ){
		return msg.reply.text("Work Rest Cycle: \nWHITE: 29.9 degrees and below; 60 min work:15min rest \n \nGREEN: 30.0 degrees to 30.9 degrees; 45min work:15min rest \n \nYELLOW: 31.0 degrees to 31.9 degrees; 30min work:15min rest \n \nRED: 32.0 degrees to 32.9 degrees; 30min work:30min rest \n \nBLACK: 33.0 degrees and above; 15min work:30min rest");
  }
  if(msg.text.toLowerCase().includes("temperature") || msg.text.toLowerCase().includes("temperature taking")){
		return msg.reply.text("Every soldier should be given the opportunity to sound off if the temperature taken is 37.5 degrees. Soldiers with temperatures exceeding 37.5 degrees will be disallowed from participating in the training activity. \n \nTemperature should be taken not more than two hours before any strenuous activities.");
  }
  if(msg.text.toLowerCase().includes("hydration") || msg.text.toLowerCase().includes("hydration plan")){
		return msg.reply.text("The fluid intake for 1st year soldiers should be about 7litres per day, whereas the fluid intake for 2nd year soldiers should be about 4litres per day. \n \nWhen engaged in strenuous activity, servicemen are to consume additional 0.5 litres before, during, and after the activity.");
  }
  if(msg.text.toLowerCase().includes("heat") || msg.text.toLowerCase().includes("heat injury") || msg.text.toLowerCase().includes("heat injuries")){
		return msg.reply.text("Managing Heat Injuries: \nResuscitate: Perform CPR if casualty is not breathing or if heartbeat cannot be detected. \n \nRecognise Symptoms: Any casualty who is not alert must be evacuated immediately. \n \nRest in the Shade: take casualty to shaded area for rest. \n \nRemove clothes: remove everything as this will reduce heat dissipation. \n \nReduce Body Temperature: sponge casualty with sponges soaked in ice water and apply ice packs to the 6 vital points---2 at neck, 2 under armpits, 2 on groin. \n \nRehydrate: get the casualty to drink if conscious \n \nRush to nearest med facility:");
  }
  if(msg.text.toLowerCase().includes("AVPU") || msg.text.toLowerCase().includes("avpu")){
		return msg.reply.text("A for ALERT - Check if casualty can answer questions on TIME, PLACE, and PERSON. \n \nV for Response to Verbal Stimuli - Casualty is confused and unable to answer questions based on TIME, PLACE, PERSON \n \nP for Response to Painful Stimuli - Casualty only responds when pain is inflicted \n \nU for Unresponsive - Casualty does not respond even with pain. \n \n'VPU' are signs of NOT ALERT, and commanders must proceed with immediate evacuation. The medic is to continue to provide on site and en route treatment. \n \n'A' is a sign of alertness, but the medic may still call for evacuation if he deems necessary.");
  }
  if(msg.text.toLowerCase().includes("man down drill") || msg.text.toLowerCase().includes("mdd")){
		return msg.reply.text("1. Upon spotting of casualty falling, buddy shouts MAN DOWN MAN DOWN \n \n2. All soldiers in the vicinity echoes MAN DOWN MAN DOWN \n \n3. Soldier squats down \n \n4. Nearest ground commander activates safety vehicle with medic to the casualties location \n \n5. Ground commander or medic uses AVPU to assess mental state.");
  }
  if(msg.text.toLowerCase().includes("tag line") || msg.text.toLowerCase().includes("tagline")){
		return msg.reply.text("CSSCOM Safety Tag lines: \n \nI must stop unsafe actions! \n \nI must look after my buddies! \n \nI must go home safely every day!");
  }
  if(msg.text.toLowerCase().includes("army core ideas") || msg.text.toLowerCase().includes("army core idea")){
		return msg.reply.text("Army 6 Safety Core Ideas: \n \nSafety is a mission outcome \n \nZero Accident Mindset \n \nTraining Safely Takes Time \n \nSafety Requires Discipline \n \nTake ownership of safety \n \nLearn from Near Misses and Incidents");
  }
  if(msg.text.toLowerCase().includes("/rc") || msg.text.toLowerCase().includes("route card")){
		return msg.reply.text("A list of our route cards as stated below! \nSBC - KC3 \nhttps://tinyurl.com/y6r8gpu9");
  }
  if(msg.text.toLowerCase().includes("unsafe act") || msg.text.toLowerCase().includes("hazard") || msg.text.toLowerCase().includes("near miss") || msg.text.toLowerCase().includes("accident") || msg.text.toLowerCase().includes("incident")){
    return msg.reply.text("Do refer to the image below regarding 'Hazard', 'Unsafe Act', 'Near Miss', 'Accident'. \nhttps://imgur.com/a/I9izaHD  ");
  }

  if(msg.text.toLowerCase().includes("fe sbc") && msg.text.toLowerCase().includes("sbc") || msg.text.toLowerCase().includes("/fe sbc")){
    //return msg.reply.text("Fire evacuation plan as follows => https://tinyurl.com/y6ljl5a7");
    let keyboard = bot.inlineKeyboard([[bot.inlineButton("Battalion HQ", {callback:"Battalion HQ"})],
    [bot.inlineButton("Sea Terminal Company", {callback:"Sea Terminal Company"})],
    [bot.inlineButton("Air Terminal Company", {callback:"Air Terminal Company"})],
    [bot.inlineButton("LARC V Company", {callback:"LARC V Company"})]]);

    return bot.sendMessage(msg.from.id, "Which Fire Evacuation route would you like to find out?",{replyMarkup:keyboard});

  }
    if(msg.text.toLowerCase().includes("fire") || msg.text.toLowerCase().includes("evacuation") || msg.text.toLowerCase().includes("/fe")){
    //return msg.reply.text("Fire evacuation plan as follows => https://tinyurl.com/y6ljl5a7");
    let keyboard = bot.inlineKeyboard(
	[[bot.inlineButton("sbc", {callback:"sbc"})],
    [bot.inlineButton("ctn", {callback:"ctn"})],
    [bot.inlineButton("ttn", {callback:"ttn"})],
    [bot.inlineButton("cln", {callback:"cln"})]]);

    return bot.sendMessage(msg.from.id, "Which Fire Evacuation route would you like to find out?",{replyMarkup:keyboard});

  }
  if(msg.text.toLowerCase().includes("thank") || msg.text.toLowerCase().includes("thank you") || msg.text.toLowerCase().includes("thanks") ){
    return msg.reply.text("No problem, Do feel free to ask me again if you have any more questions!");
  }
   if(msg.text.toLowerCase().includes("/help") || msg.text.toLowerCase().match("help")){
    return msg.reply.text('Keyword masterlist as stated below:\n/start /hello\n/rc / Route Card\n/fe / Fire Evacuation\nThank you\nHello / hi\nSafety Advocate\nSafety Targets\nSafety Stoppage\nLevel 2 / Training Inspection\nCat Status\nWRC / Work Rest Cycle\nTemperature Taking\nHydration Plan\nHeat Injury\nAVPU\nMan Down Drill / MDD\nTag Line/ Tagline\nArmy Core Ideas\nHazard / Unsafe Act / Near Miss / Accident / Incident');
  }
  return msg.reply.text("Sorry, I don't quite understand you.");
});

bot.on('callbackQuery', (query) => {
  let id = query.from.id; 
  /*||
  if(query.callback === "sbc")
  let keyboard = bot.inlineKeyboard([[bot.inlineButton("Battalion HQ", {callback:"Battalion HQ"})],
    [bot.inlineButton("Sea Terminal Company", {callback:"Sea Terminal Company"})],
    [bot.inlineButton("Air Terminal Company", {callback:"Air Terminal Company"})],
    [bot.inlineButton("LARC V Company", {callback:"LARC V Company"})]]);*/
  if(query.data === "sbc") bot.sendMessage(id, "Fire evacuation plan as follows => https://tinyurl.com/y6d62ths");
  if(query.data === "ctn") bot.sendMessage(id, "Fire evacuation plan as follows => https://tinyurl.com/y4m6dudd");
  if(query.data === "ttn") bot.sendMessage(id, "Fire evacuation plan as follows => https://tinyurl.com/yyew2yqp");
  if(query.data === "cln") bot.sendMessage(id, "Fire evacuation plan as follows => https://tinyurl.com/y254ejaf");
  
  if(query.data === "Battalion HQ") bot.sendMessage(id, "Fire evacuation plan as follows => https://tinyurl.com/y6d62ths");
  if(query.data === "Sea Terminal Company") bot.sendMessage(id, "Fire evacuation plan as follows => https://tinyurl.com/y4m6dudd");
  if(query.data === "Air Terminal Company") bot.sendMessage(id, "Fire evacuation plan as follows => https://tinyurl.com/yyew2yqp");
  if(query.data === "LARC V Company") bot.sendMessage(id, "Fire evacuation plan as follows => https://tinyurl.com/y254ejaf");
  
  });
  

  
  //bot.deleteMessage(query.from.id,query.message.message_id).catch(err => {
   // console.log(err);
  //});



  


app.listen(process.env.PORT || 5000);
bot.start();