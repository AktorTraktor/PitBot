module.exports.command = {
    name: "mute",
    aliases: ['wycisz'],
    code: `$giveRole[$mentioned[1];$getServerVar[muteRole]]
    $title[$username wyciszył]
    $description[Osoba: <@$mentioned[1]>
Powód: $message[2] $message[3] $message[4] $message[5]
    $color[#a1862d]
    $footer[Komendy użył $username]
    $sendDM[$mentioned[1];Zostałeś wyciszony na **$serverName**
**Powód**: $message[2] $message[3] $message[4] $message[5]
**Przez**: $username]
    $onlyIf[$message!=;Podaj osobę którą mam wyciszyć!]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $deletecommand`
}