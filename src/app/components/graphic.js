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
    return <div>By category</div>;
  };

  const GraphicInformation = () => {
    return (
      <div className="h-[100%] flex flex-col justify-center">
        <div className="flex flex-row justify-between items-baseline">
          <div className="inline-flex flex-row items-baseline">
            <div className="w-[20px] h-[20px] rounded-[50%] bg-[#ff6384] mr-[6px]"></div>
            <span className="text-[24px]">Supermarkets</span>
          </div>
          <div>
            <span>$1090 per month</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-baseline">
          <div className="inline-flex flex-row items-baseline">
            <div className="w-[20px] h-[20px] rounded-[50%] bg-[#36a2eb] mr-[6px]"></div>
            <span className="text-[24px]">Online shops</span>
          </div>
          <div>
            <span>$1290 per month</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-baseline">
          <div className="inline-flex flex-row items-baseline">
            <div className="w-[20px] h-[20px] rounded-[50%] bg-[#ffcd56] mr-[6px]"></div>
            <span className="text-[24px]">Online services</span>
          </div>
          <div>
            <span>$690 per month</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-baseline">
          <div className="inline-flex flex-row items-baseline">
            <div className="w-[20px] h-[20px] rounded-[50%] bg-[#627b3c] mr-[6px]"></div>
            <span className="text-[24px]">Pharmacies</span>
          </div>
          <div>
            <span>$90 per month</span>
          </div>
        </div>
      </div>
    );
  };

  const GraphicSection = () => {
    return (
      <div className="w-[80%] h-full flex justify-center items-center">
        <Pie
          data={{
            labels: [
              "Supermarkets",
              "Online shops",
              "Online services",
              "Pharmacies",
            ],
            datasets: [
              {
                label: "Percent",
                data: [32, 40, 23, 5],
                backgroundColor: [
                  "#ff6384",
                  "#36a2eb",
                  "#ffcd56",
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
      <div className={"flex flex-col w-1/2 h-full"}>
        <Title graphicTitle={`${graphicTitle}`} />
        <MainInformation mainInformation={`${mainInformation}`} />
        <GraphicInformation />
      </div>
      <div className={"w-1/2 h-full flex justify-center"}>
        <GraphicSection />
      </div>
    </div>
  );
};
