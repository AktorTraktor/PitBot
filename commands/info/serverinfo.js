module.exports.command = {
    name: "serverinfo",
    aliases: ['server-info','si','infoserver','info-server'],
    code: `$thumbnail[$serverIcon]
    $title[ServerInfo]
    $description[• Nazwa: $serverName
• Owner: <@$ownerID>
• Użytkownicy: $membersCount
• Role: $roleCount
• Emoji: $emojiCount
• Nitro: $serverBoostCount
• Poziom weryfikacji: $serverVerificationLevel]
$footer[$getServerInvite]
$color[RANDOM]`
}