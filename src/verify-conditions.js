const SemanticReleaseError = require("@semantic-release/error")
const getDiscordVars = require("./utils/get-discord-vars")

module.exports = (pluginConfig) => {
  const { discordWebhook, discordWebhookEnVar } = getDiscordVars(pluginConfig)

  if (!discordWebhook) {
    throw new SemanticReleaseError(
      "No Discord web-hook defined.",
      `A Discord Webhook must be created and set in the \`${discordWebhookEnVar}\` environment variable on your CI environment.\n\n\nPlease make sure to create a Discord Webhook and to set it in the \`${discordWebhookEnVar}\` environment variable on your CI environment. Alternatively, provide \`DiscordWebhook\` as a configuration option.`
    )
  }
}
