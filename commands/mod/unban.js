module.exports.command = {
    name: "unban",
    aliases: ['odbanuj'],
    code: `$title[<@$mentioned[1]> został odbanowany]
    $description[**Przez**: $username]
    $color[RANDOM]
    $sendDM[$mentioned[1];Zostałeś odbanowany na **$serverName**
**Przez**: $username]
    $unban[$mentioned[1]]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $onlyIf[$message!=;Nie podałeś wartości dla **<@osoba>**!]
    `
}