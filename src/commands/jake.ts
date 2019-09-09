import * as Discord from "discord.js";
import {IBotCommand} from "../api";
import { callbackify } from "util";

export default class jake implements IBotCommand {

    private readonly _command = "jake"

    isThisCommand(command: string) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        if(msgObject.member.voiceChannel)
		{
			if(!msgObject.guild.voiceConnection)
			{
				msgObject.reply("I am attempting to cum!")
				msgObject.member.voiceChannel.join()
					.then(connection =>{
						playFile(connection)
					})
					
			}
			
			else {
				msgObject.reply("GET IN A FUCKING VOICE CHANNEL FIRST!");
			}
		}
	}
}

function playFile(connection)
{
	connection.playFile('pics/jake.mp3')
}
