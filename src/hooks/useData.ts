import { HttpService } from "../services/http-service";
import { AxiosError, AxiosRequestConfig } from "../services/api-client";
import { TResponseData } from "../interfaces";
import { useQuery } from "@tanstack/react-query";

const useData = <T>(
  serviceObject: HttpService,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[],
  cacheStaleTime?: number
) => {
  const queryKey = deps || ["data"];

  const queryFn = async () => {
    const { resp } = await serviceObject.get<TResponseData<T>>(requestConfig);
    return resp.data;
  };
  const staleTime = cacheStaleTime || 1000 * 60 * 10; // The data will remain fresh until 10 mins by default
  const cacheTime = 1000 * 60 * 10;
  const { data, error, isLoading, isFetching } = useQuery<
    TResponseData<T>,
    AxiosError
  >({ queryKey, queryFn, staleTime , cacheTime});

  return {
    data: data,
    httpErrors: error?.message,
    isLoading: isLoading || isFetching,
  };
};

export default useData;
