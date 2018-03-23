const Channel = require('../../model/channel')

class SlackChannel extends Channel {
  constructor(rtm, channel) {
    super(channel.id, channel.name)
    this.rtm = rtm
  }
}

module.exports = SlackChannel