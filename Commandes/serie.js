const Discord = require('discord.js')

module.exports.run = async(client, message, args)=>{

message.channel.send('Voici la série afin de te te documenté sur le RP de Gang : https://seriestreaming.co/the-wire-sur-ecoute/saison/1/episode/1/serie-streaming-info la série est aussi diponible sous le nom de **Sur écoute** sur OCS et Canal ');
}
module.exports.help = {
name:"serie"
}