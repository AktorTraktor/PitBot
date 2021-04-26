module.exports.command = {
    name: "remove-money",
    aliases: ['usun-money','money-remove','money-usun'],
    code: `$title[$username usunął pieniądze]
    $description[**Użytkownik**: <@$mentioned[1]>
**Ilość**: $message[2]]
    $color[RANDOM]
    $setUserVar[money;$sub[$getUserVar[money];$message[2]]]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $onlyIf[$message!=;Nie podałeś wartości dla **<@osoba>**!]
    `
}