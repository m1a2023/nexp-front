import { colors } from "./header";

export const TemplateMoneyCard = ({
  cardTitle,
  mainInformation,
  currency,
  color,
  width,
  distance,
}) => {
  const textColor = color === colors.RoseBright ? "#282828" : "#ffffff";

  const Title = ({ cardTitle }) => {
    return (
      <div className="flex w-full h-full justify-start font-bold text-lg">
        <div className="flex">{cardTitle}</div>
      </div>
    );
  };

  const MainInformation = ({ mainInformation }) => {
    return (
      <div className="flex grow text-xl justify-start w-full ">
        <div className="truncate text-4xl font-bold">{mainInformation}</div>
      </div>
    );
  };

  /*
  function SetMoneyCardTitle({ cardTitle }) {
    //TODO: write class
    return (
      <div className="flex w-full h-full justify-start font-bold text-lg">
        <div className="flex">{cardTitle}</div>
      </div>
    );
  }

  function SetMoneyCardMainInformation({ mainInformation }) {
    //TODO: write class
    return (
      <div className="flex grow text-xl justify-start w-full ">
        <div className="truncate text-4xl font-bold">{mainInformation}</div>
      </div>
    );
  }
  */

  return (
    <div
      className={`flex flex-col snap-start ${width} ${distance} pl-4 pr-3 pb-2 pt-3 grow-0 justify-start rounded-3xl shadow-2xl select-none`}
      style={{ backgroundColor: color, color: textColor }}
    >
      <Title cardTitle={`${cardTitle}`} />

      <MainInformation mainInformation={`${mainInformation}`} />

      <div className="flex flex-row w-full justify-end">
        <div className="flex justify-end text-2xl opacity-45 font-bold">
          {currency}
        </div>
      </div>
    </div>
  );
};
