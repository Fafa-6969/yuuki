const aoi = require("aoi.js")
const { TOKEN, PREFIX } = require('./config.json') 
const ayane = new aoi.Bot({ 
       token: TOKEN,
       prefix: PREFIX,
       autoUpdate: true
})
//client

const buttons = require('discord-buttons')
buttons(ayane.client)
//buttons

ayane.onMessage({ respondToBots: false, guildOnly: true }) 
ayane.onMessageDelete()
ayane.onMessageUpdate()
//events

ayane.readyCommand({ channel: "", code: `$log[Client ($userTag[$clientID]) is now ready!]` })
//ready command

ayane.loadCommands(`./projects/ayane/cmds`, true)
//command handler

ayane.variables(require('./projects/ayane/handlers/var.js'))
//variable handler

ayane.status(require('./projects/ayane/handlers/status.js'))
//status handler

ayane.client.on('debug', console.log)
//discord.js debugger
