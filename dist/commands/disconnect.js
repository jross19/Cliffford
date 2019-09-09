"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class disconnect {
    constructor() {
        this._command = "disconnect";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        if (msgObject.member.voiceChannel) {
            msgObject.guild.voiceConnection.disconnect();
        }
    }
}
exports.default = disconnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9kaXNjb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBVzVDLENBQUM7SUFURyxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNO1FBQzlCLElBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQ3RDO1lBQ1UsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDdEQ7SUFDRixDQUFDO0NBQ0Q7QUFiRCw2QkFhQyJ9