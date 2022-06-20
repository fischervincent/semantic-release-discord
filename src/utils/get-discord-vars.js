module.exports = (config) => {
  const {
    discordWebhookIdVar = "DISCORD_WEBHOOK_ID",
    discordWebhookId = process.env[discordWebhookIdVar],
    discordWebhookTokenVar = "DISCORD_WEBHOOK_TOKEN",
    discordWebhookToken = process.env[discordWebhookTokenVar],
  } = config
  return {
    discordWebhookIdVar,
    discordWebhookId,
    discordWebhookTokenVar,
    discordWebhookToken,
  }
}
