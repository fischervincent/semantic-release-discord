const { WebhookClient } = require('discord.js');
const SemanticReleaseError = require("@semantic-release/error")

module.exports = async (message, { discordWebhookId, discordWebhookToken }) => {
  try {
    const webhookClient = new WebhookClient(`${discordWebhookId}/${discordWebhookToken}`);
    await webhookClient.send(message)    
  } catch (error) {
    throw new SemanticReleaseError(error.message, "DISCORD CALL FAILED")
  }
}
