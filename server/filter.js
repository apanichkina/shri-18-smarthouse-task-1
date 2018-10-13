const stream = require('stream');
const util = require('util');
const Transform = stream.Transform;

module.exports.FilterByType = Filter;

function Filter(filterProps, options) {
  // allow use without new
  if (!(this instanceof Filter)) {
    return new Filter(filterProps, options);
  }

  // init Transform
  if (!options) {
    options = {};  // ensure object
  }

  options.objectMode = true; // forcing object mode
  Transform.call(this, options);
  this.filterProps = filterProps;
}

util.inherits(Filter, Transform);

Filter.prototype._transform = function (chunk, encoding, callback) {
  let parsed = {};

  try {
    parsed = JSON.parse(chunk);
  } catch (err) {
    console.log(e);
    return callback(err);
  }

  parsed.events = parsed.events.filter(el => el.type === this.filterProps);

  this.push(JSON.stringify(parsed));
  callback();
};
