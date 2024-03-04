import styles from "./StatFlex.module.css";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
const StatFlex = () => {
  return (
    <div
      className={[
        "stats stats-vertical lg:stats-horizontal flex justify-evenly ",
        styles.StatFlex,
      ].join(" ")}
    >
      <div
        className={[
          "w-60 rounded hover:bg-base-200 hover:cursor-pointer p-2 mt-5",
          styles.selectedStatFlex,
          "bg-neutral-content",
        ].join(" ")}
      >
        <div className="stat-title text-neutral text-lg font-bold">
          Online store sessions
        </div>
        <div className={[styles.dashedHorizontalLine, "w-3/4"].join(" ")} />
        <div>
          <span className="stat-value text-base">255,581</span>
          <span className="stat-desc mx-5 text-success font-bold">
            <FaCaretUp className="inline" /> 9%
          </span>
        </div>
      </div>

      <div className="w-60 rounded hover:bg-base-200 hover:cursor-pointer p-2 mt-5">
        <div className="stat-title text-neutral text-lg font-bold">
          Net return value
        </div>
        <div className={[styles.dashedHorizontalLine, "w-3/4"].join(" ")} />

        <div>
          <span className="stat-value text-base ">-$15,07.44</span>
          <span className="stat-desc mx-5 text-success font-bold">
            <FaCaretUp className="inline" /> 14%
          </span>
        </div>
      </div>

      <div className="w-60 rounded hover:bg-base-200 hover:cursor-pointer p-2 mt-5">
        <div className="stat-title text-neutral text-lg font-bold">
          Total orders
        </div>
        <div className={[styles.dashedHorizontalLine, "w-3/4"].join(" ")} />

        <div>
          <span className="stat-value text-base">10,511</span>
          <span className="stat-desc mx-5 text-error font-bold">
            <FaCaretDown className="inline" /> 2%
          </span>
        </div>
      </div>

      <div className="w-60 rounded hover:bg-base-200 hover:cursor-pointer p-2 mt-5">
        <div className="stat-title text-neutral text-lg font-bold">
          Conversion rate
        </div>
        <div className={[styles.dashedHorizontalLine, "w-3/4"].join(" ")} />

        <div>
          <span className="stat-value text-base">3.18%</span>
          <span className="stat-desc mx-5 text-error font-bold">
            <FaCaretDown className="inline" /> 7%
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatFlex;
