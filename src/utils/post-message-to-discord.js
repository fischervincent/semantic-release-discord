const SemanticReleaseError = require("@semantic-release/error")
const fetch = require("node-fetch")

module.exports = async (message, discordWebhook) => {
  try {
    const response = await fetch(discordWebhook, {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(message),
    })
    const { status } = response
    const responseContent = await response.json()
    if (String(status).startsWith() !== 20)
      throw new SemanticReleaseError(
        responseContent.message,
        "DISCORD CALL FAILED"
      )
  } catch (error) {
    throw new SemanticReleaseError(error.message, "DISCORD CALL FAILED")
  }
}
