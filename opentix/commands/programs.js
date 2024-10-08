import axios from 'axios'
import programs from '../data/programs.js'
// import fs from 'node:fs'

// const time = new Date()
// const toTime = time.primitive()

export default async (event) => {
  try {
    const now = new Date()
    const { data } = await axios.post('https://search.opentix.life/search', {
      categoryFilter: [event.postback.data],
      cityFilter: ['臺北', '新北'],
      language: 'zh-CHT',
      programTimeRangeFilter: {
        to: now.getTime() + 7 * 24 * 60 * 60 * 1000,
        from: now.getTime()
      },
      sortBy: 'ABOUT_TO_BEGIN'
    })
    const bubbles = []
    for (let i = 0; i < 5; i++) {
      if (!data.result.found?.[i]) break
      const bubble = programs()
      bubble.hero.url = data.result.found[i].source.imageUrl
      bubble.body.contents[0].text = data.result.found[i].source.title
      bubble.body.contents[1].contents[0].contents[1].text = data.result.found[i].source.displayCategory
      bubble.body.contents[1].contents[1].contents[1].text = data.result.found[i].source.eventVenues[0].name
      bubbles.push(bubble)
    }
    if (bubbles.length === 0) {
      event.reply('沒有符合篩選條件的節目喔')
      return
    }
    // fs.writeFileSync('./aaa.json', JSON.stringify(bubbles, null, 2))
    const result = await event.reply({
      type: 'flex',
      altText: '節目資訊',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    })
    if (process.env.DEBUG === 'true') {
      console.log(result)
    }
  } catch (e) {
    console.log(e)
  }
}
