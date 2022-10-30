import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = ({ height, width, classes, color }) => {
  return (
    <div className={`${classes} flex items-center justify-center`}>
      <Oval
        height={height || 40}
        width={width || 40}
        color={color || "#4fa94d"}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
};

export default Loading;
