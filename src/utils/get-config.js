module.exports = (config) => {
  const {
    notifyOnSuccess = true,
    notifyOnFail = true,
  } = config
  return {
    notifyOnSuccess,
    notifyOnFail,
  }
}
