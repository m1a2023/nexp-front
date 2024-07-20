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

  useEffect(() => {
    const ctx = document.getElementById("myChart");

    let chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [
          "Supermarkets",
          "Pharmacies",
          "Online stores",
          "Online services",
        ],
        datasets: [
          {
            label: "Percent",
            data: [43, 4, 26, 25],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(46, 98, 76)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });

    //chart.destroy();
  });

  const Graphic = () => {
    return (
      <div className="chart-container w-[85%] h-[85%]">
        <canvas id="myChart"></canvas>
      </div>
    );
  };
  return (
    <div
      className={`flex flex-col w-3/4 px-6 py-4 ${color} text-black rounded-3xl shadow-2xl select-none`}
    >
      <Title graphicTitle={`${graphicTitle}`} />

      <MainInformation mainInformation={`${mainInformation}`} />

      <Graphic />
    </div>
  );
};
