package bot

import config.Config
import discord4j.core.DiscordClientBuilder
import discord4j.core.event.domain.message.MessageCreateEvent

object Bot:
  def start(): Unit = {
    val client = DiscordClientBuilder.create(Config.token).build()
    val gateway = client.login().block()

    gateway.on(classOf[MessageCreateEvent])
      .subscribe(event => CommandHandler.handle(event, Config.prefix))

    gateway.onDisconnect().block()
  }
