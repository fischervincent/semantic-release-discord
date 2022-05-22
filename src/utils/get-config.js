module.exports = (config) => {
  const {
    notifyOnSuccess = true,
    notifyOnFail = true,
    onSuccessTemplate,
  } = config
  return {
    notifyOnSuccess,
    notifyOnFail,
    onSuccessTemplate
  }
}
