import { useQuery } from "@tanstack/react-query";
import { getEquipment } from "../services/apiEquipments";

export function useEquipment(id) {
  const {
    isLoading,
    data: equipmentData = {},
    error,
  } = useQuery({
    queryKey: ["equipmentData", id],
    queryFn: () => getEquipment(id),
    enabled: !!id,
  });
  return { isLoading, equipmentData, error };
}
