import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/apiNews";

export function useNews(id) {
  const {
    isLoading,
    data: news = {},
    error,
  } = useQuery({
    queryKey: ["news", id],
    queryFn: () => getNews(id),
    enabled: !!id,
  });

  return { isLoading, news, error };
}
