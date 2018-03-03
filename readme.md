Uses the browser history API to keep track of scroll position manually, since it turns out most browsers scroll position remembering doesn't work well if you render the page on the tick after a `pushState` happens.

- On scroll/resize, update the current position in state
- On old state, wait for stateChangeEnd, then scroll to the position from state
- On new state, wait for stateChangeEnd, then scroll to the anchor if it exists, else scroll to top

# Usage

```js
const watchScrollPosition = require('asr-scroll-position')

watchScrollPosition(stateRouter)
```

# License

[WTFPL](http://wtfpl2.com)
