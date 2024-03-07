import DropdownButton from "../DropdownButton/DropdownButton";
import styles from "./StatFlex.module.css";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
const StatFlex = () => {
  return (
    <div
      className={["flex flex-row flex-wrap  mb-5", styles.StatFlex].join(" ")}
    >
      <div
        className={[
          " lg:w-1/4 md:w-1/3 w-1/1 rounded hover:bg-base-200 hover:cursor-pointer p-1 mt-5 pl-5",
          styles.selectedStatFlex,
          "bg-neutral-content",
        ].join(" ")}
      >
        <div className="stat-title text-neutral text-md lg:text-lg font-bold">
          Online store sessions <DropdownButton />
        </div>
        <div className={[styles.dashedHorizontalLine, "w-3/4"].join(" ")} />
        <div>
          <span className="stat-value text-base">255,581</span>
          <span className="stat-desc mx-5 text-success font-bold">
            <FaCaretUp className="inline" /> 9%
          </span>
        </div>
      </div>

      <div className=" lg:w-1/4 md:w-1/3 w-1/1 rounded hover:bg-base-200 hover:cursor-pointer p-1 mt-5 pl-5">
        <div className="stat-title text-neutral text-md lg:text-lg font-bold">
          Net return value <DropdownButton />
        </div>
        <div className={[styles.dashedHorizontalLine, "w-3/4"].join(" ")} />

        <div>
          <span className="stat-value text-base ">-$15,07.44</span>
          <span className="stat-desc mx-5 text-success font-bold">
            <FaCaretUp className="inline" /> 14%
          </span>
        </div>
      </div>

      <div className=" lg:w-1/4 md:w-1/3 w-1/1 rounded hover:bg-base-200 hover:cursor-pointer p-1 mt-5 pl-5">
        <div className="stat-title text-neutral text-md lg:text-lg font-bold">
          Total orders <DropdownButton />
        </div>
        <div className={[styles.dashedHorizontalLine, "w-3/4"].join(" ")} />

        <div>
          <span className="stat-value text-base">10,511</span>
          <span className="stat-desc mx-5 text-error font-bold">
            <FaCaretDown className="inline" /> 2%
          </span>
        </div>
      </div>

      <div className=" lg:w-1/4 md:w-1/3 w-1/1 rounded hover:bg-base-200 hover:cursor-pointer p-1 mt-5 pl-5">
        <div className="stat-title text-neutral text-md lg:text-lg font-bold">
          Conversion rate <DropdownButton />
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
