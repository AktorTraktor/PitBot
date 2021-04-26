module.exports.command = {
    name: "set-economy-emoji",
    aliases: ['sem','economy-emoji'],
    code: `$title[$username ustawił Economy Emoji]
    $description[na: **$message[1]**]
    $onlyIf[$message!=;Podaj emoji!]
    $setServerVar[ecoEmoji;$message[1]]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $cooldown[$getServerVar[ecoCooldown];Poczekaj jeszcze $getServerVar[ecoCooldown] przed ponownym użyciem komendy.]
    $color[RANDOM]
    `
}