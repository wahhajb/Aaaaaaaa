 
import fg from 'api-dylux'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    
        if (!args[0]) throw `✳️ ${mssg.noLink('TikTok')}\n\n 📌 ${mssg.example} : ${usedPrefix + command} https://www.tiktok.com/@iiioii_/video/7346675926446476562?_r=1&u_code=e9h6d72fj61ga6&preview_pb=0&sharer_language=ar&_d=edjb489bl3e4c1&share_item_id=7346675926446476562&source=h5_m&timestamp=1717954300&user_id=7270210984266220549&sec_user_id=MS4wLjABAAAA0FnXDTsDojKzENK7rJXwnQfiysTv17ibjRIbgfmS52WeIMyGbx6N46ksNGNZSL_s&social_share_type=0&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7361023191681140487&share_link_id=cc6e7dc9-fdde-4b66-ab8c-91e3a13b0744&share_app_id=1233&ugbiz_name=Main&ug_btm=b8727%2Cb2878`
        if (!args[0].match(/tiktok/gi)) throw `❎ ${mssg.noLink('TikTok')}`
        m.react(rwait)
      
        try {
        let res = await fetch(global.API('fgmods', '/api/downloader/tiktok', { url: args[0] }, 'apikey'))
        let data = await res.json()

        if (!data.result.images) {
            let tex = `
┌─⊷ *TIKTOK DL* 
▢ *${mssg.name}:* ${data.result.author.nickname}
▢ *${mssg.username}:* ${data.result.author.unique_id}
▢ *${mssg.duration}:* ${data.result.duration}
▢ *Likes:* ${data.result.digg_count}
▢ *${mssg.views}:* ${data.result.play_count}
▢ *${mssg.desc}:* ${data.result.title}
└───────────
`
            conn.sendFile(m.chat, data.result.play, 'tiktok.mp4', tex, m);
            m.react(done)
        } else {
            let cap = `
▢ *Likes:* ${data.result.digg_count}
▢ *${mssg.desc}:* ${data.result.title}
`
            for (let ttdl of data.result.images) {
                conn.sendMessage(m.chat, { image: { url: ttdl }, caption: cap }, { quoted: m })
            }
            conn.sendFile(m.chat, data.result.play, 'tiktok.mp3', '', m, null, { mimetype: 'audio/mp4' })
            m.react(done)
        }

      } catch (error) {
        m.reply(`❎ ${mssg.error}`)
    }
   
}

handler.help = ['تيكتوك']
handler.tags = ['dl']
handler.command = ['tiktok', 'tt', 'tiktokimg', 'tiktokslide','تيكتوك','تيك توك','تيك']
handler.diamond = false

export default handler
