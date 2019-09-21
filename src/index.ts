import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })
  
client.login(ConfigFile.config.token);

  client.on('message', msg => {
    if (msg.content === 'Cliffford!') {
      msg.reply('Sorry Avon')
    }
  })

  client.on('message', message => {
    var message2 = "trash";
    var message3 = String(message);
    var message4 = message3.substring(5, message3.length);
    if(message.content.startsWith('!add')) {
      if(message.content.includes(" ") && message4.includes(" ")) {
      var indexSpace = message4.indexOf(" ");
      var num1 = parseInt(message4.substring(0,indexSpace), 10);
      var num2 = parseInt(message4.substring(indexSpace +1 ,message4.length), 10);
      message2 = (String)(num1 + num2);
      message.reply(message2)
      }
    else {
      message.reply("Please include 2 numbers separated by a space")
    }
    }
  })

  client.on('message', message => {
    var message2 = "trash";
    var message3 = String(message);
    var message4 = message3.substring(10, message3.length);
    if(message.content.startsWith('!subtract')) {
      if(message.content.includes(" ") && message4.includes(" ")) {
      var indexSpace = message4.indexOf(" ");
      var num1 = parseInt(message4.substring(0,indexSpace), 10);
      var num2 = parseInt(message4.substring(indexSpace +1 ,message4.length), 10);
      message2 = (String)(num1 - num2);
      message.reply(message2)
      }
    else {
      message.reply("Please include 2 numbers separated by a space")
    }
    }
  })

  client.on('message', message => {
    var message2 = "trash";
    var message3 = String(message);
    var message4 = message3.substring(10, message3.length);
    if(message.content.startsWith('!multiply')) {
      if(message.content.includes(" ") && message4.includes(" ")) {
      var indexSpace = message4.indexOf(" ");
      var num1 = parseInt(message4.substring(0,indexSpace), 10);
      var num2 = parseInt(message4.substring(indexSpace +1 ,message4.length), 10);
      message2 = (String)(num1 * num2);
      message.reply(message2)
      }
    else {
      message.reply("Please include 2 numbers separated by a space")
    }
    }
  })

  client.on('message', message => {
    var message2 = "trash";
    var message3 = String(message);
    var message4 = message3.substring(8, message3.length);
    if(message.content.startsWith('!divide')) {
      if(message.content.includes(" ") && message4.includes(" ")) {
      var indexSpace = message4.indexOf(" ");
      var num1 = parseInt(message4.substring(0,indexSpace), 10);
      var num2 = parseInt(message4.substring(indexSpace +1 ,message4.length), 10);
      message2 = String(num1 / num2);
      message.reply(message2)
      }
    else {
      message.reply("Please include 2 numbers separated by a space")
    }
    }
  })

  client.on('message', message => {
    if (message.author.bot) {return; }
    if (!message.content.startsWith(ConfigFile.config.prefix)) {return ;}

    handleCommand(message);
    
    if(message.content.startsWith('!day')) {
      var date = new Date();
      message.reply(date.toString())
    }
    
    if(message.content.startsWith('!countdown')) {
      message.reply(daysTillChristmas())
    }
    
    if(message.content.startsWith('!help')) {
      message.channel.send("Helpful Commands!: \n!credits - View My Social Media! \n!day - Posts the current date \n!countdown - Posts the amount of days until Christmas \n!add num1 num2 - adds two numbers together \n!subtract num1 num2 - subtracts two numbers")
    }
    
    if(message.content.startsWith('!credits')) {
      var accounts = socialMediaAccounts()
      var accountString = "";
      var i;
      for(i = 0; i < accounts.length; i++) {
        accountString += accounts[i] + "\n";
      }
      message.channel.send(accountString)
    }
  })
  
  function daysTillChristmas() {
      var now = new Date();
      var countdown = new Date("December 25, 2019 00:00:00");
      var timeLeft = Number(countdown) - Number(now)
      return(millisToDaysHoursMinutes(timeLeft).toString() + " Until Christmas!")
  }
  
  
  function millisToDaysHoursMinutes(millis) {
      var seconds = millis / 1000;
      var totalMinutes = seconds / 60;
    var minutesPerDay = 1440;
  
      var days = totalMinutes / minutesPerDay;
      totalMinutes -= minutesPerDay * days;
      var hours = totalMinutes / 60;
      totalMinutes -= hours * 60; 

      var dayString = parseInt(String(days));
      return ((dayString) +" Days");
  }
  
  function socialMediaAccounts() {
    var socialLinks = ["Instagram: https://bit.ly/2VXpfYJ", "Steam: https://bit.ly/30nTyr8", "YouTube: https://bit.ly/2JCWslU"];
    return socialLinks;
  }
  
  function removed(message) {
    message.channel.send("Sorry This Command Has Been Removed :cry:");
  }

  async function handleCommand(msg: Discord.Message) {
    //split the string into the command and all of the args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    for (const commandClass of commands){
      //Attempt to execute code but ready in case of error
      try{
        //Check If Our Command Class is The Correct One
        if(!commandClass.isThisCommand(command)){
          //go to the next iteration of the loop
          continue;
        }
        //pause execution whilst we run the command's code
        await commandClass.runCommand(args, msg, client);
      }
      catch(exception){
        //if there is an errot log it
        console.log(exception);
      }
    }
  }

  function loadCommands(commandsPath: String) {
    //exit if no commands
    if(!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) { return ;}

    //loop through commands
    for (const commandName of ConfigFile.config.commands as string[]) {
      const commandClass = require(`${commandsPath}/${commandName}`).default;

      const command = new commandClass() as IBotCommand;

      commands.push(command);
    }
  }
