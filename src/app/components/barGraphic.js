import Chart from "chart.js/auto";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

export const TemplateBarGraphic = ({
  graphicTitle,
  color,
  graphicContainer,
}) => {
  const Title = ({ graphicTitle }) => {
    return (
      <div className="flex w-full justify-start font-bold text-lg">
        {graphicTitle}
      </div>
    );
  };

  const MainInformation = () => {
    return <div>By weeks</div>;
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
      <div className={`w-[85%] h-[80%] flex justify-center items-center`}>
        <Bar
          data={{
            labels: [
              "01.07 - 07.07",
              "08.07 - 14.07",
              "15.07 - 21.07",
              "22.07 - 28.07",
              "29.07 - 04.08",
            ],
            datasets: [
              {
                label: "Dollar",
                data: [560, 1060, 409, 872, 612],
                backgroundColor: [
                  "#ff6384",
                  "#36a2eb",
                  "#ffcd56",
                  "rgb(98, 123, 60)",
                  "rgb(145, 145, 145)",
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
            },
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: "Weeks",
                  color: "#000",
                  font: {
                    //   family: "",
                    size: 22,
                    weight: "bold",
                    lineHeight: 1.2,
                  },
                  padding: { top: 20, left: 0, right: 0, bottom: 0 },
                },
                grid: {
                  display: false,
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "Dollar",
                  color: "#000",
                  font: {
                    //   family: "",
                    size: 22,
                    weight: "bold",
                    lineHeight: 1.2,
                  },
                  padding: { top: 20, left: 0, right: 0, bottom: 0 },
                },
                grid: {
                  display: false,
                },
              },
              //   xAxes: [
              //     {
              //       gridLines: {
              //         color: "rgba(0, 0, 0, 0)",
              //       },
              //     },
              //   ],
              //   yAxes: [
              //     {
              //       gridLines: {
              //         color: "rgba(0, 0, 0, 0)",
              //       },
              //     },
              //   ],
            },
          }}
        />
      </div>
    );
  };

  return (
    <div
      className={`flex w-3/4 px-6 py-4 ${color} text-black rounded-3xl shadow-2xl select-none ${graphicContainer}`}
    >
      <div className={"flex flex-col w-full h-full"}>
        <Title graphicTitle={`${graphicTitle}`} />
        <MainInformation />
        <div className={"w-full h-full flex justify-center items-end"}>
          <GraphicSection />
        </div>
      </div>
    </div>
  );
};
