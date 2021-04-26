module.exports.command = {
    name: "help",
    aliases: ['komendy','pomoc'],
    code: `$reactionCollector[$splitText[1];everyone;1m;🔄,1️⃣,2️⃣,3️⃣;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4;yes]
    $textSplit[$sendMessage[{title: Komendy} {description:Moduły:
    1️⃣ - Informacyjne
    2️⃣ - Muzyczne
    3️⃣ - Administracyjne} {color:RANDOM};yes]; ]`
    }