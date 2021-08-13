const aoi = require("aoi.js")
const { TOKEN, PREFIX } = require('./config.json') 
const yuuki = new aoi.Bot({ 
       token: TOKEN,
       prefix: PREFIX,
       autoUpdate: true
})
//client

const buttons = require('discord-buttons')
buttons(yuuki.client)
//buttons

yuuki.onMessage({ respondToBots: false, guildOnly: true }) 
yuuki.onMessageDelete()
yuuki.onMessageUpdate()
yuuki.onGuildJoin()
yuuki.onGuildLeave()
//events

yuuki.readyCommand({ channel: "", code: `$log[Client ($userTag[$clientID]) is now ready!]` })
//ready command

yuuki.loadCommands(`./yuuki/cmds`, true)
//command handler

yuuki.variables(require('./yuuki/handlers/variables.js'))
//variable handler

yuuki.status(require('./yuuki/handlers/status.js'))
//status handler

yuuki.client.on('debug', console.log)
//discord.js debugger
