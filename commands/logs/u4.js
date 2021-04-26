module.exports.command = {
    name: "u4",
    aliases: ['ustaw4','ustaw-4','4ustaw','4-ustaw','muteRole'],
    code: `$title[$username ustawił muteRole]
    $description[na: <@&$message>]
    $color[RANDOM]
    $onlyIf[$message!=;Nie podałeś ID roli!]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $setServerVar[muteRole;$message]`
}