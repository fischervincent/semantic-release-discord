const getDiscordVars = require("./utils/get-discord-vars")
const getConfig = require("./utils/get-config")
const postMessageToDiscord = require("./utils/post-message-to-discord")
const buildDiscordSuccessMessages = require("./utils/build-discord-success-messages")

module.exports = async (pluginConfig, context) => {
  const { notifyOnSuccess, onSuccessTemplate } = getConfig(pluginConfig)
  if (!notifyOnSuccess) {
    return
  }

  const { discordWebhookId, discordWebhookToken } = getDiscordVars(pluginConfig)

  const discordMessages = buildDiscordSuccessMessages(context, onSuccessTemplate);

  await postMessageToDiscord(discordMessages, { discordWebhookId, discordWebhookToken })
}
