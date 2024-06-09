 
let handler = async (m, { conn }) => {

m.reply(`
≡  *${botName}ᴮᴼᵀ ┃ SUPPORT*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ قناة البوت:
${fgcanal}

▢ جروب *1*
${bgp}

▢ جروب *2*
${bgp2}

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
 ▢ *إنستغرام:*
• https://instagram.com/yd__l
▢ *واتساب:*
• https://wa.me/967773289295`)

}
handler.help = ['الدعم']
handler.tags = ['main']
handler.command = ['grupos', 'groups', 'support', 'الدعم', 'دعم الجروب'] 

export default handler
