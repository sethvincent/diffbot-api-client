# diffbot-api-client

> a node wrapper for the diffbot api

## Install

```
npm i --save diffbot-api-client
```

## API

```
var Diffbot = require('diffbot-api-client');

var diffbot = new Diffbot({ token: 'YOUR DIFFBOT DEVELOPER TOKEN' });
```

### Methods

#### Analyze
Docs: https://www.diffbot.com/dev/docs/analyze/

```
diffbot.analyze(params, callback)
```


#### Article
Docs: https://www.diffbot.com/dev/docs/article/

```
diffbot.article(params, callback)
```


#### Discussion
Docs: https://www.diffbot.com/dev/docs/discussion/

```
diffbot.discussion(params, callback)
```


#### Image
Docs: https://www.diffbot.com/dev/docs/image/

```
diffbot.image(params, callback)
```


#### Product
Docs: https://www.diffbot.com/dev/docs/product/

```
diffbot.product(params, callback)
```


#### Video
Docs: https://www.diffbot.com/dev/docs/video/

```
diffbot.video(params, callback)
```


#### Custom
Docs: https://www.diffbot.com/dev/docs/custom/

```
diffbot.custom(params, callback)
```


#### Search
Docs: https://www.diffbot.com/dev/docs/search/

```
diffbot.search(params, callback)
```

## License

[MIT](https://github.com/sethvincent/diffbot-api-client/blob/master/LICENSE.md)