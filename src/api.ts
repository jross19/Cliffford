import * as Discord from "discord.js";

export interface IBotCommand {
    isThisCommand(command: string): boolean;
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void;
}