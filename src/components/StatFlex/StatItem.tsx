import DropdownButton from "../DropdownButton/DropdownButton";
import styles from "./StatFlex.module.css";
import { IStatItem } from "../../interfaces";

type Props = IStatItem

const StatItem = ({
  title,
  value,
  icon,
  percentageDifference,
  isIncreased,
  isSelected,
}: Props) => {
  return (
    <div
      className={[
        " lg:w-1/4 md:w-1/3 w-1/1 rounded hover:bg-base-200 hover:cursor-pointer p-1 mt-5 pl-5",
        isSelected && styles.selectedStatFlex,
        isSelected && "bg-neutral-content",
      ].join(" ")}
    >
      <div className="stat-title text-neutral text-md lg:text-lg font-bold">
        {title} <DropdownButton />
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
  );
};

export default StatItem;
