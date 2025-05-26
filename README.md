# discord bot

A Discord bot, built with Scala, SBT, Discord4J.

## Pre-requisites

A config file at the location `src/main/resources/application.conf` containing the discord bot token. An example config file looks like this:
```
discord {
  token = "REPLACE_WITH_YOUR_TOKEN"
  prefix = "!"
}
```

## Run

`sbt run`