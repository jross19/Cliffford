import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class join implements IBotCommand {

    private readonly _command = "join"

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
						msgObject.reply("I have Came!");
					})
			}
			
			else {
				msgObject.reply("GET IN A FUCKING VOICE CHANNEL FIRST!");
			}
		}
	}
}