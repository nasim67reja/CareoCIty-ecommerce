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

- When I was trying to delete the user account by user, i was facing a problem it was not working
  Because i was forgot to do this `await user.save({ validateBeforeSave: false });`
  it took me almost 1 hour to figure out this

- `httpOnly:true` means we can not manipulate cookie in browser
