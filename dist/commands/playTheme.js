"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class playTheme {
    constructor() {
        this._command = "playTheme";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        if (msgObject.member.voiceChannel) {
            if (!msgObject.guild.voiceConnection) {
                msgObject.reply("I am attempting to enter the chat!");
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
exports.default = playTheme;
function playFile(connection) {
    connection.playFile('pics/Wrong.mp3');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheVRoZW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3BsYXlUaGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQXFCLFNBQVM7SUFBOUI7UUFFcUIsYUFBUSxHQUFHLFdBQVcsQ0FBQTtJQXVCM0MsQ0FBQztJQXJCRyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNO1FBQzlCLElBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQ3RDO1lBQ0MsSUFBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUNuQztnQkFDQyxTQUFTLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUE7Z0JBQ3JELFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtxQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNsQixRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFBO2FBRUg7aUJBRUk7Z0JBQ0osU0FBUyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Q7SUFDRixDQUFDO0NBQ0Q7QUF6QkQsNEJBeUJDO0FBRUQsU0FBUyxRQUFRLENBQUMsVUFBVTtJQUUzQixVQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUE7QUFDdEMsQ0FBQyJ9