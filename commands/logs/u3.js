module.exports.command = {
    name: "u3",
    aliases: ['ustaw3','ustaw-3','3ustaw','3-ustaw','propozycja'],
    code: `$title[$username ustawił propozycje]
    $description[na kanale: <#$message>]
    $color[RANDOM]
    $onlyIf[$message!=;Nie podałeś ID kanału!]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $setServerVar[propozycje;$message]`
}