module.exports.logServerActivity = function logServerActivity(status, msg, isNotError) {
  const msgFull = `${isNotError ? '+++Message: ' : '---Error:'} ${status} ${msg}`;

  console.log(msgFull)
};
