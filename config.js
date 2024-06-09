import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['967773289295', 'كلوفر丫:١⁶𝑘𝑎𝑝𝑎𝑠', true],
  ['967773289295']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['967773289295', '967773289295']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'بوت' 
global.author = 'كلوفر丫:١⁶𝑘𝑎𝑝𝑎𝑠' 

//--info FG
global.botName = 'بوت'
global.fgig = '*https://tinyurl.com/23xtv4wl*' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = '120363160276571146@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://chat.whatsapp.com/JRz2Z2IqhfbI10PbPE5Ydq'
global.bgp = 'https://chat.whatsapp.com/JRz2Z2IqhfbI10PbPE5Ydq'
global.bgp2 = 'https://chat.whatsapp.com/JRz2Z2IqhfbI10PbPE5Ydq'
global.bgp3 = '' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
