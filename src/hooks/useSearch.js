import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSearchResult } from "../services/apiSearch";

export function useSearch(searchTerm) {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({
    queryKey: ["search"],
    exact: true,
  });

  const {
    isLoading,
    data: searchResult,
    error,
  } = useQuery({
    queryKey: ["search"],
    queryFn: () => getSearchResult(searchTerm),
  });

  return { isLoading, searchResult, error };
}
