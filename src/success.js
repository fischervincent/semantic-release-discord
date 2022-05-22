const getDiscordVars = require("./utils/get-discord-vars")
const postMessageToDiscord = require("./utils/post-message-to-discord")
const buildDiscordSuccessMessage = require("./utils/build-discord-success-message")

module.exports = async (pluginConfig, context) => {
  const { discordWebhook } = getDiscordVars(pluginConfig)

  const {
    nextRelease,
    env: { SEMANTIC_RELEASE_PACKAGE, npm_package_name },
  } = context

  if (!pluginConfig.notifyOnSuccess) {
    return
  }

  const packageName = SEMANTIC_RELEASE_PACKAGE || npm_package_name

  const discordMessage = buildDiscordSuccessMessage(packageName, nextRelease)

  await postMessageToDiscord(discordMessage, discordWebhook)
}
