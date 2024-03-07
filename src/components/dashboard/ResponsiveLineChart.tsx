import dayjs from "dayjs";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IChartDatum, ILineData } from "../../interfaces";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import CustomizedLegend from "../CustomizedLegend/CustomizedLegend";
import StatFlex from "../StatFlex/StatFlex";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { useState } from "react";

interface Props {
  memoizedRevenueData: any;
  memoizedRevenueDataOld: any;
}

const ResponsiveLineChart = ({
  memoizedRevenueData,
  memoizedRevenueDataOld,
}: Props) => {
  // hooks
  const [isChecked, setIsChecked] = useState(false);
  // helpers

  function extractDateWithoutYear(dateString: string) {
    return dayjs(dateString).format("DD, MMM");
  }

  function prepareLineData() {
    let i = 0;

    return memoizedRevenueData?.map((revenueData: IChartDatum) => {
      let newData = {
        ...revenueData,
        oldValue: memoizedRevenueDataOld[i].value,
        date: extractDateWithoutYear(revenueData.date),
      };
      i += 1;
      return newData;
    });
  }

  //   consts and variables
  const lineData: ILineData[] = prepareLineData();

  //   debugs

  //   components
  return (
    <div className="static lg:relative">
      <div className="flex justify-between w-full bg-base-100 static lg:absolute z-[100]">
        <div className="flex-grow px-4">
          <StatFlex />
        </div>{" "}
        <div className="flex-none my-auto mx-2 ">
          <button
            className="btn btn-ghost"
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          >
            {!isChecked ? <FaAngleDoubleDown /> : <FaAngleDoubleUp />}
          </button>
        </div>
      </div>
      <div className="collapse bg-base-100 m-0 z-[99]">
        <input
          className="h-0 p-0 m-0"
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <div className="collapse-title h-0 p-0 m-0" />

        <div className="collapse-content">
          <ResponsiveContainer
            width={"100%"}
            height={400}
            id="chart-line"
            className="rounded-md mx-auto my-10"
          >
            <LineChart data={lineData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              {memoizedRevenueData && memoizedRevenueDataOld && (
                <Legend
                  content={
                    <CustomizedLegend
                      newStartDate={memoizedRevenueData[0].date}
                      newEndDate={
                        memoizedRevenueData[memoizedRevenueData.length - 1].date
                      }
                      oldStartDate={memoizedRevenueDataOld[0].date}
                      oldEndDate={
                        memoizedRevenueDataOld[
                          memoizedRevenueDataOld.length - 1
                        ].date
                      }
                    />
                  }
                />
              )}
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                strokeWidth={3}
                name="2024"
              />

              <Line
                type="monotone"
                dataKey="oldValue"
                stroke="#ddedf8"
                strokeWidth={3}
                strokeDasharray={"9 3"}
                name="2023"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLineChart;
