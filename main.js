const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
require('./index.js')
nocache('./index.js', module => console.log(`${module} Telah Di Update✓`))
const starts = async (nisabotz = new WAConnection()) => {
nisabotz.logger.level = 'warn'
nisabotz.version = [2, 2143, 8]
nisabotz.browserDescription = ["nisabotz", "safari", "windows 10"];
console.log(banner.string)
nisabotz.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))})
fs.existsSync('./session.json') && Nisa.loadAuthInfo('./session.json')
nisabotz.on('connecting', () => {
start('2', 'Connecting...')})
nisabotz.on('open', () => {
success('2', 'Connected')})
await nisabotz.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(Nisa.base64EncodedAuthInfo(), null, '\t'))
nisabotz.on('chat-update', async (message) => {
require('./index.js')(Nisa, message)})}
function nocache(module, cb = () => { }) {
console.log('[ ! ]', `'${module}'`, 'DI Pantau Oleh Nisabotz')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)})}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)}})}

starts()