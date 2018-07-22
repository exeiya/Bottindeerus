require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

const commands = {
    judge: (msg) => {
        msg.channel.send('https://cdn.suwalls.com/wallpapers/meme/look-of-disapproval-16244-1920x1200.jpg')
        console.log('judging')
    },
    smile: (msg) => {
        msg.reply('(◕‿◕✿)')
    },
    angry: (msg, args) => {
        const member = msg.guild.members.find(user => {
            user.user.username === args[0]
            return user.user.username === args[0]
        })
        if (!member) {
            console.log('NOT HERE',member)
            msg.reply('u wot, no such person here ༼ ,  .︣  o  .︣ , ༽')
        } else if (member.id === '470214882994814976') {
            msg.reply('u won\'t fool me 凸(⌐■̀_■́ )凸')
            //凸( •̀_•́ )凸
        }
        else {
            console.log('angry @', member.user.username, member.id)
            msg.channel.send(`<@${member.id}> ༼ •̀ ₒ •́ ༽`)
        }
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', async msg => {
    if (msg.author.bot) return

    if (msg.content.includes('hyvä botti')) {
        msg.reply('you mean me? :eyes: ')
    }

    if (msg.content.indexOf('!') !== 0) return

    const args = msg.content.slice(1).trim().split(' ')
    const cmd = args.shift().toLowerCase()
    const current = commands[cmd]

    if (current) return current(msg, args)
    
    msg.reply('٩(◕‿◕｡)۶')
})

client.login(process.env.token)