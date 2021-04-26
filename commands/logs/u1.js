module.exports.command = {
    name: "u1",
    aliases: ['ustaw1','ustaw-1','1ustaw','1-ustaw','powitalnia'],
    code: `$title[$username ustawił powitalnie]
    $description[na kanale: <#$message>]
    $color[RANDOM]
    $onlyIf[$message!=;Nie podałeś ID kanału!]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $setServerVar[powitalnia;$message]`
}