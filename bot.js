const Eris = require('eris');
const secret = require('./config.json')
const bot = new Eris(secret.discord_token);


bot.on('ready', async () => {

	try {
		console.log(`[SA-Toolkit]: ${bot.user.username}#${bot.user.discriminator} is online`);

		await bot.createCommand({
			name: "radio",
			type: Eris.Constants.ApplicationCommandTypes.CHAT_INPUT,
			description: "Listen to San Andreas radio stations (Currently only Radio Los Santos)"
		});
	} catch(err) {
		console.error(`[SA-Toolkit]: ${err}`);
	};
});

bot.on("interactionCreate", async interaction => {
	if(interaction instanceof Eris.CommandInteraction) {
		if(interaction.data.name == "radio") {
			if(!interaction.member.voiceState.channelID) return interaction.createMessage("You must be inside a voice channel");
			const vc = await bot.joinVoiceChannel(interaction.member.voiceState.channelID);
		   	await vc.play("http://localhost/radiolossantos.mp3");
		   	interaction.createMessage(`<#${interaction.member.voiceState.channelID}>: Radio Los Santos`)
		}
	}
});

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