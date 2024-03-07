import DropdownButton from "../DropdownButton/DropdownButton";
import styles from "./StatFlex.module.css";
import { IStatItem } from "../../interfaces";
import { useState } from "react";

type Props = IStatItem;

const StatItem = ({
  title,
  value,
  icon,
  percentageDifference,
  isIncreased,
  isSelected,
  description,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={[
        "relative flex flex-col lg:w-1/4 md:w-1/3 w-1/1 rounded",
      ].join(" ")}
    >
      <div
        className={[
          " rounded hover:bg-base-200 hover:cursor-pointer p-1 mt-5 pl-5 ",
          isSelected && styles.selectedStatFlex,
          isSelected && "bg-neutral-content",
        ].join(" ")}
      >
        <div className="stat-title text-neutral text-md lg:text-lg font-bold">
          <span
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            {title}
          </span>{" "}
          <DropdownButton />
        </div>
        <div className={[styles.dashedHorizontalLine, "w-3/4"].join(" ")} />
        <div>
          <span className="stat-value text-base">{value}</span>
          <span
            className={[
              "stat-desc mx-5  font-bold",
              isIncreased ? "text-success" : "text-error",
            ].join(" ")}
          >
            {icon} {percentageDifference}
          </span>
        </div>
      </div>

      {isHovered && (
        <div
          className={[
            "border-solid border-2 border-black-100 rounded p-1 mt-5 px-5 absolute top-12 left-5 bg-base-100",
          ].join(" ")}
        >
          <h3 className="font-bold">{title}</h3>
          <hr />
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default StatItem;
