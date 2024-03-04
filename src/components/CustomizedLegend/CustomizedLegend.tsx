import React from "react";
import styles from "./CustomizedLegend.module.css";

interface Props {
  newStartDate: string;
  newEndDate: string;
  oldStartDate: string;
  oldEndDate: string;
}

const CustomizedLegend: React.FC<Props> = ({
  newStartDate,
  newEndDate,
  oldStartDate,
  oldEndDate,
}: Props) => {
  return (
    <div className="flex my-3 px-10 justify-end">
      <div className=" h-6   bg-base-200 place-items-center px-2">
        <div className="flex">
          <div className="badge bg-base-200 my-auto mr-2">
            <div className={["h-1 w-6", styles.bg8884d8].join(" ")}></div>
          </div>{" "}
          <div>{`${newStartDate} - ${newEndDate}`}</div>
        </div>
      </div>

      <div className="divider divider-horizontal"></div>
      <div className=" h-6 bg-base-200 place-items-center px-2">
        <div className="flex">
          <div className="badge bg-base-200 my-auto mr-2">
            <div className={["h-1 w-6", styles.bgddedf8].join(" ")}></div>
          </div>
          <div>{`${oldStartDate} - ${oldEndDate}`}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomizedLegend;
