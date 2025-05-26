# discord bot

A Discord bot built with Scala, SBT and Discord4J.

## Pre-requisites

A config file containing the auth token must exist at the location `src/main/resources/application.conf`. An example file looks like this:
```
discord {
  token = "REPLACE_WITH_YOUR_TOKEN"
  prefix = "!"
}
```

## Run

`sbt run`