module.exports.command = {
    name: "kick",
    aliases: ['wyrzuć'],
    code: `$title[<@$mentioned[1]> został wyrzucony]
    $description[**Powód**: $message[2] $message[3] $message[4] $message[5]
**Przez**: $username]
    $color[RANDOM]
    $sendDM[$mentioned[1];Zostałeś wyrzucony z **$serverName**
**Powód**: $message[2] $message[3] $message[4] $message[5]
**Przez**: $username]
    $ban[$mentioned[1]]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $onlyIf[$message!=;Nie podałeś wartości dla **<@osoba>**!]
    `
}