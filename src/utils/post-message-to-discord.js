const { WebhookClient } = require('discord.js');
const SemanticReleaseError = require("@semantic-release/error")

module.exports = async (message, { discordWebhookId, discordWebhookToken }) => {
  const messages = Array.isArray(message) ? message : [message]
  try {
    const webhookClient = new WebhookClient(`${discordWebhookId}/${discordWebhookToken}`);
    for (const message of messages) {
      await webhookClient.send(message);
    }
  } catch (error) {
    throw new SemanticReleaseError(error.message, "DISCORD CALL FAILED")
  }
}
