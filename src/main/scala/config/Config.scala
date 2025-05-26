package config

import com.typesafe.config.ConfigFactory

object Config:
  private val config = ConfigFactory.load()
  val token: String = config.getString("discord.token")
  val prefix: String = config.getString("discord.prefix")
