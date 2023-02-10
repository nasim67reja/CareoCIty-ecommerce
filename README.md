# Welcome to the CareCity E-commerce Website Live link [careocity](https://nasim67reja.github.io/CareoCIty-ecommerce/)

The CareCity E-commerce website is a feature-rich, responsive platform built using the latest front-end technologies. At the heart of the website is ReactJS, a popular JavaScript library for building user interfaces, creating a dynamic and interactive experience for users.

The website has several important features, including an Account page, a Cart page, and a Product Detail page. The Account page allows users to manage their personal information and order history, while the Cart page provides an overview of the items that a user has selected to purchase. The Product Detail page provides users with in-depth information about a specific product, including the ability to add it to their cart and write reviews.

Redux, a predictable state management library for ReactJS, has been integrated to handle the store management of the website. This ensures that the data remains consistent and predictable, even as the website grows and evolves.

To ensure a modern and polished look and feel, Tailwind CSS, a highly-regarded utility-first CSS framework, has been used. Tailwind CSS provides a set of pre-designed UI components that can be easily customized to fit the needs of the website.

The CareCity E-commerce website is fully responsive, providing a seamless experience across all devices. Whether you're on a desktop, tablet, or mobile phone, you can easily navigate the website and make purchases with ease.

This e-commerce website has been designed and built with the goal of providing an enjoyable and convenient experience for users.

## Technologies Used

The CareCity E-commerce website is built with the following technologies:

- [ReactJS](https://reactjs.org/): A popular JavaScript library for building user interfaces.

- [Redux](https://redux.js.org/) :A predictable state management library for ReactJS.

- [Redux-toolkit](https://redux-toolkit.js.org/): A set of utilities for building efficient and scalable Redux applications.

- [Tailwind CSS](https://tailwindcss.com/) : A highly-regarded utility-first CSS framework for quickly creating custom designs.

- [Axios](https://axios-http.com/) : A popular HTTP client for making API requests.

Each of these technologies has been carefully chosen to provide the best possible experience for our users. Whether it's through fast and dynamic user interfaces with ReactJS, consistent and predictable data management with Redux and Redux Toolkit, or making seamless API requests with Axios, I've worked hard to ensure that the CareCity E-commerce website is a top-quality platform that you'll love to use.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- NPM or [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

### Installation

1. Clone the repository to your local machine

`git clone https://github.com/nasim67reja/CareoCIty-ecommerce.git`

2. Navigate to the cloned repository

`cd CareoCIty-ecommerce`

3. Install the dependencies

`npm install or yarn`

4. Start the development server

`npm s tart or yarn start`

The application will now be running on [http://localhost:3000/](http://localhost:3000/).

## Deploying

The front-end of the e-commerce website can be deployed to various platforms, including but not limited to:

- [Netlify](https://www.netlify.com/with/react/) : A popular platform for deploying and hosting web applications with a focus on ease of use and speed. It integrates seamlessly with Git and offers powerful features such as continuous deployment and custom domains.

- [Heroku](https://www.geeksforgeeks.org/how-to-deploy-react-app-to-heroku/) : A cloud platform for building, running, and managing applications. It supports a variety of programming languages and has a simple, intuitive interface.

- [Firebase](https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/) : A comprehensive app development platform by Google that includes features such as real-time databases, hosting, and authentication.

- [GitHub Pages](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/) : A free static site hosting service provided by GitHub. It can be used to host any static website, including single-page applications like React apps.

These platforms provide a variety of features and tools to make deploying your application as easy as possible. Simply follow their documentation to get started.

Please note that while these platforms are a good starting point, there may be additional steps required to fully deploy your application, such as configuring environment variables, setting up custom domains, and more. It's recommended to carefully review the documentation for each platform before deployment.

<!--
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
``` -->
