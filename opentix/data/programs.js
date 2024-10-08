export default () => {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: 'https://s3.resource.opentix.life/upload/program/1714193054829BhtBzhcP3G.jpeg',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'fit',
      action: {
        type: 'uri',
        uri: 'https://www.opentix.life/'
      }
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '《時空旅人》台北市松韻合唱團創團卅週年團慶音樂會',
          weight: 'bold',
          size: 'xl'
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Type',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '合唱',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Place',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '國家兩廳院演奏廳',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            }
          ]
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: '詳細資料',
            uri: 'https://www.opentix.life/'
          }
        }
      ],
      flex: 0
    }
  }
}
