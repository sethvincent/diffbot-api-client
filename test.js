var test = require('tape');

var diffbot = require('./index')({ token: process.env.DIFFBOT_TOKEN });

test('analyze api', function (t) {
  var opts = { url: 'https://iojs.org/' };
  diffbot.analyze(opts, function (err, res, body) {
    t.notOk(err);
    t.ok(res);
    t.ok(body);
    t.end();
  });
});

test('article api', function (t) {
  var opts = { url: 'https://iojs.org/es6.html' };
  diffbot.article(opts, function (err, res, body) {
    t.notOk(err);
    t.ok(res);
    t.ok(body);
    t.end();
  });
});

test('discussion api', function (t) {
  var opts = { url: 'https://discuss.codeforseattle.org/t/roundup-of-art-civics-code-november-15-2014/63' };
  diffbot.discussion(opts, function (err, res, body) {
    t.notOk(err);
    t.ok(res);
    t.ok(body);
    t.end();
  });
});

test('image api', function (t) {
  var opts = { url: 'http://www.autotrader.com/find/Chrysler-cars-for-sale-Seattle-98121.jsp' };
  diffbot.image(opts, function (err, res, body) {
    t.notOk(err);
    t.ok(res);
    t.ok(body);
    t.end();
  });
});

test('product api', function (t) {
  var opts = { url: 'http://seattle.craigslist.org/skc/cto/4854680880.html' };
  diffbot.product(opts, function (err, res, body) {
    t.notOk(err);
    t.ok(res);
    t.ok(body);
    t.end();
  });
});

test('video api', function (t) {
  var opts = { url: 'https://www.youtube.com/watch?v=k27NObxy0ps' };
  diffbot.video(opts, function (err, res, body) {
    t.notOk(err);
    t.ok(res);
    t.ok(body);
    t.end();
  });
});