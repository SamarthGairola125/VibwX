
PARAM KHANDELWAL
2:01 PM (3 minutes ago)
to me

import React from "react";
import group198 from "./group-198.png";
import group26961 from "./group-26961.png";
import image from "./image.png";
import image1 from "./image.svg";
import maskGroup2 from "./mask-group-2.png";
import maskGroup3 from "./mask-group-3.png";
import maskGroup from "./mask-group.png";
import path43 from "./path-43.svg";
import path44 from "./path-44.svg";
import path45 from "./path-45.svg";
import polygon1 from "./polygon-1.svg";
import polygon2 from "./polygon-2.svg";
import rectangle34 from "./rectangle-34.svg";
import rectangle171 from "./rectangle-171.svg";
import rectangle193 from "./rectangle-193.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";
import vector9 from "./vector-9.svg";
import vector10 from "./vector-10.svg";
import vector11 from "./vector-11.svg";
import vector12 from "./vector-12.svg";
import vector13 from "./vector-13.svg";
import vector14 from "./vector-14.svg";
import vector from "./vector.svg";

const tips = [
  "Track and Compare Your Weekly Expenses",
  "Prioritize Your Essential Needs First",
  "Review and Adjust Your Budget Regularly",
];

const reports = [
  {
    title: "Weekly Reports",
    savingsMask: maskGroup,
    expensesMask: image,
    polygon: polygon1,
    rectangle: rectangle171,
    topPosition: "top-48",
    titleTop: "top-[187px]",
    chartTop: "top-[249px]",
    labelTop: "top-[226px]",
    readMoreTop: "top-[198px]",
    tipsTop: "top-[296px]",
    tipsVectors: [vector, image1, vector2],
  },
  {
    title: "Monthly Reports",
    savingsMask: maskGroup2,
    expensesMask: maskGroup3,
    polygon: polygon2,
    rectangle: rectangle193,
    topPosition: "top-[507px]",
    titleTop: "top-[543px]",
    chartTop: "top-[608px]",
    labelTop: "top-[585px]",
    readMoreTop: "top-[548px]",
    tipsTop: "top-[655px]",
    tipsVectors: [vector12, vector13, vector14],
  },
];

const navigationIcons = [
  { icon: vector3, bgClass: "bg-[#494949]", position: "left-0" },
  {
    icon: null,
    bgClass: "bg-[#494949]",
    position: "left-[calc(50.00%_-_116px)]",
    hasPath: true,
  },
  {
    icon: vector4,
    bgClass: "bg-[#494949]",
    position: "left-[164px]",
    hasSecondary: true,
  },
  {
    icon: vector6,
    bgClass: "bg-[#494949]",
    position: "left-[245px]",
    hasMultiple: true,
  },
  { icon: group26961, bgClass: "", position: "left-[318px]", isSpecial: true },
];

