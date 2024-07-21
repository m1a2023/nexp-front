import Chart from "chart.js/auto";
import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

export const TemplateGraphic = ({ graphicTitle, mainInformation, color }) => {
  const Title = ({ graphicTitle }) => {
    return (
      <div className="flex w-full justify-start font-bold text-lg">
        {graphicTitle}
      </div>
    );
  };

  const MainInformation = ({ mainInformation }) => {
    return <div>{mainInformation}</div>;
  };

  return (
    <div
      className={`flex flex-col w-3/4 px-6 py-4 ${color} text-black rounded-3xl shadow-2xl select-none`}
    >
      <Title graphicTitle={`${graphicTitle}`} />
      <MainInformation mainInformation={`${mainInformation}`} />
    </div>
  );
};
