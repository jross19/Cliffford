"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class jake {
    constructor() {
        this._command = "jake";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        if (msgObject.member.voiceChannel) {
            if (!msgObject.guild.voiceConnection) {
                msgObject.reply("I am attempting to come!");
                msgObject.member.voiceChannel.join()
                    .then(connection => {
                    playFile(connection);
                });
            }
            else {
                msgObject.reply("GET IN A VOICE CHANNEL FIRST!");
            }
        }
    }
}
exports.default = jake;
function playFile(connection) {
    connection.playFile('pics/jake.mp3');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamFrZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9qYWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBdUJ0QyxDQUFDO0lBckJHLGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU07UUFDOUIsSUFBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksRUFDdEM7WUFDQyxJQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQ25DO2dCQUNDLFNBQVMsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtnQkFDM0MsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO3FCQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ2xCLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDckIsQ0FBQyxDQUFDLENBQUE7YUFFSDtpQkFFSTtnQkFDSixTQUFTLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7YUFDakQ7U0FDRDtJQUNGLENBQUM7Q0FDRDtBQXpCRCx1QkF5QkM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxVQUFVO0lBRTNCLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDckMsQ0FBQyJ9