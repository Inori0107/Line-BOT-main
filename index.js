import 'dotenv/config'
import linebot from 'linebot'
import commandCategory from './commands/category.js'
import commandPrograms from './commands/programs.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})
// 推薦列表
bot.on('message', (event) => {
  if (process.env.DEBUG === true) {
    console.log(event)
  }
  if (event.message.type === 'text') {
    if (event.message.text.includes('無聊')) {
      event
        .reply('需要我推薦有趣的演出嗎？')
        .then((message) => {
          console.log(message)
        })
        .catch((err) => {
          console.log(err)
        })
    } else if (event.message.text.match(/節目|種類|好/)) {
      event.reply({
        type: 'flex',
        altText: '節目清單',
        contents: commandCategory()
      })
    }
  }
})
// 選擇單一類型作篩選
bot.on('postback', (event) => {
  // console.log(event)
  commandPrograms(event)
})

// 輸出

// 確認連接阜及機器人的網站等等
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
