'use strict'

var tg = require('telegram-node-bot')('231087875:AAE9elCEi1peIz-52VAR_p3RdTl2jCYem6c')

tg.router.
when(['ping'], 'PingController')

tg.controller('PingController', ($) => {
  tg.for('ping', () => {
    $.sendMessage('ping lo dici a tua sorella')
  })
})