export const ElementBLaunch = (): JSX.Element => {
  return (
    <main className="bg-black w-full min-w-[430px] h-[1001px] relative">
      <header className="absolute top-[21px] left-[17px] w-[396px] h-11">
        <img className="w-full h-full" alt="Header navigation" src={group198} />
      </header>

      <h1 className="absolute top-[84px] left-10 w-[197px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[45px] tracking-[0] leading-[normal]">
        Insights
      </h1>

      {reports.map((report, index) => (
        <section key={index} className="absolute w-full">
          <img
            className="absolute w-[89.53%] h-[32.67%] top-[16.78%] left-[5.35%]"
            alt={`${report.title} background`}
            src={report.rectangle}
            style={{
              top: index === 0 ? "16.78%" : "51.35%",
              height: index === 0 ? "32.67%" : "35.46%",
            }}
          />

          <div
            className={`absolute ${report.topPosition} left-[286px] w-[110px] h-8 bg-[#636363] rounded-[50px] rotate-180 opacity-50`}
          />

          <h2
            className={`absolute ${report.titleTop} ${index === 0 ? "left-[54px]" : "left-[46px]"} w-[228px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[26px] tracking-[0] leading-[normal]`}
          >
            {report.title}
          </h2>

          <div className={`absolute ${report.chartTop} left-[39px]`}>
            <img
              className="w-[120px] h-[27px]"
              alt={`${report.title} savings chart`}
              src={report.savingsMask}
            />
          </div>

          <div className={`absolute ${report.chartTop} left-[163px]`}>
            <img
              className="w-[229px] h-7"
              alt={`${report.title} expenses chart`}
              src={report.expensesMask}
            />
          </div>

          <div
            className={`absolute ${report.chartTop} left-[86px] w-[73px] h-7 bg-[#e8fe4c] rounded-[50px]`}
          />

          <div
            className={`absolute ${report.chartTop} left-[163px] w-[162px] h-[29px] bg-[#e8fe4c] rounded-[50px]`}
          />

          <img
            className={`absolute ${report.chartTop} left-[151px] w-5 h-[15px]`}
            alt="Chart indicator"
            src={report.polygon}
            style={{ top: index === 0 ? "268px" : "627px" }}
          />

          <div
            className={`absolute ${report.labelTop} left-24 w-[63px] [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]`}
          >
            Savings
          </div>

          <div
            className={`absolute ${report.labelTop} left-[171px] w-[59px] [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]`}
          >
            Expenses
          </div>

          <div
            className={`absolute ${report.readMoreTop} ${index === 0 ? "left-[303px]" : "left-[290px]"} w-${index === 0 ? "[85px]" : "28"} h-8`}
          >
            {index === 1 && (
              <div className="absolute top-0 left-0 w-[110px] h-8 bg-[#636363] rounded-[50px] rotate-180 opacity-50" />
            )}
            <div
              className={`absolute ${index === 1 ? "top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_44px)]" : ""} w-[85px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#e8fe4c] text-[15px] tracking-[0] ${index === 1 ? "leading-[15px]" : "leading-[normal]"}`}
            >
              Read More
            </div>
          </div>

          <article
            className={`absolute ${report.tipsTop} left-9 w-[360px] h-[190px]`}
          >
            <div className="absolute top-0 left-0 w-[358px] h-[190px] bg-[#e8fe4c] rounded-[35px]" />

            <h3 className="absolute top-3 left-[29px] w-[106px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-3xl tracking-[0] leading-[normal]">
              Tips
            </h3>

            <div
              className="absolute w-[5.28%] h-[48.56%] top-[33.68%] left-[6.94%]"
              aria-hidden="true"
            >
              {report.tipsVectors.map((vectorSrc, vIndex) => (
                <img
                  key={vIndex}
                  className="absolute w-full h-[19.79%] left-0"
                  style={{
                    top:
                      vIndex === 0 ? "0" : vIndex === 1 ? "40.10%" : "80.21%",
                  }}
                  alt=""
                  src={vectorSrc}
                />
              ))}
            </div>

            <ul className="absolute top-[63px] left-[50px] w-[285px] h-[92px] flex flex-col gap-4">
              {tips.map((tip, tipIndex) => (
                <li
                  key={tipIndex}
                  className={`w-${tipIndex === 0 ? "[279px]" : tipIndex === 1 ? "[225px]" : "[269px]"} h-5 [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[13px] tracking-[0] leading-[normal]`}
                >
                  {tip}
                </li>
              ))}
            </ul>
          </article>
        </section>
      ))}

      <div className="absolute w-[10.70%] h-[3.37%] top-[91.91%] left-[81.16%] bg-[url(/combined-shape.svg)] bg-[100%_100%]" />

      <nav
        className="absolute w-[397px] h-[71px] top-[892px] left-[17px]"
        aria-label="Main navigation"
      >
        <div className="w-[397px] h-[71px] relative">
          <div className="absolute top-px left-0 w-[397px] h-[70px] bg-[#2e2e2e] rounded-[50px]" />

          {navigationIcons.map((navItem, navIndex) => {
            if (navItem.isSpecial) {
              return (
                <button
                  key={navIndex}
                  className={`absolute -top-1 ${navItem.position} w-[90px] h-[90px]`}
                  aria-label="Special navigation action"
                >
                  <img className="w-full h-full" alt="" src={navItem.icon} />
                </button>
              );
            }

            return (
              <button
                key={navIndex}
                className={`absolute ${navIndex === 0 ? "top-px" : navIndex === 1 ? "top-[calc(50.00%_-_36px)]" : "top-px"} ${navItem.position} w-[70px] h-[70px]`}
                aria-label={`Navigation item ${navIndex + 1}`}
              >
                <div
                  className={`absolute ${navIndex === 1 ? "top-[calc(50.00%_-_35px)] left-[calc(50.00%_-_35px)]" : "top-0 left-0"} w-[70px] h-[70px] ${navItem.bgClass} rounded-[50px] rotate-180 shadow-[1px_5px_5px_5px_#00000040]`}
                />

                {navIndex === 0 && (
                  <div className="absolute h-[42.86%] top-[29.29%] left-[calc(50.00%_-_15px)] w-[30px] aspect-[1]">
                    <img
                      className="absolute w-full h-[75.00%] top-[12.50%] left-0"
                      alt=""
                      src={navItem.icon}
                    />
                  </div>
                )}

                {navIndex === 1 && navItem.hasPath && (
                  <div className="absolute w-[39.74%] h-[46.43%] top-[28.57%] left-[30.00%] bg-[url(/path-42.svg)] bg-[100%_100%]">
                    <img
                      className="top-[69.17%] absolute w-[54.55%] h-[4.07%] left-[35.27%]"
                      alt=""
                      src={path43}
                    />
                    <img
                      className="top-[77.00%] absolute w-[54.55%] h-[4.07%] left-[35.27%]"
                      alt=""
                      src={path44}
                    />
                    <img
                      className="top-[84.83%] absolute w-[54.55%] h-[4.07%] left-[35.27%]"
                      alt=""
                      src={path45}
                    />
                    <img
                      className="absolute w-[49.59%] h-[34.15%] top-[29.03%] left-[37.75%]"
                      alt=""
                      src={rectangle34}
                    />
                  </div>
                )}

                {navIndex === 2 && navItem.hasSecondary && (
                  <div className="absolute w-[58.57%] h-[57.14%] top-[21.43%] left-[20.00%]">
                    <img
                      className="absolute w-full h-full top-[-7.50%] left-[-7.32%]"
                      alt=""
                      src={navItem.icon}
                    />
                    <img
                      className="absolute w-[42.11%] h-[5.26%] top-[63.55%] left-[21.63%]"
                      alt=""
                      src={vector5}
                    />
                  </div>
                )}

                {navIndex === 3 && navItem.hasMultiple && (
                  <div className="absolute w-[46.73%] h-[42.86%] top-[28.57%] left-[27.14%] aspect-[1.09]">
                    <img
                      className="absolute w-[24.08%] h-[11.53%] top-0 left-[33.06%]"
                      alt=""
                      src={navItem.icon}
                    />
                    <img
                      className="absolute w-[47.96%] h-[44.07%] top-[14.29%] left-[21.13%]"
                      alt=""
                      src={vector7}
                    />
                    <img
                      className="absolute w-[88.90%] h-[40.26%] top-[59.74%] left-0"
                      alt=""
                      src={vector8}
                    />
                    <img
                      className="absolute w-[8.57%] h-[40.41%] top-[56.85%] left-[91.43%]"
                      alt=""
                      src={vector9}
                    />
                    <img
                      className="absolute w-[12.30%] h-[7.65%] top-[6.78%] left-[22.85%]"
                      alt=""
                      src={vector10}
                    />
                    <img
                      className="absolute w-[12.27%] h-[7.58%] top-[11.46%] left-[22.88%]"
                      alt=""
                      src={vector11}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </main>
  );
};
