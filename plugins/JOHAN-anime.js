import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/anime-${command}.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]   
conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m)
//conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['🔄 NEXT 🔄', `${usedPrefix + command}`]], m)    
}
handler.command = handler.help = ['اكيرا', 'اكيامي', 'آنا', 'اسونا', 'اكيوزاوا', 'بروتو', 'تشيهو', 'تشيتوغ', 'ديدارا', 'ايرزا', 'ايلاينا', 'ايبا', 'ايميليا', 'هيستيا', 'هيناتا', 'اينوري', 'ايسوزو', 'ايتاشي', 'ايتوري', 'كاغا', 'كاغورا', 'كاوري', 'كيناكي', 'كوتوري', 'كورومي', 'مادارا', 'ميكاسا', 'ميكو', 'ميناتو', 'ناروتو', 'نيزوكو', 'ساجيري', 'ساسوكس', 'ساكورا']
handler.tags = ['anim']
export default handler
