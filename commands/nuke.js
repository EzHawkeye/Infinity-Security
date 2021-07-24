const discord = require("discord.js");


const client = new Discord.Client();
const nuke = require("discord-channel-nuke");
client.on("message", message => {

{

if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("you need \"MANAGE_CHANNELS\" permission to use nuke command!");

nuke(message, "nuked this channel!"); // you can write content as you want to send nuked channel.

}
});

module.exports.help = {
    name: "nuke"
}