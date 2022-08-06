import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
const mainHeader = () => {
  return (
    <header className="bg-primary">
      <div className="custom-container">
        <HeaderTop />
      </div>
      <div className="custom-container bg-secondary ">
        <HeaderBottom />
      </div>
    </header>
  );
};

export default mainHeader;
