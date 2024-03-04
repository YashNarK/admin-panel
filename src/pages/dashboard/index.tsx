import React, { useMemo } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import Stats from "../../components/dashboard/Stats";
import { ResponsiveAreaChart } from "../../components/dashboard/ResponsiveAreaChart";
import { ResponsiveBarChart } from "../../components/dashboard/ResponsiveBarChart";
import { TabView } from "../../components/dashboard/TabView";
import { RecentSales } from "../../components/dashboard/RecentSales";
import { IChartDatum, ILineData, TTab } from "../../interfaces";
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
import { revenueDataset_250223_030323 } from "../../data/data";

const filters: CrudFilter[] = [
  {
    field: "start",
    operator: "eq",
    value: dayjs()?.subtract(7, "days")?.startOf("day"),
  },
  {
    field: "end",
    operator: "eq",
    value: dayjs().startOf("day"),
  },
];

const pickDateRange = () => {
  let value1 = dayjs()?.subtract(7, "days")?.startOf("day");
  let value2 = dayjs().startOf("day");
};

export const Dashboard: React.FC = () => {
  // hooks
  const { data: dailyRevenue } = useList<IChartDatum>({
    resource: "dailyRevenue",
    filters,
  });

  const { data: dailyOrders } = useList<IChartDatum>({
    resource: "dailyOrders",
    filters,
  });

  const { data: newCustomers } = useList<IChartDatum>({
    resource: "newCustomers",
    filters,
  });

  const useMemoizedChartData = (d: any) => {
    return useMemo(() => {
      return d?.data?.data?.map((item: IChartDatum) => ({
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        }).format(new Date(item.date)),
        value: item?.value,
      }));
    }, [d]);
  };

  const memoizedRevenueData = useMemoizedChartData(dailyRevenue);
  const memoizedRevenueDataOld = useMemoizedChartData(
    revenueDataset_250223_030323
  );

  const memoizedOrdersData = useMemoizedChartData(dailyOrders);
  const memoizedNewCustomersData = useMemoizedChartData(newCustomers);

  // helper functions
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
  const lineData: ILineData[] = prepareLineData();

  // debugs
  // console.log("new", dailyRevenue);
  // console.log("old", revenueDataset_250223_030323);
  console.log("new", memoizedRevenueData);
  console.log("old", memoizedRevenueDataOld);
  console.log(lineData);

  // components
  const tabs: TTab[] = [
    {
      id: 1,
      label: "Daily Revenue",
      content: (
        <ResponsiveContainer
          width={"100%"}
          height={400}
          id="chart-line"
          className="rounded-md mx-auto"
        >
          <LineChart data={lineData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
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
      ),
    },

    {
      id: 2,
      label: "Daily Orders",
      content: (
        <ResponsiveBarChart
          kpi="Daily orders"
          data={memoizedOrdersData}
          colors={{
            stroke: "rgb(255, 159, 64)",
            fill: "rgba(255, 159, 64, 0.7)",
          }}
        />
      ),
    },
    {
      id: 3,
      label: "New Customers",
      content: (
        <ResponsiveAreaChart
          kpi="New customers"
          data={memoizedNewCustomersData}
          colors={{
            stroke: "rgb(76, 175, 80)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
  ];

  return (
    <>
      <Stats
        dailyRevenue={dailyRevenue}
        dailyOrders={dailyOrders}
        newCustomers={newCustomers}
      />
      <TabView tabs={tabs} />
      <RecentSales />
    </>
  );
};
