module.exports.command = {
    name: "work",
    aliases: ['praca'],
    code: `$title[$username - Pracujesz jako]
    $description[**$randomText[Policjant;Strażak]** i zarabiasz **$random[1;200;no]$getServerVar[ecoEmoji]**]
    $color[RANDOM]
    $setUserVar[money;$sum[$getUserVar[money];$random[1;200;no]]]
    $cooldown[$getServerVar[ecoCooldown];Poczekaj jeszcze $getServerVar[ecoCooldown] przed ponownym użyciem komendy.]
    `
}