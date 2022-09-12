import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { overlayActions } from "../../store/ovarlay";

const Backdrop = () => {
  const dispatch = useDispatch();
  const backdrop = useSelector((state) => state.overlay.backdropVisible);

  useEffect(() => {
    if (backdrop) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [backdrop]);

  return (
    <>
      {backdrop && (
        <div
          className="fixed top-0 left-0 z-10 h-screen w-full  cursor-pointer bg-[rgba(0,0,0,0.8)]"
          onClick={() => {
            dispatch(overlayActions.backdropHidden());
            dispatch(overlayActions.reviewOvarlayIsHidden());
          }}
        ></div>
      )}
    </>
  );
};

export default Backdrop;
