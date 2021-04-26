module.exports.command = {
    name: "play",
    aliases: ['p','zagraj','puść','odtwórz'],
    code: `$color[RANDOM]
    $author[Piosenka;https://images.squarespace-cdn.com/content/v1/58eac4d88419c2d993e74f57/1491954929572-MII6RYJO4QRPZHRFNYAM/ke17ZwdGBToddI8pDm48kOyctPanBqSdf7WQMpY1FsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyD4IQ_uEhoqbBUjTJFcqKvko9JlUzuVmtjr1UPhOA5qkTLSJODyitRxw8OQt1oetw/ITunes_12_logo.png]
    $thumbnail[$songInfo[thumbnail]]
    $description[Aktualnie odtwarzam **$songInfo[title]**]
    $addField[Opis;**$songInfo[description]**]
    $addField[Czas Trwania;**$songInfo[duration]**]
    $addField[Link;**$songInfo[url]**]
    $playSong[$message;Przepraszam, ale nie mogę odtworzyć tej piosenki]
    $onlyIf[$message!=;Wpisz prawidłową nazwę utworu!]
    $onlyIf[$voiceID!=;Nie jesteś na kanale głosowym]`
    }