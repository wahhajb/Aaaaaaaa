let handler = async (m, { conn, args, usedPrefix, command }) => {
  let image = await conn.sendFile(m.chat, "https://telegra.ph/file/4d94d11dd060c372ee632.jpg", "image.jpg", "Here is the image", m);
  let button = await conn.relayMessage(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "*قـائـمـة الاوامــر*"
          },
          body: {
            text: "🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة"
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                  title: "اضغط هنا",
                  sections: [
                    {
                      title: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕",
                      highlight_label: "𝙼𝚛 𝙷𝚊𝚖𝚣𝚊",
                      rows: [
                        {
                          header: "معلومات البوت",
                          title: ".المطور",
                          description: "",
                          id: "/معلومات"
                        },
                        {
                          header: "قسم الاوامر",
                          title: ".الاوامر",
                          description: "",
                          id: "/اوامر"
                        }
                      ]
                    }
                  ]
                }),
                messageParamsJson: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕",
                mediaMessage: {
                  upload: "https://telegra.ph/file/4d94d11dd060c372ee632.jpg"
                }
              }
            ]
          }
        }
      }
    }
  }, {})
}

handler.help = ["لسته"]
handler.tags = ["main"]
handler.command = ["لسته"]
export default handler
