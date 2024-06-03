const handler = async (m, { conn }) => {
  
const sections = [
{
name: 'single_select',
buttonParamsJson: {
title: 'القوائم',
sections: [
{
title: 'Copyright © 2024 dark man.',
highlight_label: 'بريميوم',
rows: [
{
  
header: 'بريميوم',
title: 'قسم اوامر بريميوم',
//description: '',
id: '.بريم'
}
]
},
{
rows: [
{
header: 'القسم الاول',
title: 'اوامر المجموعات',
id: 'م1'
},
{
header: 'القسم الثاني',
title: 'اوامر التحويل',
id: '.2p'
},
{
header: 'القسم الثالث',
title: 'اوامر الادوات',
id: '.3'
},
{
header: 'القسم الرابع',
title: 'اوامر الترفيه',
id: '.4p'
},
{
header: 'القسم الخامس',
title: 'اوامر البحث',
id: '.5'
},
{
header: 'القسم السادس',
title: 'اوامر التحميل',
id: '.6p'
},
{
header: 'القسم السابع',
title: 'اوامر الوجو',
id: '.7'
},
{
header: 'القسم الثامن',
title: 'اوامر التأثيرات الصوتية',
id: '.8p'
},
{
header: 'القسم التاسع',
title: 'اوامر الخاصة بالاعضاء',
id: '.9'
},
{
header: 'القسم العاشر',
title: 'اوامر الذكاء الاصطناعي',
id: '.10'
}
]
},
  
]
}
},
{
name: "quick_reply",
buttonParamsJson: {
display_text:"بياناتي",
id: ".myinfo"
}
},
{
name: "cta_url",
buttonParamsJson: {
display_text:"قناتي",
url:"https://whatsapp.com/channel/0029VaI4a3JDZ4Lb0AHbdu47",
merchant_url:"https://whatsapp.com/channel/0029Va14a3JDZ4Lb0AHbdu47"
}
}
];

  
const listMessage = {
title: `Hello ${m.pushName}!.`,
text: "معلومات",
footer: "dark man",
buttons: sections
};
await conn.sendButton(m.chat, listMessage);
};

handler.help = ['Buttons']
handler.tags = ['group']
handler.command = ['man']

export default handler;
