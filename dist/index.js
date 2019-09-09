"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("./config");
const client = new Discord.Client();
let commands = [];
loadCommands(`${__dirname}/commands`);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Jake Sleep', {type: 'watching'});
});
client.login(ConfigFile.config.token);
client.on('message', msg => {
    if (msg.content === 'Cliffford!') {
        msg.reply('Sorry Avon');
    }
});
client.on('message', message => {
    var message2 = "trash";
    var message3 = String(message);
    var message4 = message3.substring(5, message3.length);
    if (message.content.startsWith('!add')) {
        if (message.content.includes(" ") && message4.includes(" ")) {
            var indexSpace = message4.indexOf(" ");
            var num1 = parseInt(message4.substring(0, indexSpace), 10);
            var num2 = parseInt(message4.substring(indexSpace + 1, message4.length), 10);
            message2 = (String)(num1 + num2);
            message.reply(message2);
        }
        else {
            message.reply("Please include 2 numbers separated by a space");
        }
    }
});
client.on('message', message => {
    var message2 = "trash";
    var message3 = String(message);
    var message4 = message3.substring(10, message3.length);
    if (message.content.startsWith('!subtract')) {
        if (message.content.includes(" ") && message4.includes(" ")) {
            var indexSpace = message4.indexOf(" ");
            var num1 = parseInt(message4.substring(0, indexSpace), 10);
            var num2 = parseInt(message4.substring(indexSpace + 1, message4.length), 10);
            message2 = (String)(num1 - num2);
            message.reply(message2);
        }
        else {
            message.reply("Please include 2 numbers separated by a space");
        }
    }
});
client.on('message', message => {
    var message2 = "trash";
    var message3 = String(message);
    var message4 = message3.substring(10, message3.length);
    if (message.content.startsWith('!multiply')) {
        if (message.content.includes(" ") && message4.includes(" ")) {
            var indexSpace = message4.indexOf(" ");
            var num1 = parseInt(message4.substring(0, indexSpace), 10);
            var num2 = parseInt(message4.substring(indexSpace + 1, message4.length), 10);
            message2 = (String)(num1 * num2);
            message.reply(message2);
        }
        else {
            message.reply("Please include 2 numbers separated by a space");
        }
    }
});
client.on('message', message => {
    var message2 = "trash";
    var message3 = String(message);
    var message4 = message3.substring(8, message3.length);
    if (message.content.startsWith('!divide')) {
        if (message.content.includes(" ") && message4.includes(" ")) {
            var indexSpace = message4.indexOf(" ");
            var num1 = parseInt(message4.substring(0, indexSpace), 10);
            var num2 = parseInt(message4.substring(indexSpace + 1, message4.length), 10);
            message2 = String(num1 / num2);
            message.reply(message2);
        }
        else {
            message.reply("Please include 2 numbers separated by a space");
        }
    }
});
client.on('message', message => {
    if (message.author.bot) {
        return;
    }
    if (!message.content.startsWith(ConfigFile.config.prefix)) {
        return;
    }
    handleCommand(message);
    if (message.content.startsWith('!day')) {
        var date = new Date();
        message.reply(date.toString());
    }
    if (message.content.startsWith('!countdown')) {
        message.reply(daysTillChristmas());
    }
    if (message.content.startsWith('!help')) {
        message.channel.send("Helpful Commands!: \n!credits - View My Social Media! \n!Glenn - Posts a picture of the world's sexiest man \n!jake - Posts a random picture of the world record holder for most mental diseases \n!day - Posts the current date \n!countdown - Posts the amount of days until Christmas \n!add num1 num2 - adds two numbers together \n!subtract num1 num2 - subtracts two numbers");
    }
    if (message.content.startsWith('!credits')) {
        var accounts = socialMediaAccounts();
        var accountString = "";
        var i;
        for (i = 0; i < accounts.length; i++) {
            accountString += accounts[i] + "\n";
        }
        message.channel.send(accountString);
    }
});
function daysTillChristmas() {
    var now = new Date();
    var countdown = new Date("December 25, 2019 00:00:00");
    var timeLeft = Number(countdown) - Number(now);
    return (millisToDaysHoursMinutes(timeLeft).toString() + " Until Christmas!");
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
    return ((dayString) + " Days");
}
function socialMediaAccounts() {
    var socialLinks = ["Instagram: https://bit.ly/2VXpfYJ", "Steam: https://bit.ly/30nTyr8", "YouTube: https://bit.ly/2JCWslU"];
    return socialLinks;
}
function removed(message) {
    message.channel.send("Sorry This Command Has Been Removed :cry:");
}
function handleCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
        let args = msg.content.split(" ").slice(1);
        for (const commandClass of commands) {
            try {
                if (!commandClass.isThisCommand(command)) {
                    continue;
                }
                yield commandClass.runCommand(args, msg, client);
            }
            catch (exception) {
                console.log(exception);
            }
        }
    });
}
function loadCommands(commandsPath) {
    if (!ConfigFile.config || ConfigFile.config.commands.length === 0) {
        return;
    }
    for (const commandName of ConfigFile.config.commands) {
        const commandClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandClass();
        commands.push(command);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUN0Qyx1Q0FBdUM7QUFHdkMsTUFBTSxNQUFNLEdBQW1CLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXBELElBQUksUUFBUSxHQUFrQixFQUFFLENBQUM7QUFFakMsWUFBWSxDQUFDLEdBQUcsU0FBUyxXQUFXLENBQUMsQ0FBQTtBQUVyQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0FBRWpELENBQUMsQ0FBQyxDQUFBO0FBRUosTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXBDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFO0lBQ3pCLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxZQUFZLEVBQUU7UUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtLQUN4QjtBQUNILENBQUMsQ0FBQyxDQUFBO0FBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUU7SUFDN0IsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsSUFBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNyQyxJQUFHLE9BQU8sQ0FBQyxP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