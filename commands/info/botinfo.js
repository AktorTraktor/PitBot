const { botDev, botVersion, nodeVersion, botHosting, prefix, botDescription } = require("../../config/config")

module.exports.command = {
    name: "botinfo",
    aliases: ['bot-info','bi','infobot','info-bot'],
    code: `$title[BotInfo]
    $description[${botDescription}]
    $addField[Inne;• Serwery: $serverCount  
• Użytkownicy: $allMembersCount
• Autor: ${botDev}
• Komendy: $commandsCount
• Hosting: ${botHosting}]
    $addField[Wersje;• Wersja Bota: ${botVersion}
• DBD.JS: $packageVersion
• NodeJS: ${nodeVersion}]
    $addField[Główne;• Prefix: ${prefix}
• Autor: ${botDev}
• Komendy: $commandsCount
• Ping: $ping
• Uptime: $uptime]
$footer[https://pitbot1.neocities.org]
$color[RANDOM]`
}