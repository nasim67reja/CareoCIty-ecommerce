import axios from "axios";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../../App";
// import Stripe from "react-stripe-checkout";

const BuyProduct = () => {
  const product = useSelector((state) => state.allProducts?.Product?.id);

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

  const createSessionHandler = () => {
    buyProduct();
  };

  return (
    <>
      <button
        className="rounded-sm border border-orange-400 py-2 px-4 text-sm transition-all hover:bg-blue-500 hover:text-white"
        onClick={createSessionHandler}
      >
        Buy it now
      </button>
      {/* {token && (
        <Stripe
          stripeKey="pk_test_51LkenWLrNeEpkovTnPLPOawD8yhBWFqnfcZLFeTFhgECtVZdwi3vnGJQgbj1O845uGmjgMzzuQ3GdPfgoFkjZeZ600eG26I8ej"
          token={token}
        />
      )} */}
    </>
  );
};

export default BuyProduct;

// import axios from "axios";
// import React, { useCallback } from "react";
// import { useSelector } from "react-redux";
// import { URL } from "../../../App";
// // import Stripe from "react-stripe-checkout";

// const BuyProduct = () => {
//   const product = useSelector((state) => state.allProducts?.Product?.id);

//   // const token =
//   //   //   "pk_test_51LkenWLrNeEpkovTnPLPOawD8yhBWFqnfcZLFeTFhgECtVZdwi3vnGJQgbj1O845uGmjgMzzuQ3GdPfgoFkjZeZ600eG26I8ej";
//   //   const token =
//   //     "sk_test_51LkenWLrNeEpkovTWf1mFCsdUoHYcGC1wq45svagw6ASXvdnyNFhMcIPnuxaRGDSSGf7dhuxNmGsacEdeUrKSk7H00rPbEf1Bn";
//   const buyProduct = async () => {
//     try {
//       const session = await axios({
//         method: "get",
//         url: `${URL}/api/v1/orders/checkout-session/${product}`,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       window.location.replace(session.data.session.url);
//     } catch (error) {
//       console.log(`error: `, error.response);
//     }
//   };

//   const createSessionHandler = () => {
//     buyProduct();
//   };

//   return (
//     <>
//       <button
//         className="rounded-sm border border-orange-400 py-2 px-4 text-sm transition-all hover:bg-blue-500 hover:text-white"
//         onClick={createSessionHandler}
//       >
//         Buy it now
//       </button>
//     </>
//   );
// };

// export default BuyProduct;
