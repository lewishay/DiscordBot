package commands

import commands.WordSquareCommand
import org.scalatest.matchers.should.Matchers
import org.scalatest.wordspec.AnyWordSpecLike

class WordSquareCommandSpec extends AnyWordSpecLike with Matchers:

  def wrapInBackticks(result: String) = s"```$result```"

  "Calling the generateWordSquareContent function" should:

    "generate a valid word square with all upper case letters" when:

      "the word has one letter" in:

        val result = WordSquareCommand.generateWordSquareContent(Some("A"))
        val expectedResult = "A"

        result shouldBe wrapInBackticks(expectedResult)

      "the word has two letters" in:

        val result = WordSquareCommand.generateWordSquareContent(Some("AZ"))
        val expectedResult = "A Z\n" +
                             "Z A"

        result shouldBe wrapInBackticks(expectedResult)

      "the word has many letters, with a mix of lower and upper case" in:

        val result = WordSquareCommand.generateWordSquareContent(Some("syNerGY"))
        val expectedResult = "S Y N E R G Y\n" +
                             "Y           G\n" +
                             "N           R\n" +
                             "E           E\n" +
                             "R           N\n" +
                             "G           Y\n" +
                             "Y G R E N Y S"

        result shouldBe wrapInBackticks(expectedResult)

    "return the appropriate error message when no word is provided" in:

      val result = WordSquareCommand.generateWordSquareContent(None)
      val expectedResult = "You need to provide an argument to use this command"

      result shouldBe expectedResult

    "return the appropriate error message when the word is greater than 19 characters in length" in:

      val result = WordSquareCommand.generateWordSquareContent(Some("qwertyuiopasdfghjklz"))
      val expectedResult = "This word is too big, please use a word with fewer than 20 characters"

      result shouldBe expectedResult
