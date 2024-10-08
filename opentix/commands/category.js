export default () => {
  return {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '戲劇表演',
              size: 'xxl',
              color: '#ffffff',
              weight: 'bold',
              align: 'center'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '現代戲劇',
                data: '戲劇-現代戲劇'
              }
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '戲曲',
                data: '戲劇-戲曲'
              }
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '音樂劇',
                data: '戲劇-音樂劇'
              }
            }
          ]
        },
        styles: {
          header: {
            backgroundColor: '#00B900'
          }
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '聲樂演出',
              size: 'xxl',
              color: '#ffffff',
              weight: 'bold',
              align: 'center'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '合唱',
                data: '音樂-合唱'
              }
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '獨唱',
                data: '音樂-獨唱'
              }
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '歌劇',
                data: '音樂-歌劇'
              }
            }
          ]
        },
        styles: {
          header: {
            backgroundColor: '#00B900'
          }
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '樂團演出',
              size: 'xxl',
              color: '#ffffff',
              weight: 'bold',
              align: 'center'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '管絃樂團',
                data: '音樂-管絃樂團'
              }
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '室內樂',
                data: '音樂-室內樂'
              }
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '國樂',
                data: '音樂-國樂'
              }
            }
          ]
        },
        styles: {
          header: {
            backgroundColor: '#00B900'
          }
        }
      }
    ]
  }
}
