import { useQuery } from "@tanstack/react-query";
import { getLatestNews } from "../services/apiNews";

export function useLatestNews() {
  const {
    isLoading,
    data: latestNewsItems,
    error,
  } = useQuery({
    queryKey: ["latestNewsItems"],
    queryFn: getLatestNews,
  });

  return { isLoading, latestNewsItems, error };
}
