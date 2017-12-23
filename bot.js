const Discord = require("discord.js");
const prefix = "*"


var ya = [
   "Welcome to Apple Nation!"
    ];

var kill = [
    "`Yes`", 
    "`No`",
    "`Maybe`",
    "*Sign pointing to yes*",
    "*Sign pointing to no*",
    "`It can be proved`",
    "`It is certain`",
    "`I don't know for sure, but I read it as negative`"
];

var fortunes = [
    "You try throwing a bomb at them. The bomb fails miserably and you are stared at with shame.",
    "You throw a bomb at them, they explode in blood and gore while you laugh",
    "You bring a knife to a gun fight, they pierce you with bullets.",
    "You stab them in the heart.",
    "You try stabbing them but they're 2 fst  4 u"

    
];

var bot = new Discord.Client();
bot.on("ready", () => {
    console.log("Ready");
});

bot.on('guildMemberAdd',  (member) => {
    member.guild.channels.get("352990046942396420").send(ya[Math.floor(Math.random() * ya.length)] + member);
    });

bot.on("message", message => {
      if (message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;

      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  console.log(command);
    
if (command === "setgame") {
            let argsresult = args.join(' ')
    if (message.author.id == "206236322719989760") {
                if (!argsresult) {
            message.channel.send(`What should I play? ${message.author.username}`)
            return;
                }

        bot.user.setGame(argsresult)
        message.channel.send('Game has been set!.')
        console.log(`${message.author.username} set the game ${argsresult}`);
    }
    if (message.author.id == "251938340671062036") {
        if (!argsresult) {
            message.channel.send(`What should I play? ${message.author.username}`)
            return;
        }
        bot.user.setGame(argsresult)
        
        message.channel.send('Game has been set!')
        console.log(`${message.author.username} set the game ${argsresult}`);

}
    }
=
    
    if (command === "announce") {
        let author = message.author
        if (message.author.id == "206236322719989760") {
             let msg = message.content.split(' ').slice(1).join(' ');
    if (!msg) {
        message.channel.send('Announce what?')

        return;
     }   
     message.delete()
     message.channel.send('', {
     embed: {
         color: 000000,
         author: {
             name: message.author.tag,
             icon_url: message.author.avatarURL
         },
         title: 'Announcement',
         description: `${msg}`,

         timestamp: new Date(),
         footer: {
             text: bot.user.username,
             icon_url: bot.user.avatar.URL,
         }}})}};
    
    if (command === "embed") {
    let msg = message.content.split(' ').slice(1).join(' ');
    if (!msg) {
        message.channel.send('Embed what?')

        return;
     }   
     message.delete()
     message.channel.send('', {
     embed: {
         color: 000000,
         author: {
             name: message.author.tag,
             icon_url: message.author.avatarURL
         },
         title: 'Say',
         description: `${msg}`,

         timestamp: new Date(),
         footer: {
             text: bot.user.username,
             icon_url: bot.user.avatar.URL,
         }}})};
    
    
    if (command === "cmds") {
        let author = message.author
        message.channel.send('The command list has been sent to you!')
        message.author.send('**Prefix is * ** \n **Commands are:** \n *8ball | Answers a question for you \n *kill | "Kills" You engage in a duel with the player \n *embed | Embeds a message for you')
                            }
      if (message.content.startsWith(prefix + "8ball" )) {
      let author = message.author
if (args[2]) message.channel.sendMessage(kill[Math.floor(Math.random() * kill.length)]);
console.log(`8ball by ${author} or ${author.username} ` + message)
      } else
      
           if (message.content.startsWith(prefix + "kill")) {
      let author = message.author
    let member = message.mentions.members.first();
    if (args[0]) message.channel.sendMessage(`${author} ` + fortunes[Math.floor(Math.random() * fortunes.length)]);
  } 
});
    
    bot.login(process.env.BOT_TOKEN); 
