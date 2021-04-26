module.exports.command = {
    name: "unmute",
    aliases: ['odcisz'],
    code: `$takeRole[$mentioned[1];$getServerVar[muteRole]]
    $title[$username odciszył]
    $description[Osoba: <@$mentioned[1]>]
    $color[#a1862d]
    $footer[Komendy użył $username]
    $sendDM[$mentioned[1];Zostałeś odciszony na **$serverName**
**Przez**: $username]
    $onlyIf[$message!=;Podaj osobę którą mam odciszyć!]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $deletecommand`
}