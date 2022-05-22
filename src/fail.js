const getConfig = require("./utils/get-config")
const buildDiscordErrorMessage = require("./utils/build-discord-error-message")
const getDiscordVars = require("./utils/get-discord-vars")
const postMessageToDiscord = require("./utils/post-message-to-discord")

module.exports = async (pluginConfig, context) => {
  const { notifyOnFail } = getConfig(pluginConfig)
  if (notifyOnFail) {
    return
  }

  const {
    errors,
    env: { SEMANTIC_RELEASE_PACKAGE, npm_package_name },
  } = context

  const { discordWebhook } = getDiscordVars(pluginConfig)

  const packageName = SEMANTIC_RELEASE_PACKAGE || npm_package_name

  const discordMessage = buildDiscordErrorMessage(packageName, errors)

  await postMessageToDiscord(discordMessage, discordWebhook)
}
