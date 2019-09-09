import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class butter implements IBotCommand {

    private readonly _command = "butter"

    isThisCommand(command: string) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.channel.send({files: ["pics/butter.png"]});
    }
}
