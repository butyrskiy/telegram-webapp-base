const { Telegraf } = require("telegraf");
const TOKEN = "7175516468:AAEA-_BUTDVfMOqWmNMmD3TV5r7e-UapP5c";
const bot = new Telegraf(TOKEN);
const web_link = "https://gregarious-maamoul-b058e0.netlify.app";

bot.start((ctx) =>
  ctx.reply("EMD webapp :)", {
    reply_markup: {
      keyboard: [[{ text: "Web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
