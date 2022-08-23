import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import MobileHeader from "./MobileHeader";
const MainHeader = () => {
  return (
    <header className="bg-primary">
      <div className="custom-container ">
        <HeaderTop />
      </div>
      <div className="hidden h-10 bg-secondary lg:block">
        <HeaderBottom />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
    </header>
  );
};

export default MainHeader;
