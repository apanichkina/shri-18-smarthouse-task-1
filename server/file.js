const { logServerActivity } = require('./helpers');
const { FilterByType } = require('./filter');

module.exports.sendFile = function sendFile(file, res, path, filterName) {
  logServerActivity(null, `filter file by type=${filterName}`, true);

  if (filterName) {
    const filter = new FilterByType(filterName);
    file.pipe(filter).pipe(res);
  } else {
    file.pipe(res);
  }

  file.on('error', function (err) {
    let msg = '';

    if (err.code === 'ENOENT') {
      msg = `file ${path} not found`
    } else {
      msg = `read file ${path} error: ${err}`
    }

    logServerActivity(400, msg);
    res.status(400).send(msg)
  });

  res.on('close', function () {
    file.destroy()
  })
};
