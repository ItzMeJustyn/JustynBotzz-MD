//CASE BUATAN HANAA JANGAN DIHAPUS YAH KAKK CAPE TAUU BUATNYAA :')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let url = cecanmalaysia[Math.floor(Math.random() * cecanmalaysia.length)]
	conn.sendButtonImg(m.chat, url, 'NihhKakk✨', wm2, 'Next', '.cecanmalaysia', m)
}
handler.help = ['cecanmalaysia']
handler.tags = ['cecan']
handler.command = /^(cecanmalaysia)$/i

module.exports = handler

global.cecanmalaysia = [
"https://c.top4top.io/p_196240q3o1.jpg",
"https://e.top4top.io/p_1962v04461.jpg",
"https://d.top4top.io/p_1962lzpb31.jpg",
"https://a.top4top.io/p_19627bm3c1.jpg",
"https://b.top4top.io/p_19624pvv61.jpg",
"https://k.top4top.io/p_19625n89w1.jpg",
"https://e.top4top.io/p_1962qpsvb1.jpg",
"https://d.top4top.io/p_1962m09jb1.jpg",
"https://f.top4top.io/p_1962va89q1.jpg",
"https://g.top4top.io/p_1962d4cuh1.jpg",
"https://j.top4top.io/p_1962grit21.jpg",
"https://a.top4top.io/p_1962zgkj21.jpg",
"https://c.top4top.io/p_1962csdwa1.jpg",
"https://i.top4top.io/p_1962y8nl71.jpg",
"https://h.top4top.io/p_1962mt0wq1.jpg",
"https://f.top4top.io/p_1962p3bmk1.jpg",
"https://i.top4top.io/p_19622gld51.jpg",
"https://j.top4top.io/p_1962d0xml1.jpg",
"https://l.top4top.io/p_1962yyuuh1.jpg",
"https://c.top4top.io/p_1962c7n2o1.jpg",
"https://k.top4top.io/p_1962pac7k1.jpg",
"https://e.top4top.io/p_1962rcc7k1.jpg",
"https://d.top4top.io/p_19629ls3n1.jpg",
"https://h.top4top.io/p_1962caiz61.jpg",
"https://g.top4top.io/p_1962y8oif1.jpg"
]
