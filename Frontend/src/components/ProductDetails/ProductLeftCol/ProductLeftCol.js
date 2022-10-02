import ads from "../../../assets/style.jpg";
import TopRated from "./TopRated";

const ProductLeftCol = () => {
  return (
    <div>
      <TopRated />
      <div>
        <img src={ads} alt="" />
      </div>
    </div>
  );
};

export default ProductLeftCol;
