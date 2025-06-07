package models

case class HangmanGame(var gameInProgress: Boolean, 
                       var guessWord: String,
                       var previousGuesses: Seq[Char],
                       var currentProgress: String,
                       var guessCounter: Int,
                       var failureCounter: Int) {
  
  val alphabet: Seq[Char] = Seq(
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  )

  val hangmanImage: Seq[String] = Seq(
    "  _______",
    "  |     |",
    "  |     O",
    "  |    /|\\",
    "  |    / \\",
    "  |",
    "__|___",
    "|    |"
  )
  
  def reset(): Unit = {
    gameInProgress = false
    guessWord = ""
    previousGuesses = Seq()
    currentProgress = ""
    guessCounter = 0
    failureCounter = 0
  }
  
  def setWord(word: String): Unit = {
    gameInProgress = true
    guessWord = word
    currentProgress = word.map(_ => '_')
  }
  
  def setCurrentProgress(): Unit = {
    val lettersNotGuessed = alphabet.diff(previousGuesses)
    currentProgress = guessWord.map(char => if(lettersNotGuessed.contains(char)) '_' else char)
  }
}

object HangmanGame {
  def createNew: HangmanGame = HangmanGame(false, "", Seq(), "", 0, 0)
}
