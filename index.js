var qs = require('querystring');
var request = require('request');

module.exports = Diffbot;

function Diffbot (opts) {
  if (!(this instanceof Diffbot)) return new Diffbot(opts);
  this.token = opts.token;
}


/*
* Analyze API
* Docs: https://www.diffbot.com/dev/docs/analyze/
*/

Diffbot.prototype.analyze = function (params, cb) {
  this.request('analyze', params, cb);
}


/*
* Article API
* Docs: https://www.diffbot.com/dev/docs/article/
*/

Diffbot.prototype.article = function (params, cb) {
  this.request('article', params, cb);
}


/*
* Discussion API
* Docs: https://www.diffbot.com/dev/docs/discussion/
*/

Diffbot.prototype.discussion = function (params, cb) {
  this.request('discussion', params, cb);
}


/*
* Image API
* Docs: https://www.diffbot.com/dev/docs/image/
*/

Diffbot.prototype.image = function (params, cb) {
  this.request('image', params, cb);
}


/*
* Product API
* Docs: https://www.diffbot.com/dev/docs/product/
*/

Diffbot.prototype.product = function (params, cb) {
  this.request('product', params, cb);
}


/*
* Video API
* Docs: https://www.diffbot.com/dev/docs/video/
*/

Diffbot.prototype.video = function (params, cb) {
  this.request('video', params, cb);
}


/*
* Custom API
* Docs: https://www.diffbot.com/dev/docs/custom/
*/

Diffbot.prototype.custom = function (endpoint, params, cb) {
  this.request(endpoint, params, cb);
}


/*
* Search API
* Docs: https://www.diffbot.com/dev/docs/search/
*/

Diffbot.prototype.search = function (params, cb) {
  this.request('search', params, cb);
}


/*
* Base request method
*/

Diffbot.prototype.request = function (endpoint, params, cb) {
  if (!params.url) return (cb(new Error('url param is required')));
  params.token = this.token;
  var uri = 'http://api.diffbot.com/v3/' + endpoint + '?' + qs.stringify(params);
  var opts = { uri: uri };
  return request(opts, cb);
}
