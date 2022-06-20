const SemanticReleaseError = require("@semantic-release/error")
const getDiscordVars = require("./utils/get-discord-vars")

module.exports = (pluginConfig) => {
  const { discordWebhookToken, discordWebhookTokenVar, discordWebhookId, discordWebhookIdVar } = getDiscordVars(pluginConfig)

  if (!discordWebhookToken) {
    throw new SemanticReleaseError(
      "No Discord web-hook Token defined.",
      `A Discord Webhook Token must be created and set in the \`${discordWebhookTokenVar}\` environment variable on your CI environment.\n\n\nPlease make sure to create a Discord Webhook and to set it in the \`${discordWebhookEnVar}\` environment variable on your CI environment. Alternatively, provide \`DiscordWebhook\` as a configuration option.`
    )
  }
  if (!discordWebhookId) {
    throw new SemanticReleaseError(
      "No Discord web-hook Id defined.",
      `A Discord Webhook Id must be created and set in the \`${discordWebhookIdVar}\` environment variable on your CI environment.\n\n\nPlease make sure to create a Discord Webhook and to set it in the \`${discordWebhookEnVar}\` environment variable on your CI environment. Alternatively, provide \`DiscordWebhook\` as a configuration option.`
    )
  }
}
