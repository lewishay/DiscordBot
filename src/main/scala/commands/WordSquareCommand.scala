package commands

import discord4j.core.`object`.entity.Message
import discord4j.core.event.domain.message.MessageCreateEvent

object WordSquareCommand:

  def run(event: MessageCreateEvent, args: Option[String]): Message = {
    val channel = event.getMessage.getChannel.block
    val response = generateWordSquareContent(args)
    channel.createMessage(response).block
  }

  def generateWordSquareContent(args: Option[String]): String = {
    args match {
      case Some(arg) if arg.length > 19 => "This word is too big, please use a word with fewer than 20 characters"
      case Some(arg) => "```" + recFunc(arg.toUpperCase, 0) + "```"
      case None => "You need to provide an argument to use this command"
    }
  }

  private def recFunc(s: String, n: Int): String = n match {
    case _ if n == (s.length - 1) =>
      s.map(x => s"$x ").mkString.reverse.tail
    case 0 =>
      s.map(x => s"$x ").mkString.substring(0, (s.length * 2) - 1) + "\n" + recFunc(s, n + 1)
    case _ =>
      s"${s.charAt(n)}${" " * (s.length - 2)}${s.charAt(s.length - 1 - n)}"
        .map(x => s"$x ").mkString.substring(0, (s.length * 2) - 1) + "\n" + recFunc(s, n + 1)
  }

