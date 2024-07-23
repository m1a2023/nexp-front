import Chart from "chart.js/auto";
import { useEffect } from "react";
import { Doughnut, Pie } from "react-chartjs-2";

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

  const GraphicSection = () => {
    return (
      <div className="w-[65%] h-full">
        <Pie
          data={{
            labels: [
              "Supermarkets",
              "Online shops",
              "Online services",
              "Drug`s stores",
            ],
            datasets: [
              {
                label: "Percent",
                data: [32, 40, 23, 5],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                  "rgb(98, 123, 60)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "left",
                display: false,
              },

              options: { scales: { scaleLabel: { fontSize: 24 } } },
            },
          }}
        />
      </div>
    );
  };

  return (
    <div
      className={`flex flex-row w-3/4 px-6 py-4 ${color} text-black rounded-3xl shadow-2xl select-none`}
    >
      <div className={"flex flex-col w-1/4 h-full"}>
        <Title graphicTitle={`${graphicTitle}`} />
        <MainInformation mainInformation={`${mainInformation}`} />
      </div>
      <div className={"w-3/4 h-full flex justify-center"}>
        <GraphicSection />
      </div>
    </div>
  );
};
