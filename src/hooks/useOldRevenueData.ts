import { IOldData } from "../interfaces";
import { AxiosRequestConfig } from "../services/api-client";
import revenueDataService from "../services/revenue-data-service";
import useData from "./useData";

const useOldRevenueData = (requestConfig: AxiosRequestConfig, deps?: any[]) => {
  const { data, httpErrors, isLoading } = useData<IOldData>(
    revenueDataService,
    requestConfig,
    deps || ["old-revenue"]
  );

  return { oldRevenueData: data, httpErrors, isLoading };
};

export default useOldRevenueData;
