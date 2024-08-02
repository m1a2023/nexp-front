import Image from "next/image";

export const Logo = ({ source, classLogo, title, classTitle }) => {
  const __classTitle =
    typeof classTitle !== "undefined"
      ? classTitle
      : "flex justify-center text-3xl text-white";

  const __titleDisplay = typeof title !== "undefined" ? "" : " hidden ";

  return (
    <div className={`${classLogo} relative`}>
      <Image
        src={source}
        width={140}
        quality={100}
        alt="There must be the Axpen logo"
      />
      <div className={__titleDisplay + __classTitle + " select-none"}>
        {title}
      </div>
    </div>
  );
};

export const AxpenLogo = ({
  classLogo,
  width,
  height,
  viewBox,
  fill,
  stroke,
  strokeWidth,
}) => {
  return (
    <div className={`${classLogo} relative`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
      >
        <path
          d="M34.1893 71.0138C19.754 68.003 -4.27932 71.2187 15.0697 108.168C39.256 154.354 136.328 -38.8009 117.875 84.6391C99.4231 208.079 6.61011 -57.1451 93.2897 22.6168C162.633 86.4263 184.453 106.575 186.695 108.673"
          stroke={stroke}
          stroke-width={strokeWidth}
        ></path>
      </svg>
    </div>
  );
};
