ThisBuild / scalaVersion := "3.7.0"

lazy val root = (project in file("."))
  .settings(
    name := "discord-bot",
    libraryDependencies ++= Seq(
      "com.discord4j" % "discord4j-core" % "3.2.8",
      "com.typesafe" % "config" % "1.4.3",
      "ch.qos.logback" % "logback-classic" % "1.2.10",
      "com.typesafe.scala-logging" % "scala-logging_3" % "3.9.5",
      "org.scalatest" %% "scalatest" % "3.2.19" % Test
    )
  )