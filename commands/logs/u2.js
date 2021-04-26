module.exports.command = {
    name: "u2",
    aliases: ['ustaw2','ustaw-2','2ustaw','2-ustaw','pożegnalnia'],
    code: `$title[$username ustawił pożegnalnie]
    $description[na kanale: <#$message>]
    $color[RANDOM]
    $onlyIf[$message!=;Nie podałeś ID kanału!]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $setServerVar[pożegnalnia;$message]`
}