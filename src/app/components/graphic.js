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
    // useEffect(() => {
    //   Highcharts.chart("doughnutChart", {
    //     chart: {
    //       plotBackgroundColor: null,
    //       plotBorderWidth: null,
    //       plotShadow: false,
    //       type: "pie",
    //     },
    //     title: {
    //       text: "",
    //       align: "left",
    //     },
    //     // tooltip: {
    //     //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    //     // },
    //     accessibility: {
    //       point: {
    //         valueSuffix: "%",
    //       },
    //     },
    //     plotOptions: {
    //       pie: {
    //         allowPointSelect: true,
    //         cursor: "pointer",
    //         dataLabels: {
    //           enabled: false,
    //         },
    //         showInLegend: true,
    //       },
    //     },
    //     series: [
    //       {
    //         name: "Brands",
    //         colorByPoint: true,
    //         data: [
    //           {
    //             name: "Chrome",
    //             y: 74.77,
    //             // sliced: true,
    //             // selected: true,
    //           },
    //           {
    //             name: "Edge",
    //             y: 12.82,
    //           },
    //           {
    //             name: "Firefox",
    //             y: 4.63,
    //           },
    //           {
    //             name: "Safari",
    //             y: 2.44,
    //           },
    //           {
    //             name: "Internet Explorer",
    //             y: 2.02,
    //           },
    //           {
    //             name: "Other",
    //             y: 3.28,
    //           },
    //         ],
    //       },
    //     ],
    //   });
    // });
    return (
      <div className="w-[50%] h-[50%]">
        <Pie
          data={{
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
              {
                label: "Percent",
                data: [300, 50, 100],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
          options={{}}
        />
      </div>
      // <div id="doughnutChart" className=""></div>
    );
  };

  return (
    <div
      className={`flex flex-col w-3/4 px-6 py-4 ${color} text-black rounded-3xl shadow-2xl select-none`}
    >
      <Title graphicTitle={`${graphicTitle}`} />
      <MainInformation mainInformation={`${mainInformation}`} />
      <GraphicSection />
    </div>
  );
};
