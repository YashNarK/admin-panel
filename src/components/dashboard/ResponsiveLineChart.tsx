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

interface Props {
  memoizedRevenueData: any;
  memoizedRevenueDataOld: any;
}

const ResponsiveLineChart = ({
  memoizedRevenueData,
  memoizedRevenueDataOld,
}: Props) => {
  // hooks

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
    <>
      <div className="collapse collapse-arrow bg-base-100">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <ResponsiveContainer
            width={"100%"}
            height={400}
            id="chart-line"
            className="rounded-md mx-auto"
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
    </>
  );
};

export default ResponsiveLineChart;
