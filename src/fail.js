const getConfig = require("./utils/get-config")
const buildDiscordErrorMessage = require("./utils/build-discord-error-message")
const getDiscordVars = require("./utils/get-discord-vars")
const postMessageToDiscord = require("./utils/post-message-to-discord")

module.exports = async (pluginConfig, context) => {
  const { notifyOnFail } = getConfig(pluginConfig)
  if (!notifyOnFail) {
    return
  }

  const {
    errors,
    env: { SEMANTIC_RELEASE_PACKAGE, npm_package_name },
  } = context

  const { discordWebhookId, discordWebhookToken } = getDiscordVars(pluginConfig)

  const package_name = SEMANTIC_RELEASE_PACKAGE || npm_package_name

  const discordMessage = buildDiscordErrorMessage(package_name, errors)

  await postMessageToDiscord(discordMessage, { discordWebhookId, discordWebhookToken })
}
