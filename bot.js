const Discord = require("discord.js");
const prefix = "*"

var bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Ready");
});

bot.on('guildMemberAdd',  (member) => {
    member.guild.channels.get("352990046942396420").send("Welcome to Apple Nation, " + member);
    });

  bot.on("message", message => {
      if (message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;

      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  console.log(command);
    
    if (command === "help") {
    let member = message.mentions.members.first();
    message.member.sendMessage(``js These are the commands!``)
      message.member.sendMessage(````)
  }
    
    f (command === "L") {
    let member = message.mentions.members.first()
    let author = message.author
    if (!member) {
        message.channel.send(`Who's taking the L?`)
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
         
         title: 'Hand L',
         description: `React with L to hand ${member} an L`,
         

         timestamp: new Date(),
         footer: {
             text: bot.user.username,
             icon_url: bot.user.avatar.URL,
             
        
  }}}

)};
    
if (command === "setgame") {
            let argsresult = args.join(' ')
    if (message.author.id == "206236322719989760") {
                if (!argsresult) {
            message.channel.send(`What should I play? ${message.author.username}`)
            return;
                }

        bot.user.setGame(argsresult)
        message.channel.send('Game has been set!')
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
    
        if (command === "announce") {
        let author = message.author
        if (message.author.id == "206236322719989760") {
             let msg = message.content.split(' ').slice(1).join(' ');
    if (!msg) {
        message.channel.send('Announce what?')

        return;
     }   
     message.delete()
     bot.channels.get('393641468755050496').send('', {
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
        bot.login(process.env.BOT_TOKEN);
