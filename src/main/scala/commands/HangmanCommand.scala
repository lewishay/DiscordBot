package commands

import discord4j.core.`object`.entity.Message
import discord4j.core.event.domain.message.MessageCreateEvent
import models.HangmanGame

import scala.io.Source
import scala.util.Random

object HangmanCommand:

  // Using a single model with mutable variables like this only supports one game being played at a time.
  // If simultaneous games are required, consider a database (channelId as the key?)
  val hangman: HangmanGame = HangmanGame.createNew

  def run(event: MessageCreateEvent, args: Option[String]): Message = {
    val channel = event.getMessage.getChannel.block
    val response = generateHangmanContent(args)
    channel.createMessage(response).block
  }

  def generateHangmanContent(maybeString: Option[String]): String =
    if (hangman.gameInProgress) {
      maybeString match {
        case Some(arg) if arg.length == 1 && hangman.alphabet.contains(arg.charAt(0)) => guessLetter(arg.charAt(0).toLower)
        case Some(arg) if arg.length == 1 => "Invalid character provided, please guess a letter of the alphabet"
        case Some(arg) => guessWord(arg.toLowerCase)
        case None => "You need to provide an argument to use this command"
      }
    } else {
      maybeString match {
        case Some(arg) if arg == "new" =>
          val bufferedSource = Source.fromResource("wordlist.txt")
          val wordList = bufferedSource.getLines().toSeq
          bufferedSource.close()
          val random = new Random().nextInt(wordList.length)
          val word = wordList(random)
          hangman.setWord(word)
          "A new game has been started!"
        case Some(arg) => "There is no game in progress. Type `!hangman new` to start a new game."
        case None => "You need to provide an argument to use this command"
      }
    }

  def guessLetter(letter: Char): String = {
    if (hangman.previousGuesses.contains(letter)) {
      "You already guessed this letter, try another.\n" +
        s"Previous guesses: `${hangman.previousGuesses.mkString(", ")}`\n" +
        s"Current word progress: `${hangman.currentProgress}`"
    } else {
      hangman.guessCounter += 1
      hangman.previousGuesses = hangman.previousGuesses :+ letter
      hangman.setCurrentProgress()

      val guessFeedback = if (hangman.guessWord.contains(letter)) {
        "Correct guess!"
      } else {
        hangman.failureCounter += 1
        "Incorrect guess!\n" +
          image
      }

      if (hangman.failureCounter == hangman.hangmanImage.length) {
        failure
      } else {
        val result = if (hangman.currentProgress.contains('_')) {
          s"Previous guesses: `${hangman.previousGuesses.mkString(", ")}`\n" +
            s"Current word progress: `${hangman.currentProgress}`"
        } else {
          s"Congratulations, you guessed the last remaining letter!\n" +
            success
        }

        s"$guessFeedback\n$result"
      }
    }
  }

  def guessWord(word: String): String = {
    hangman.guessCounter += 1
    if (word == hangman.guessWord) {
      "Congratulations, you guessed the word correctly!\n" +
        success
    } else {
      hangman.failureCounter += 1
      if (hangman.failureCounter == hangman.hangmanImage.length) {
        failure
      } else {
        val previousGuesses =
          if(hangman.previousGuesses.nonEmpty) s"Previous guesses: `${hangman.previousGuesses.mkString(", ")}`\n"
          else ""
        "Incorrect guess!\n" +
          s"$image\n" +
          previousGuesses +
          s"Current word progress: `${hangman.currentProgress}`"
      }
    }
  }

  def image: String = {
    "```" + hangman.hangmanImage.take(hangman.failureCounter).mkString("\n") + "```"
  }

  def success: String = {
    val numOfGuesses = hangman.guessCounter
    val word = hangman.guessWord
    hangman.reset()
    s"The word was `$word`. You got it in $numOfGuesses guesses."
  }

  def failure: String = {
    val numOfGuesses = hangman.guessCounter
    val word = hangman.guessWord
    val imageBeforeReset = image
    hangman.reset()
    "GAME OVER!\n" +
      s"$imageBeforeReset\n" +
      s"The word was: `$word`. You failed after $numOfGuesses guesses."
  }
