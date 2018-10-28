const { logServerActivity } = require('../utils/helpers');
const { FilterByType } = require('./filter');

module.exports.sendFile = function sendFile(file, res, path, filterName) {
  logServerActivity('', `filter file by type=${filterName}`, true);

  if (filterName && filterName.length) {
    const filter = new FilterByType(filterName);

    filter.on('error', (err) => {
      const msg = 'file is not a valid JSON! Can`t be filtered. ';

      logServerActivity(500, msg + err);
      res.json(500, {
        error: 'NOT_VALID_JSON',
        msg: msg,
      });
    });

    file.pipe(filter).pipe(res);
  } else {
    file.pipe(res);
  }

  file.on('error', (err) => {
    let status = '500';
    let type = '';
    let msg = 'something bad';

    if (err.code === 'ENOENT') {
      status = 400;
      type = 'ENOENT';
      msg = `file ${path} not found`;
    } else {
      status = 500;
      type = 'READ_FILE_ERROR';
      msg = `read file ${path} error: ${err}`;
    }

    logServerActivity(status, msg);
    res.json(status, {
      error: type,
      msg: msg,
    });
  });

  res.on('close', () => {
    file.destroy();
  });
};
