package commands

import discord4j.core.`object`.entity.Message
import discord4j.core.event.domain.message.MessageCreateEvent

object HangmanCommand:

  def run(event: MessageCreateEvent): Message = {
    val channel = event.getMessage.getChannel.block
    channel.createMessage("Pong! 🏓").block
  }

