let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let saweria = global.saweria
let numberowner = global.numberowner
let anu = `Hai Kakk๐
Kalian bisa mendukung hanaa agar bot ini tetap up to date dengan:
โโโโใ Donasi โข Emoney ใโโึ
โฃโตอกอโฆ Saweria : ${saweria}
โโโโโโโโโโโโโึ
Berapapun donasi kalian akan sangat berarti ๐

Arigatou!

Contact person Owner:
wa.me/${numberowner} (Owner)

*donasi via follow ig juga boleh*`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Back', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler