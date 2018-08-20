exports.run = (client, message) => {
  message.reply('IP?')
    .then(msg => {
      msg.edit(`mc.zanitynetwork.com!`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ip',
  description: 'Get to know our minecraft Ip!',
  usage: 'ip'
};
