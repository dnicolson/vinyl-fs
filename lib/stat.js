'use strict';

var constants = require('constants');

function newStats() {
  var stat = {
    mode: 0,
    mtime: new Date(0),
    atime: new Date(0),
    ctime: new Date(0),
    birthtime: new Date(0),
  };

  stat.isFile = function () {
    return (stat.mode & constants.S_IFMT) === constants.S_IFREG;
  };
  stat.isDirectory = function () {
    return (stat.mode & constants.S_IFMT) === constants.S_IFDIR;
  };
  stat.isSymbolicLink = function () {
    return (stat.mode & constants.S_IFMT) === constants.S_IFLNK;
  };

  return stat;
}

module.exports = newStats;
