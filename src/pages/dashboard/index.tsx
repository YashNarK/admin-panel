import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import React, { useMemo } from "react";
import { RecentSales } from "../../components/dashboard/RecentSales";
import { ResponsiveAreaChart } from "../../components/dashboard/ResponsiveAreaChart";
import { ResponsiveBarChart } from "../../components/dashboard/ResponsiveBarChart";
import Stats from "../../components/dashboard/Stats";
import { TabView } from "../../components/dashboard/TabView";
import { IChartDatum, TTab } from "../../interfaces";

import ResponsiveLineChart from "../../components/dashboard/ResponsiveLineChart";
import formatDate from "../../helpers/utility";
import useOldRevenueData from "../../hooks/useOldRevenueData";

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

const oldFilters: { value: any }[] = [
  { value: dayjs().subtract(1, "year").subtract(8, "days") },
  { value: dayjs().subtract(1, "year").subtract(1, "days") },
];

export const Dashboard: React.FC = () => {
  // hooks

  const { oldRevenueData, isLoading } = useOldRevenueData({
    params: {
      date_gte: formatDate({
        inputDate: oldFilters[0].value.$d,
        format: "YYYY-MM-DD",
      }),
      date_lte: formatDate({
        inputDate: oldFilters[1].value.$d,
        format: "YYYY-MM-DD",
      }),
    },
  });

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

  const memoizedOrdersData = useMemoizedChartData(dailyOrders);
  const memoizedNewCustomersData = useMemoizedChartData(newCustomers);

  // helper functions

  // debugs
  // console.log("new", dailyRevenue);
  // console.log(lineData);
  // console.log(
  //   formatDate({ inputDate: filters[0].value.$d, format: "YYYY-MM-DD" })
  // );
  // console.log(
  //   formatDate({ inputDate: filters[1].value.$d, format: "YYYY-MM-DD" })
  // );
  // console.log("new", memoizedRevenueData);

  // console.log("old", oldRevenueData);

  // console.log(oldFilters[0].value.$d);
  // console.log(oldFilters[1].value.$d);
  // console.log(filters[0].value.$d);
  // console.log(filters[1].value.$d);

  // components
  const tabs: TTab[] = [
    {
      id: 1,
      label: "Daily Revenue",
      content: (
        <ResponsiveLineChart
          memoizedRevenueData={memoizedRevenueData}
          memoizedRevenueDataOld={oldRevenueData}
          isLoading={isLoading}
        />
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
