var ThrowAndTell = require('throwandtell');

module.exports = function(userOptions) {

  if(typeof options == 'object') {
    options = userOptions;
  } else {
    options = {
      accessKey: userOptions
    };
  }

  var throwandtell = new ThrowAndTell(options);

  return function(err, req, res, next) {
    throwandtell.report(err);
  };

};