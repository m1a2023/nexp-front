import Image from "next/image";

export const Logo = ({ source, className }) => {
  return (
    <div className={`relative + ${className}`}>
      <Image src={source} width={100} quality={100} alt="Logo" />
    </div>
  );
};
