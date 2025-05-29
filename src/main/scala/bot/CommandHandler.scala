package bot

import com.typesafe.scalalogging.Logger
import discord4j.core.event.domain.message.MessageCreateEvent
import commands.*

object CommandHandler:

  val logger: Logger = Logger("[CommandHandler]")

  def handle(event: MessageCreateEvent, prefix: String): Unit = {
    val content = event.getMessage.getContent

    if (content.startsWith(prefix)) {
      content.stripPrefix(prefix).split(" ").toList match {
        case "ping" :: _ => PingCommand.run(event)
        case "ws" :: args => WordSquareCommand.run(event, args.headOption)
        case _ =>
          logger.info(s"Command '$content' not recognised")
          ()
      }
    }
  }
