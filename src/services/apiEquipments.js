import supabase from "./supabase";

export async function getNewEquipments() {
  const { data, error } = await supabase
    .from("equipment")
    .select("id, title, description, imageUrl")
    .eq("is_available", "TRUE")
    .range(0, 6);

  if (error) {
    console.error("Error loading new equipments");
    throw new Error("Sorry. No equipments in database");
  }

  return data;
}
