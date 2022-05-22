module.exports = (config) => {
  const {
    discordWebhookVar = "DISCORD_WEBHOOK",
    discordWebhook = process.env[discordWebhookVar],
  } = config
  return {
    discordWebhookVar,
    discordWebhook,
  }
}
