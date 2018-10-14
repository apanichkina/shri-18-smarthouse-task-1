const SEC_PER_HOUR = 60 * 60;
const SEC_PER_MINUTE = 60;

module.exports.formatTime = function(sec){
  function appendZero(time){
    return time > 9 ? time : `0${time}`;
  }

  const hours = Math.floor(sec / SEC_PER_HOUR);
  const minutes = Math.floor(sec % SEC_PER_HOUR / SEC_PER_MINUTE);
  const seconds = Math.floor((sec % SEC_PER_HOUR) % SEC_PER_MINUTE);

  return [appendZero(hours), appendZero(minutes), appendZero(seconds)].join(':');
}
