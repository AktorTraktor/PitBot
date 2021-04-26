module.exports.command = {
    name: "cashe",
    aliases: ['warny','warns','ostrzeżenia'],
    code: `$title[Warny użytkownika $username[$mentioned[1]]]
    $description[Warny: $getUserVar[warn]]
    $color[RANDOM]
    $onlyIf[$message!=;Nie podałeś wartości dla **<@osoba>**!]
    `
}