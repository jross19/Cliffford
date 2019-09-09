import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class disconnect implements IBotCommand {

    private readonly _command = "disconnect"

    isThisCommand(command: string) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        if(msgObject.member.voiceChannel)
		{
            msgObject.guild.voiceConnection.disconnect();
		}
	}
}