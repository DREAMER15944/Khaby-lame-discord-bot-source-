const Discord = require("discord.js");

module.exports = {
  name: "ban",
  aliases: [],
  usage: "ban <member>",
  description: "ban a member",
  run: async (client, message, args) => {




       if(!message.member.hasPermission('BAN_MEMBERS')) {

          const BanPerms = new Discord.MessageEmbed()
          .setColor(15158332)
          .setDescription('🚫 You Do Not Have Permission To Do That! You Need The Permission **``Ban Members``**.')




            message.channel.send(BanPerms);
            return;
        };





        
        let mentionMemberBan = message.mentions.members.first();
        
        if(!mentionMemberBan) {

          const Banmention = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('🚫 You Need To Mention A Member!')






            message.channel.send(Banmention);
            return;
        }

        








        
        if(!mentionMemberBan.kickable) {

          const BanbotPerms = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('🚫 I Do Not Have Permission To Ban That Member!')



            message.channel.send(BanbotPerms);
            return
        };






        
        mentionMemberBan.ban()
            .then(() => console.log(`Banned ${mentionMemberBan.displayName}`))


            const BanWork = new Discord.MessageEmbed()
            .setDescription('✅ Member Banned!')
            .setColor("GREEN")
            





            message.channel.send(BanWork)
            .catch(console.error);




  }
}