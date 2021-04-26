const { prefix } = require("../../config/config");

module.exports.command = {
    name: "logs",
    aliases: ['log','logi','config'],
    code: `$title[Config serwera $serverName]
    $description[**Lobby**
1. Powitalnia - <#$getServerVar[powitalnia]>
2. Pożegnalnia - <#$getServerVar[pożegnalnia]>

**Propozycje**
3. Propozycja - <#$getServerVar[propozycje]>

**Role**
4. Mute Role - <@&$getServerVar[muteRole]>

**Logi**
5.]
$footer[Użyj komendy ${prefix}u1 (na przykład) <ID> by ustawić powitalnie]
$color[RANDOM]
$onlyPerms[admin;Nie posiadasz uprawnień!]
`
}