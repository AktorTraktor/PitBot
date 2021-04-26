module.exports.command = {
    name: "userinfo",
    aliases: ['user-info','ui','infouser','info-user'],
    code: `$color[RANDOM]
    $author[$userTag[$findUser[$message[1]]] Info]
    $description[**\`Komende wywołał $username\`**
• Nazwa - **$username[$findUser[$message[1]]]**
• Tag - **#$user[$findUser[$message[1]];discrim]**
• ID - **$user[$findUser[$message[1]];id]**
• Data Stworzenia - **$user[$findUser[$message[1]];created]**
• Bot - **$replaceText[$replaceText[$isBot[$findUser[$message[1]]];true;Jest Botem];false;Nie jest botem]**
• Avatar - **[Tutaj]($userAvatar[$findUser[$message[1]]])**]`
   }
