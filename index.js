const Discord = require('discord.js')
const bot = new Discord.Client();
const prefix = 'p!'; //prefijo
const ownerID = 308661785282740234
const token = process.env.token;
bot.login("NDc5NjY3OTI4NTY5MjE3MDI1.Dlc-6Q.JsMaTHMgcfApKsEusiFRB0qmRsU") //token
//Inicio mas info del bot
bot.on('ready', () => {
    console.log(`Acabo de salir del horno`); //cuando inicia
    bot.user.setStatus('online');
    bot.user.setActivity(`Bot Oficial del servidor Pans.`)
});
//Bienvenida
bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '🙋🏻bienvenido🙋🏻');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Usuario : ', `${member}`)
        .addField(':microphone2: | ¡Hola!', `Bienvenid@ a tu panadería de confianza, ${member}`)
        .addField(':id: | ID :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Eres el miembro:', `${member.guild.memberCount}`)
        .addField("Nombre", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});
//Despedida
bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '🙋🏻bienvenido🙋🏻');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Nombre:', `${member}`)
        .addField('Se ha ido de la panadería', ':tired_face:')
        .addField('Adios :(', '¡Te echaremos de menos!')
        .addField('El servido ahora tiene', `${member.guild.memberCount}` + " miembros")
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});