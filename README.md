# CareoCity (frontend)

- Live link [careocity](https://nasim67reja.github.io/CareoCIty-ecommerce/)
- Github URL [github](https://github.com/nasim67reja/CareoCIty-ecommerce)

### Problem I faced

- `crossOrigin="anonymous"` add this to your image tag. otherwise fetch image will not work for more check [this](https://stackoverflow.com/questions/70695881/neterr-blocked-by-response-notsameoriginafterdefaultedtosameoriginbycoep-200)

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

- working with query param was a biggest difficulty for me but after spending 2 days,
  I have figure out it properly

- Custom grid template column `grid-cols-20/80` for more check [this](https://stackoverflow.com/questions/67242334/tailwind-css-how-to-make-a-grid-with-two-columns-where-the-1st-column-has-20)

### react-router scroll to top on every transition

- I have an issue when navigating into another page, its position will remain like the page before. So it won't
  scroll to top automatically. I've also tried to use window.scrollTo(0, 0) on onChange router. I've also used
  scrollBehavior to fix this issue but it didn't work.

- for this problem , i have implemented a solution where each link i add this

```js
<Link
        to={`/${product.categories}/${product.name}`}
        className="w-full"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >

```

- here is a nice solution for this problem

```js
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
```

For more check [this](https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition)

### React.createPortal()

- at first import this `import ReactDOM from "react-dom";`
- then write the component

```js
const Ovarlay = () => {
  return <div>I am backdrop from backdrop-root</div>;
};
```

- then inject this as you want

```js
{
  ReactDOM.createPortal(<Ovarlay />, document.getElementById("backdrop-root"));
}
```

- in `public >index.html` file write this `<div id="backdrop-root"></div>`
- now you will find your ovarlay element in here no matter
  where in the react component you put the ovarlay component

### Prevent scroll when modal is open

```js
useEffect(() => {
  if (backdrop) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "unset";
}, [backdrop]);
```

- for more check [this](https://stackoverflow.com/questions/54989513/react-prevent-scroll-when-modal-is-open)

## Stripe Payment

Backend

```js
exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  //   1) Get the currently ordered product
  const product = await Product.findById(req.params.productId);

  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    expand: ["line_items"],
    payment_method_types: ["card"],
    success_url: `https://nasim67reja.github.io/CareoCIty-ecommerce/`,
    cancel_url: `https://nasim67reja.github.io/CareoCIty-ecommerce/#/${product.categories}`,
    customer_email: req.user.email,
    client_reference_id: req.params.productId,
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: product.price * 100,
          product_data: {
            name: `${product.name} `,
            description: product.summary,
            images: [
              `https://e-commerceapi.up.railway.app/Products/${product.categories}/${product.images[0]}`,
            ],
          },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
  });

  // 3) Create session as response
  res.status(200).json({
    status: "success",
    session,
  });
});
```

Front end

```js
const buyProduct = useCallback(async () => {
  try {
    const session = await axios.get(
      `${URL}/api/v1/orders//checkout-session/${product}`
    );

    window.location.replace(session.data.session.url);
  } catch (error) {
    console.log(`error: `, error.response);
  }
}, [product]);
```
