import { useQuery } from "@tanstack/react-query";
import { getNewEquipments } from "../services/apiEquipments";

export function useNewEquipments() {
  const {
    isLoading,
    data: newEquipments,
    error,
  } = useQuery({
    queryKey: ["newEquipments"],
    queryFn: getNewEquipments,
  });

  return { isLoading, newEquipments, error };
}
