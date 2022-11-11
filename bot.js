const Eris = require('eris');
const secret = require('./config.json')
const bot = new Eris(secret.discord_token);


bot.on('ready', () => console.log(`[SA-Toolkit]: ${bot.user.username}#${bot.user.discriminator} is online`));

/*
bot.on('messageCreate', (message) => {
	if (message.content === '!ping') {
		bot.createMessage(message.channel.id, 'Pong!');
	} else if (message.content === 'Hello') {
		bot.createMessage(message.channel.id, 'Choo choo!');
	}
});
*/


bot.connect();