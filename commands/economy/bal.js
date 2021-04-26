module.exports.command = {
    name: "bal",
    aliases: ['balance','bank'],
    code: `
    $title[:gem:|Balans osoby $username[$mentioned[1;yes]]]
    $color[RANDOM]
    $description[
    :purse:|Portfel: $getUserVar[money;$mentioned[1;yes]]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    `
}