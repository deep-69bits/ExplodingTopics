"use client";
import React, { useEffect } from "react";
import Chart from "chart.js";

const Graph = () => {
  useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: ["2020", "2021", "2022", "2023", "2024"],
        datasets: [
          {
            label: new Date().getFullYear(),
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
          display: false,
        },
        tooltips: {
          display: false,
          mode: "index",
          intersect: false,
        },
        hover: {
          display: false,
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
                borderDashOffset: [2],
                color: "#FFC0CB",
                zeroLineColor: "#FFC0CB",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
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
                borderDashOffset: [3],
                drawBorder: false,
                color: "#e1ebfa",
                zeroLineColor: "#e1ebfa",
                zeroLineBorderDash: [0],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    const canvas = document.getElementById(
      "line-chart"
    ) as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // @ts-ignore
        (window as any).myLine = new Chart(ctx, config);
      } else {
        console.error("Unable to get 2D context from canvas.");
      }
    } else {
      console.error("Canvas element with ID 'line-chart' not found.");
    }
  }, []);

  return (
    <div>
      <div className=" translate-y-8 translate-x-[-4px] mb-2">
        {/* Chart */}
        <div className="">
          <canvas id="line-chart"></canvas>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="py-5 z-50 group px-5 bg-white hover:border-[1px] border-[1px] border-transparent hover:border-blue-500 transition-all duration-500 cursor-pointer  shadow-md rounded-md ">
      <div className="flex justify-between">
        <h2 className="font-medium text-[15px] group-hover:text-blue-700">
          Ai Logo Generator
        </h2>
        <div className="flex  gap-x-4">
          <div className="flex flex-col  items-center">
            <h4 className="font-semibold text-blue-700 text-lg">450K</h4>
            <h5 className="text-[13px] text-gray-500">Volume</h5>
          </div>
          <div className="flex flex-col  items-center">
            <h4 className="font-semibold text-green-600 text-lg">+99X+</h4>
            <h5 className="text-[13px] text-gray-500">Growth</h5>
          </div>
        </div>
      </div>

      <Graph />

      <div className="mt-12">
        <p className="text-[13px] text-gray-500">
          A software tool that uses artificial intelligence to generate custom
          logos for individuals and businesses, allowing them{" "}
        </p>
        <button className="mt-8 text-[10px] text-gray-500 border-[1px] border-gray-200 bg-gray-100 px-1 py-1">
          EXPLODING
        </button>
      </div>
    </div>
  );
};

export default Card;
