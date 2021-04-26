module.exports.command = {
    name: "clear",
    aliases: ['purge','wyczyść','usuń'],
    code: `$clear[$message]
    $title[$username wyczyścił]
    $description[$message wiadomości]
    $color[#a1862d]
    $footer[Komendy użył $username]
    $onlyIf[$message!=;Podaj ilość wiadomości które mam usunąć!]
    $onlyPerms[admin;Nie posiadasz uprawnień!]
    $deletecommand`
}