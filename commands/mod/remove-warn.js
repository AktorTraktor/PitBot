module.exports.command = {
    name: "remove-warn",
    aliases: ['usun-warn','warn-remove','warn-usun'],
    code: `$title[$username usunął ostrzeżenia]
    $description[**Osoba**: <@$mentioned[1]>
**Ilość**: $message[2]]
    $color[RANDOM]
$setUserVar[warn;$sub[$getUserVar[warn];$message[2]]]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $onlyIf[$message!=;Nie podałeś wartości dla **<@osoba>**!]
    `
}