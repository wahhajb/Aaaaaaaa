import js from 'javascript-obfuscator';

let handler = async (m, { conn }) => {
    if (!m.quoted || !m.quoted.text) {
        throw 'يرجى الرد على الكود الذي تريد تشفيره\n> بواسطة مجنون!';
    }

    try {
        let res = js.obfuscate(m.quoted.text, {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.75,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: false,
            disableConsoleOutput: true,
            identifierNamesGenerator: 'mangled',
            identifiersDictionary: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
            renameGlobals: true,
            selfDefending: true,
            simplify: true,
            splitStrings: true,
            splitStringsChunkLength: 5,
            stringArray: true,
            stringArrayEncoding: ['base64'],
            stringArrayThreshold: 0.75,
            unicodeEscapeSequence: true,
            stringArrayIndexesType: ['hexadecimal-number'],
            transformObjectKeys: true
        }).getObfuscatedCode();

        if (!res) throw "حدث خطأ :(";
        return conn.reply(m.chat, res, m);
    } catch (error) {
        console.error(error);
        throw "حدث خطأ أثناء التشفير!";
    }
};

handler.help = ['enc'];
handler.tags = ['tools'];
handler.alias = ['enc'];
handler.command = /^(encc)$/i;

export default handler;