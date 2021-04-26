module.exports.command = {
    name: "reset-warn",
    aliases: ['wyczysc-warn','warn-reset','warn-wyczysc'],
    code: `$title[$username usunął warny]
    $description[**Użytkownik**: <@$mentioned[1]>
**Przez**: $username]
    $color[RANDOM]
$setUserVar[warn;$sub[$getUserVar[warn];$getUserVar[warn]]]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $onlyIf[$message!=;Nie podałeś wartości dla **<@osoba>**!]
    `
}