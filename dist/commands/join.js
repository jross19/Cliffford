"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class join {
    constructor() {
        this._command = "join";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        if (msgObject.member.voiceChannel) {
            if (!msgObject.guild.voiceConnection) {
                msgObject.reply("I am attempting to cum!");
                msgObject.member.voiceChannel.join()
                    .then(connection => {
                    msgObject.reply("I have Came!");
                });
            }
            else {
                msgObject.reply("GET IN A FUCKING VOICE CHANNEL FIRST!");
            }
        }
    }
}
exports.default = join;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9qb2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBc0J0QyxDQUFDO0lBcEJHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU07UUFDOUIsSUFBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksRUFDdEM7WUFDQyxJQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQ25DO2dCQUNDLFNBQVMsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQTtnQkFDMUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO3FCQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ2xCLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxDQUFBO2FBQ0g7aUJBRUk7Z0JBQ0osU0FBUyxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Q7SUFDRixDQUFDO0NBQ0Q7QUF4QkQsdUJBd0JDIn0=