import React from "react";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import { TooltipProps } from "recharts";
import styles from "./CustomTooltip.module.css";
type CustomTooltipProps = TooltipProps<number, string>;

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    let newVal = payload[0].payload.value;
    let oldVal = payload[1].payload.oldValue;
    let diff =
      ((Math.max(newVal, oldVal) - Math.min(newVal, oldVal)) /
        Math.max(newVal, oldVal)) *
      100;

    return (
      <>
        <div className="stats shadow">
          <div className="stat">
            <div
              className={[
                "stat-figure",
                `${newVal > oldVal ? "text-success" : "text-error"}`,
              ].join(" ")}
            >
              {newVal > oldVal ? (
                <HiArrowTrendingUp />
              ) : (
                <HiArrowTrendingDown />
              )}{" "}
              {diff.toFixed(2)}%
            </div>
            <div className="new-value flex">
              <div className="badge my-auto mr-2">
                <div className={["h-1 w-6", styles.bg8884d8].join(" ")}></div>
              </div>
              <div className="my-auto">
                <span>{`${label} ${payload[0].name} `}</span>
                <span className="ml-4 font-bold">
                  {newVal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
            <div className="old-value flex">
              <div className="badge my-auto mr-2">
                <div className={["h-1 w-6", styles.bgddedf8].join(" ")}></div>
              </div>
              <div className="my-auto">
                <span>{`${label} ${payload[1].name} `}</span>
                <span className="ml-4 font-bold">
                  {oldVal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default CustomTooltip;
