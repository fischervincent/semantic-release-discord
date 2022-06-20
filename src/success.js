const getDiscordVars = require("./utils/get-discord-vars")
const getConfig = require("./utils/get-config")
const postMessageToDiscord = require("./utils/post-message-to-discord")
const buildDiscordSuccessMessage = require("./utils/build-discord-success-message")

module.exports = async (pluginConfig, context) => {
  const { notifyOnSuccess, onSuccessTemplate } = getConfig(pluginConfig)
  if (!notifyOnSuccess) {
    return
  }

  const { discordWebhookId, discordWebhookToken } = getDiscordVars(pluginConfig)

  const discordMessage = buildDiscordSuccessMessage(context, onSuccessTemplate);

  await postMessageToDiscord(discordMessage, { discordWebhookId, discordWebhookToken })
}
