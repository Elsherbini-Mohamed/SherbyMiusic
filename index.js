const TelegramBot = require('node-telegram-bot-api');

// Configurazione del token di accesso del bot
const token = '6086046706:AAEVrrH7PMy9Gja23rQYuix4nhwzlCBWvS0';
const bot = new TelegramBot(token, { polling: true });

// Ascolta le richieste degli utenti
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Invia un messaggio di risposta
  bot.sendMessage(chatId, 'Ciao, sono un bot Telegram!');
});


// bot.listen(process.env.PORT || 5000, async () => {
//     console.log('🚀 app running on port', process.env.PORT || 5000)
//     await init()
// })