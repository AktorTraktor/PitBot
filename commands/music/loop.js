module.exports.command = {
    name: "loop",
    aliases: ['zapętl','pętla'],
    code: `$color[RANDOM]
    $author[Loop;https://images.squarespace-cdn.com/content/v1/58eac4d88419c2d993e74f57/1491954929572-MII6RYJO4QRPZHRFNYAM/ke17ZwdGBToddI8pDm48kOyctPanBqSdf7WQMpY1FsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyD4IQ_uEhoqbBUjTJFcqKvko9JlUzuVmtjr1UPhOA5qkTLSJODyitRxw8OQt1oetw/ITunes_12_logo.png]
    $description[$username zapętlił $queueLength piosenki]
    $onlyIf[$voiceID!=;Nie jesteś na kanale głosowym]
    $loopQueue`
    }