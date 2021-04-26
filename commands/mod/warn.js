module.exports.command = {
    name: "warn",
    code: `$title[$username[$mentioned[1]] został ostrzeżony]
    $description[**Powód**: $message[2] $message[3] $message[4] $message[5]
**Przez**: $username]
    $color[RANDOM]
    $sendDM[$mentioned[1];Zostałeś ostrzeżony na **$serverName**
**Powód**: $message[2] $message[3] $message[4] $message[5]
**Przez**: $username]
$setUserVar[warn;$sum[$getUserVar[warn];1]]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $onlyIf[$message!=;Nie podałeś wartości dla **<@osoba>**!]
    `
}