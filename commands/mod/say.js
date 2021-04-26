module.exports.command = {
    name: "say",
    aliases: ['powiedz','msg','message'],
    code: `$title[$message[1]]
    $description[$message[2]]
    $color[$message[3]]
    $onlyIf[$message[1]!=;Podaj **title**,**description** i **color (hex)**!]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $deletecommand`
}