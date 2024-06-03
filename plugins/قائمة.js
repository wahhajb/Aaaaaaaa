let handler = async (m, { conn, args, usedPrefix, command }) => {
  let button = await conn.sendMessage(m.chat, {
    image: { url: "https://telegra.ph/file/4d94d11dd060c372ee632.jpg" },
    caption: "*قـائـمـة الاوامــر*\n\n🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة",
    footer: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕",
    buttons: [
      {
        buttonId: "/معلومات",
        buttonText: { displayText: "معلومات البوت" },
        type: 1
      },
      {
        buttonId: "/اوامر",
        buttonText: { displayText: "قسم الاوامر" },
        type: 1
      }
    ],
    headerType: 4
  }, {})
}

handler.help = ["لسته"]
handler.tags = ["main"]
handler.command = ["لسته"]
export default handler
