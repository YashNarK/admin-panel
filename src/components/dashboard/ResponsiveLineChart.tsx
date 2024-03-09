import dayjs from "dayjs";

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
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
import { IChartDatum, TLineData } from "../../interfaces";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import CustomizedLegend from "../CustomizedLegend/CustomizedLegend";
import StatFlex from "../StatFlex/StatFlex";
import formatDate from "../../helpers/utility";
import Skeleton from "../Skeleton/Skeleton";

interface Props {
  memoizedRevenueData: any;
  memoizedRevenueDataOld: any;
  isLoading: boolean;
}

const ResponsiveLineChart = ({
  memoizedRevenueData,
  memoizedRevenueDataOld,
  isLoading,
}: Props) => {
  // hooks
  const [isChecked, setIsChecked] = useState(false);
  // helpers

  function prepareLineData() {
    let i = 0;

    return memoizedRevenueData?.map((revenueData: IChartDatum) => {
      let newData = {
        ...revenueData,
        oldValue: memoizedRevenueDataOld[i].value,
        date: formatDate({ inputDate: revenueData.date, format: "DD, MMM" }),
      };
      i += 1;
      return newData;
    });
  }

  //   consts and variables
  const lineData: TLineData[] = !isLoading && prepareLineData();

  //   debugs
  // console.log(memoizedRevenueData);
  // console.log(memoizedRevenueDataOld);

  //   components
  if (!isLoading)
    return (
      <div
        className={["static lg:relative ", !isChecked && "mb-20 pb-20"].join(
          " "
        )}
      >
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
              {!isChecked ? <FaAngleDown /> : <FaAngleUp />}
            </button>
          </div>
        </div>
        <div className="collapse bg-base-100 z-[99]">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div className="collapse-title" />

          <div className="collapse-content">
            <ResponsiveContainer
              width={"100%"}
              height={400}
              id="chart-line"
              className="rounded-md mx-auto mt-20"
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
                          memoizedRevenueData[memoizedRevenueData.length - 1]
                            .date
                        }
                        oldStartDate={formatDate({
                          inputDate: memoizedRevenueDataOld[0].date,
                          format: "MMM DD, YYYY",
                        })}
                        oldEndDate={formatDate({
                          inputDate:
                            memoizedRevenueDataOld[
                              memoizedRevenueDataOld.length - 1
                            ].date,
                          format: "MMM DD, YYYY",
                        })}
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
  return <Skeleton />;
};

export default ResponsiveLineChart;
