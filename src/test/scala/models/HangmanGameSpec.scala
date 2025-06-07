package models

import models.HangmanGame
import org.scalatest.matchers.should.Matchers
import org.scalatest.wordspec.AnyWordSpecLike

class HangmanGameSpec extends AnyWordSpecLike with Matchers:

  ".createNew" should:

    "create a new HangmanGame instance with the expected default params" in:
      HangmanGame.createNew shouldBe HangmanGame(false, "", Seq(), "", 0, 0)

  ".setWord" should:

    "update the model params to establish a new game has been started with the chosen word" in:
      val model = HangmanGame.createNew
      model.setWord("testing")
      model shouldBe HangmanGame(true, "testing", Seq(), "_______", 0, 0)

  ".setCurrentProgress" should:

    "update the currentProgress param based on the previous guesses" in:
      val model = HangmanGame(true, "testing", Seq('t', 'i', 'g'), "", 3, 0)
      model.setCurrentProgress()
      model shouldBe HangmanGame(true, "testing", Seq('t', 'i', 'g'), "t__ti_g", 3, 0)

  ".reset" should:

    "reset a HangmanGame instance to the expected default params" in:
      val model = HangmanGame(true, "testing", Seq('t', 'i', 'g'), "t__ti_g", 4, 1)
      model.reset()
      model shouldBe HangmanGame(false, "", Seq(), "", 0, 0)
