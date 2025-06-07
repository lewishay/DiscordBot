package commands

import org.scalatest.matchers.should.Matchers
import org.scalatest.wordspec.AnyWordSpecLike

//noinspection ScalaUnusedExpression
class HangmanCommandSpec extends AnyWordSpecLike with Matchers:

  def args(word: String): String = HangmanCommand.generateHangmanContent(Some(word))

  ".generateHangmanContent should return the expected messages" when:

    "a game is won by guessing letters" in:
      args("new") shouldBe "A new game has been started!"
      args("t") shouldBe "Correct guess!\n" +
        "Previous guesses: `t`\n" +
        "Current word progress: `t__t___`"
      args("e") shouldBe "Correct guess!\n" +
        "Previous guesses: `t, e`\n" +
        "Current word progress: `te_t___`"
      args("s") shouldBe "Correct guess!\n" +
        "Previous guesses: `t, e, s`\n" +
        "Current word progress: `test___`"
      args("t") shouldBe "You already guessed this letter, try another.\n" +
        "Previous guesses: `t, e, s`\n" +
        "Current word progress: `test___`"
      args("i") shouldBe "Correct guess!\n" +
        "Previous guesses: `t, e, s, i`\n" +
        "Current word progress: `testi__`"
      args("n") shouldBe "Correct guess!\n" +
        "Previous guesses: `t, e, s, i, n`\n" +
        "Current word progress: `testin_`"
      args("g") shouldBe "Correct guess!\n" +
        "Congratulations, you guessed the last remaining letter!\n" +
        "The word was `testing`. You got it in 6 guesses."

    "a game is won by guessing the word" in :
      args("new") shouldBe "A new game has been started!"
      args("testing") shouldBe "Congratulations, you guessed the word correctly!\n" +
        "The word was `testing`. You got it in 1 guesses."

    "a game is lost by guessing letters" in :
      args("new") shouldBe "A new game has been started!"
      args("a") shouldBe "Incorrect guess!\n" +
        "```  _______```\n" +
        "Previous guesses: `a`\n" +
        "Current word progress: `_______`"
      args("b") shouldBe "Incorrect guess!\n" +
        "```  _______\n" +
        "  |     |```\n" +
        "Previous guesses: `a, b`\n" +
        "Current word progress: `_______`"
      args("c") shouldBe "Incorrect guess!\n" +
        "```  _______\n" +
        "  |     |\n" +
        "  |     O```\n" +
        "Previous guesses: `a, b, c`\n" +
        "Current word progress: `_______`"
      args("d") shouldBe "Incorrect guess!\n" +
        "```  _______\n" +
        "  |     |\n" +
        "  |     O\n" +
        "  |    /|\\```\n" +
        "Previous guesses: `a, b, c, d`\n" +
        "Current word progress: `_______`"
      args("f") shouldBe "Incorrect guess!\n" +
        "```  _______\n" +
        "  |     |\n" +
        "  |     O\n" +
        "  |    /|\\\n" +
        "  |    / \\```\n" +
        "Previous guesses: `a, b, c, d, f`\n" +
        "Current word progress: `_______`"
      args("x") shouldBe "Incorrect guess!\n" +
        "```  _______\n" +
        "  |     |\n" +
        "  |     O\n" +
        "  |    /|\\\n" +
        "  |    / \\\n" +
        "  |```\n" +
        "Previous guesses: `a, b, c, d, f, x`\n" +
        "Current word progress: `_______`"
      args("z") shouldBe "Incorrect guess!\n" +
        "```  _______\n" +
        "  |     |\n" +
        "  |     O\n" +
        "  |    /|\\\n" +
        "  |    / \\\n" +
        "  |\n" +
        "__|___```\n" +
        "Previous guesses: `a, b, c, d, f, x, z`\n" +
        "Current word progress: `_______`"
      args("j") shouldBe "GAME OVER!\n" +
        "```  _______\n" +
        "  |     |\n" +
        "  |     O\n" +
        "  |    /|\\\n" +
        "  |    / \\\n" +
        "  |\n" +
        "__|___\n" +
        "|    |```\n" +
        "The word was: `testing`. You failed after 8 guesses."

    "a game is lost by guessing words" in :
      args("new") shouldBe "A new game has been started!"
      args("bleh") shouldBe "Incorrect guess!\n" +
        "```  _______```\n" +
        "Current word progress: `_______`"
      args("erm") shouldBe "Incorrect guess!\n" +
        "```  _______\n" +
        "  |     |```\n" +
        "Current word progress: `_______`"
      args("dunno") shouldBe "Incorrect guess!\n" +
        "```  _______\n" +
        "  |     |\n" +
        "  |     O```\n" +
        "Current word progress: `_______`"
      args("what") shouldBe "Incorrect guess!\n" +
        "```  _______\n" +
        "  |     |\n" +
        "  |     O\n" +
        "  |    /|\\```\n" +
        "Current word progress: `_______`"
      args("why") shouldBe "Incorrect guess!\n" +
        "```  _______\n" +
        "  |     |\n" +
        "  |     O\n" +
        "  |    /|\\\n" +
        "  |    / \\```\n" +
        "Current word progress: `_______`"
      args("how") shouldBe "Incorrect guess!\n" +
        "```  _______\n" +
        "  |     |\n" +
        "  |     O\n" +
        "  |    /|\\\n" +
        "  |    / \\\n" +
        "  |```\n" +
        "Current word progress: `_______`"
      args("nope") shouldBe "Incorrect guess!\n" +
        "```  _______\n" +
        "  |     |\n" +
        "  |     O\n" +
        "  |    /|\\\n" +
        "  |    / \\\n" +
        "  |\n" +
        "__|___```\n" +
        "Current word progress: `_______`"
      args("break") shouldBe "GAME OVER!\n" +
        "```  _______\n" +
        "  |     |\n" +
        "  |     O\n" +
        "  |    /|\\\n" +
        "  |    / \\\n" +
        "  |\n" +
        "__|___\n" +
        "|    |```\n" +
        "The word was: `testing`. You failed after 8 guesses."

    "args are provided before a new game is started" in:

      args("a") shouldBe "There is no game in progress. Type `!hangman new` to start a new game."
      args("huh") shouldBe "There is no game in progress. Type `!hangman new` to start a new game."
      args("what") shouldBe "There is no game in progress. Type `!hangman new` to start a new game."

    "no args are provided prior to a game being started" in:

      HangmanCommand.generateHangmanContent(None) shouldBe "You need to provide an argument to use this command"

    "invalid args are provided in the middle of a game" in :

      args("new") shouldBe "A new game has been started!"
      args("/") shouldBe "Invalid character provided, please guess a letter of the alphabet"
      HangmanCommand.generateHangmanContent(None) shouldBe "You need to provide an argument to use this command"
