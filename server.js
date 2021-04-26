const { token, prefix } = require("./config/config")

const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
  sharding: false, //true or false 
  shardAmount: 2, //Shard amount 
  mobile: true, //Discord Mobile Status
  token: token, //Token
  prefix: prefix, //Prefix
  fetchInvites: true // Invites
})

bot.onMessage()

const fs = require('fs');
let dir = fs.readdirSync('./commands');

let i = 0;

handler: while (i < dir.length) {
    const stat = fs.statSync('./commands/' + dir[i]);

    if (stat.isDirectory()) {
        const readdir = fs.readdirSync('./commands/' + dir[i]);

        let nums = 0;
        while (nums < readdir.length) {
            dir.push(dir[i] + '/' + readdir[nums]);
            nums++;
        }
        i++;
        continue handler;
    } else if (stat.isFile()) {
        const command = require('./commands/' + dir[i]);
        try {
            bot[Object.keys(command)[0]](command[Object.keys(command)[0]]);
            i++;
            continue handler;
        } catch (err) {
            console.error(err.message);
            delete dir[i];

            continue handler;
        }
    } else {
        console.error('Directory was not a Folder or File');
        delete dir[i];

        continue handler;
    }
}

const username = `$username[$authorID]`
const discrim = `$discriminator[$authorID]`
const members = `$membersCount`
const guild = `$serverName`
const avatar = `$replaceText[$userAvatar[$authorID];webp;png]`
var background = `https://cdn.pixabay.com/photo/2015/07/31/20/33/background-869578__340.png`

bot.joinCommand({ 
    channel: "$getServerVar[powitalnia]", 
    code: `
    $djseval[(async() =>{const Discord = require('discord.js')
const canvas = require('discord-canvas'),
  welcomeCanvas = new canvas.Welcome();
let image = await welcomeCanvas
  .setUsername("${username}")
  .setDiscriminator("${discrim}")
  .setMemberCount("${members}")
  .setGuildName("${guild}")
  .setAvatar("${avatar}")
  .setColor("border", "#8f7f0a")
  .setColor("username-box", "#736711")
  .setColor("discriminator-box", "#000000")
  .setColor("message-box", "#524909")
  .setColor("title", "#736711")
  .setColor("avatar", "#660000")
  .setBackground("${background}")
  .toAttachment();
let attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome.png");
message.channel.send(attachment);
})()]
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[wmsg];(user.mention);<@$authorID>];(guild.name);$serverName];(user.username);$username[$authorID]];(tag);#$discriminator];(members);$membersCount[$guildID;all;no]]
$onlyIf[$getServerVar[wmsg]!=;]$onlyIf[$getServerVar[powitalnia]!=;]
$onlyIf[$getServerVar[powitalnia]==$channelID;]
$suppressErrors[**⛔ Error**{delete:1s}] 
    `
})
bot.onJoined() 

bot.leaveCommand({ 
    channel: "$getServerVar[pożegnalnia]", 
    code: `$djseval[(async() =>{const Discord = require('discord.js')
    const canvas = require('discord-canvas'),
      goodbyeCanvas = new canvas.Goodbye();
    let image = await goodbyeCanvas
      .setUsername("${username}")
      .setDiscriminator("${discrim}")
      .setMemberCount("${members}")
      .setGuildName("${guild}")
      .setAvatar("${avatar}")
      .setColor("border", "#8f7f0a")
      .setColor("username-box", "#736711")
      .setColor("discriminator-box", "#000000")
      .setColor("message-box", "#524909")
      .setColor("title", "#736711")
      .setColor("avatar", "#ff5c33")
      .setBackground("${background}")
      .toAttachment();
    let attachment = new Discord.MessageAttachment(image.toBuffer(), "goodbye.png");
    message.channel.send(attachment);
    })()]
    $replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[lmsg];(user.username);$username[$authorID]];(guild.name);$serverName];(tag);#$discriminator];(members);$membersCount[$guildID;all;no]]
    $onlyIf[$getServerVar[lmsg]!=;]
    $onlyIf[$getServerVar[pożegnalnia]!=;]
    $onlyIf[$getServerVar[pożegnalnia]==$channelID;]
    $suppressErrors[**⛔ Error**{delete:1s}]`
})
bot.onLeave() 

bot.botJoinCommand({
  channel: "$systemChannelID",
  code: `$title[Witajcie!]
  $description[Mój prefix: **${prefix}**
  A komendy znajdziecie pod: **${prefix}help**]
  $color[RANDOM]`
})
bot.onGuildJoin()
