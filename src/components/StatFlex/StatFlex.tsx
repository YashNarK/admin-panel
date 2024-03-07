import styles from "./StatFlex.module.css";
import StatItem from "./StatItem";
import { statItemList } from "./statitemData";

const StatFlex = () => {
  return (
    <div
      className={["flex flex-row flex-wrap  mb-5", styles.StatFlex].join(" ")}
    >
      {statItemList.map((item, index) => (
        <StatItem
          title={item.title}
          icon={item.icon}
          isIncreased={item.isIncreased}
          isSelected={item.isSelected}
          value={item.value}
          percentageDifference={item.percentageDifference}
        />
      ))}
    </div>
  );
};

export default StatFlex;
