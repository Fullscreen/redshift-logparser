
module.exports = parse;
parse.userActivityLog = userActivityLog;

function parse(line) {
  // TODO: auto-detect log format
  return userActivityLog(line);
}

function userActivityLog(line) {
  var parts = line.match(/^\'([0-9-:TZ]+\s[A-Z]+)\s\[\s(.+)\s\]\'\sLOG:\s(.*)$/).slice(1, 4);
  var ret = { recordtime: parts[0], query: parts[2] };

  // split the sub fields
  var sub = parts[1].split(' ');
  for (var i = 0; i < sub.length; i++) {
    var subp = sub[i].split('=');
    ret[subp[0]] = subp[1];
  }
  return ret;
}
