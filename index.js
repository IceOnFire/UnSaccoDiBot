'use strict'

var tg = require('telegram-node-bot')(process.env.UNSACCODIBOT_TOKEN)

tg.router.when(['ping'], 'PingController')

tg.controller('PingController', ($) => {
  tg.for('ping', () => {
    $.sendMessage('ping lo dici a tua sorella')
  })
})
