console.log(`Online`);
const Discord = require('discord.js');
const client = new Discord.Client();
var ServerID = "505995244672909323"; 
var ChannelID = "506179278661222408";

var ServerID2 = "478492474084687873"; 
var ChannelID2 = "494081177078988801";

    console.log(`Online`);
client.on('warn', console.warn);

client.on('error', console.error);


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , â™ڑRoأ½ale#5555


    });
}

var timer = setTimeout(timerFunc, 1);


client.on('warn', console.warn);

client.on('error', console.error);


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID2).channels.get(ChannelID2).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , â™ڑRoأ½ale#5555


    });
}

var timer = setTimeout(timerFunc, 1);




client.login(process.env.BOT_TOKEN);
