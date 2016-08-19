redshift-logparser
=================

A parser for redshift audit logs.

example
=======
```nodejs
var parse = require('redshift-logparser');

var lines = [// log lines];

for (var i = 0; i < lines.length; i++) {
  console.log(parse(lines[i]));
}
```

supported formats
=================

Currently supports the user activity log format only.
