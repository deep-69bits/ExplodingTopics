"use client";
import React, { useEffect, useRef } from "react";
import { Chart, ChartConfiguration } from "chart.js";

const Tag = ({ children }: any) => {
  return (
    <div className=" w-fit hover:bg-blue-600 hover:text-white text-blue-600 bg-blue-50 cursor-pointer font-semibold text-sm  px-2 py-1">
      {children}
    </div>
  );
};

const page = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lineChartRef = useRef<Chart>();
  useEffect(() => {
    var config: ChartConfiguration = {
      type: "line",
      data: {
        labels: ["2020", "2021", "2022", "2023", "2024"],
        datasets: [
          {
            label: String(new Date().getFullYear()),
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: [5, 10, 12, 70, 75],
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          // @ts-ignore
          display: false,
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#e1ebfa",
              },
              display: true,
              scaleLabel: {
                labelString: "Month",
                fontColor: "#FFC0CB",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: 2,
                color: "#FFC0CB",
                zeroLineColor: "#FFC0CB",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: 2,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#e1ebfa",
                stepSize: 20,
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                display: true,
                borderDash: [6],
                borderDashOffset: 3,
                drawBorder: false,
                color: "#e1ebfa",
                zeroLineColor: "#e1ebfa",
                zeroLineBorderDash: [0],
                zeroLineBorderDashOffset: 2,
              },
            },
          ],
        },
      },
    };

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      if (lineChartRef.current) lineChartRef.current.destroy();
      lineChartRef.current = new Chart(ctx, config);
    }
  }, []);
  return (
    <main className="min-h-screen z-50 w-full lg:max-w-7xl lg:py-8 py-5 lg:px-0 px-5   mx-auto">
      <div className="max-w-4xl mx-auto">
        <div>
          <span className="hover:underline  text-gray-400 text-sm cursor-pointer">
            Trends Database
          </span>
          <span className="text-gray-400 text-sm cursor-pointer">
            {" "}
            / Ai Logo Generator
          </span>
        </div>

        <div className="my-10  lg:flex block items-center gap-x-3">
          <h2 className="lg:text-3xl text-2xl font-semibold">
            Ai Logo Generator
          </h2>
          <span className="text-gray-400 mt-5 lg:mt-0  text-xs lg:text-sm font-semibold">
            (Keyword)
          </span>
        </div>

        <div className="text-gray-500 text-sm lg:text-lg">
          A software tool that uses artificial intelligence to generate custom
          logos for individuals and businesses, allowing them to quickly and
          easily create a unique brand identity.
        </div>

        <div className="bg-white rounded-sm py-5 pb-8 px-5  z-50 mt-10 shadow-md">
          <div className="flex flex-col lg:flex-row gap-1  justify-between items-center">
            <div className=" z-50 flex items-center justify-between lg:w-[170px] w-full  border-[1px] hover:border-black border-gray-200  cursor-pointer bg-white py-2 px-2">
              <h6 className="z-50 text-gray-400 text-[13px] ">5 Years</h6>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-gray-400 text-[13px] "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="flex scale-75 lg:scale-100  gap-x-6">
              <div className="flex flex-col  items-center">
                <h4 className="font-bold text-blue-700 text-2xl">450K</h4>
                <h5 className="text-[13px] text-gray-500">Volume</h5>
              </div>
              <div className="flex flex-col  items-center">
                <h4 className="font-bold text-green-600 text-2xl">+99X+</h4>
                <h5 className="text-[13px] text-gray-500">Growth</h5>
              </div>
            </div>
          </div>

          <div className="lg:h-[400px] h-[200px] mt-5 z-50">
            <canvas className="z-50" ref={canvasRef}></canvas>
          </div>

          <button className="mt-8 text-[10px] text-gray-500 border-[1px] border-gray-200 bg-gray-100 px-1 py-1">
            EXPLODING
          </button>
        </div>

        <div className="bg-white rounded-sm py-8  px-5  z-50 mt-10 shadow-md">
          <h6 className="text-base font-semibold">Categories</h6>
          <hr className="w-[98%]  mx-auto my-6 " />
          <div className="gap-x-5 grid grid-flow-row grid-cols-2 gap-4 lg:flex ">
            <Tag>Artificial Intelligence </Tag>
            <Tag>Design</Tag>
            <Tag>Technology</Tag>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
