import { useEffect, useRef, useState } from "react";

const SingleProduct = ({
  product,
  i,
  numOfClick,
  widthparent,
  onGetOffScreenEl,
  data,
}) => {
  const [width, setWidth] = useState(0);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [clicked, setClicked] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    setWidth(element.current.offsetWidth + 20);
    let offScreen = data.length - Math.floor(widthparent / width);
    onGetOffScreenEl(offScreen);
  }, [width, widthparent, onGetOffScreenEl, data.length]);

  let exactWidth = width * i + width * numOfClick;

  return (
    <div
      style={{ transform: `translateX(${exactWidth}px)` }}
      className="testclass absolute top-0 left-0 h-full transition-all duration-500"
    >
      <div
        className="relative flex h-full w-full  flex-col  items-center gap-1 "
        ref={element}
      >
        <div
          className="sliderIcon absolute top-3 right-3 cursor-pointer"
          onClick={() => setClicked((prevSt) => !prevSt)}
        >
          {clicked ? (
            <ion-icon name="heart" size="large"></ion-icon>
          ) : (
            <ion-icon name="heart-outline" size="large"></ion-icon>
          )}
        </div>
        <img
          src={mouseEnter ? product.images[0] : product.images[1]}
          alt=""
          className="mb-4 w-full cursor-pointer "
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
        />
        <p className="text-sm">{product.name}</p>
        <p className="text-sm text-orange-500">{product.price}</p>
        <p>{product.ratingsAverage}</p>
      </div>
    </div>
  );
};

const Slider = ({ data, title }) => {
  const [numOfClick, setNumOfClick] = useState(0);
  const [widthparent, setWidthParent] = useState(0);
  const parentWidth = useRef(null);

  useEffect(() => {
    setWidthParent(parentWidth.current.offsetWidth);
    window.addEventListener("resize", () => {
      setWidthParent(parentWidth.current.offsetWidth);
    });
  }, []);

  const increaseTranslateXHandler = () => {
    setNumOfClick((prevSt) => (prevSt = prevSt + 1));
  };

  const decreaseTranslateXHandler = () => {
    setNumOfClick((prevSt) => (prevSt = prevSt - 1));
  };

  const maxNumOfClickHandler = (el) => {
    if (numOfClick < -el) setNumOfClick(-el);
  };
  if (numOfClick > 0) setNumOfClick(0);

  return (
    <div className=" mx-auto max-w-[110rem]  rounded-lg  bg-white">
      <div className="mb-6 flex items-center justify-between border-b border-[#dcdcdc] p-4">
        <h2 className="fontm text-xl">{title || data[0]?.categories}</h2>
        <button className="rounded border bg-blue-600 px-3 py-2 text-white transition-all hover:bg-white hover:text-primary">
          View all
        </button>
      </div>

      <div className="group relative w-full ">
        <div
          className="sliderIconarr absolute left-0 top-[50%] z-10 hidden translate-y-[-50%] cursor-pointer items-center justify-center rounded-r-md bg-backg px-2 py-7 shadow-lg hover:bg-blue-400 group-hover:flex "
          onClick={increaseTranslateXHandler}
        >
          <ion-icon name="chevron-back-outline" size="large"></ion-icon>
        </div>

        <div
          className="sliderIconarr absolute -right-1 top-[50%] z-10 hidden translate-y-[-50%] cursor-pointer items-center justify-center rounded-l-md bg-backg px-2 py-7 shadow-lg hover:bg-blue-400 group-hover:flex "
          onClick={decreaseTranslateXHandler}
        >
          <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
        </div>

        <div
          className="sec relative mb-10  h-[23rem] overflow-scroll scroll-smooth"
          ref={parentWidth}
        >
          {data.map((product, i) => (
            <SingleProduct
              product={product}
              key={i}
              i={i}
              numOfClick={numOfClick}
              widthparent={widthparent}
              onGetOffScreenEl={maxNumOfClickHandler}
              data={data}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
