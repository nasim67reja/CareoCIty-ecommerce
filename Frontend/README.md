# CareoCity (frontend)

### Problem I faced

- `crossorigin="anonymous"` add this to your image tag. otherwise fetch image will not work for more check [this](https://stackoverflow.com/questions/70695881/neterr-blocked-by-response-notsameoriginafterdefaultedtosameoriginbycoep-200)

- set `autoFocus` attribute in an input element. then By default the input element will be focused

- change navigation programmetically

```js
setTimeout(() => {
  navigate("/");
  // window.location.assign("/");
}, 1500);
```

- reload the page automatically

```js
setTimeout(() => {
  document.location.reload();
}, 1000);
```

for more check [this](https://www.freecodecamp.org/news/refresh-the-page-in-javascript-js-reload-window-tutorial/)
