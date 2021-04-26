const { prefix } = require("../../config/config")

module.exports.command = {
    name: "propozycja",
    aliases: ['proposition','propo'],
    code: `$title[Propozycja użytkownika $username]
    $description[**$message[1]**]
    $footer[✅ - Tak ❌ - Nie]
    $color[RANDOM]
    $addReactions[✅;❌]
    $onlyIf[$message!=;Poprawne użycie tej komendy to: **${prefix}propozycja <treść>**!]
    $onlyForChannels[$getServerVar[propozycje];:x: Użyj tej komendy na <#$getServerVar[propozycje]>]
    $deletecommand`
}