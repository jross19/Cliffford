import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import { callbackify } from "util";

export default class playTheme implements IBotCommand {

    private readonly _command = "playTheme"

    isThisCommand(command: string) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        if(msgObject.member.voiceChannel)
		{
			if(!msgObject.guild.voiceConnection)
			{
				msgObject.reply("I am attempting to enter the chat!")
				msgObject.member.voiceChannel.join()
					.then(connection =>{
						playFile(connection)
					})
					
			}
			
			else {
				msgObject.reply("GET IN A VOICE CHANNEL FIRST!");
			}
		}
	}
}

function playFile(connection)
{
	connection.playFile('pics/Wrong.mp3') //song gotten from Dan Hennig copyright free on YouTube Audio Library
}