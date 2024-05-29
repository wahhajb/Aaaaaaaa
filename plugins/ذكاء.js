import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
if (!text) return m.reply("ميزة الذكاء الاصطناعي \nمثال:\n .تحدث ما فائدتك")
await m.reply(wait)
try {
// Contoh penggunaan
let result = await CleanDx(text)
await m.reply(result)
} catch (e) {
await m.reply(eror)
}
}
handler.help = ["ذكاء"]
handler.tags = ["ai"]
handler.command = /^(تحدث|gpt)$/i
export default handler

/* New Line */
async function CleanDx(your_qus) {
  let linkaiList = [];
  let linkaiId = generateRandomString(21);
  let Baseurl = "https://vipcleandx.xyz/";
