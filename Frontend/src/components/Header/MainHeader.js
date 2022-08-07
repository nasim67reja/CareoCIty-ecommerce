import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
const mainHeader = () => {
  return (
    <header className=" mb-[220rem] bg-primary">
      <div className="custom-container ">
        <HeaderTop />
      </div>
      <div className="hidden h-10 bg-secondary lg:block">
        <HeaderBottom />
      </div>
    </header>
  );
};

export default mainHeader;
