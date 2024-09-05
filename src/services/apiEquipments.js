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

export async function getEquipment(id) {
  const { data: equipmentData, error: equipmentError } = await supabase
    .from("equipment")
    .select("*")
    .eq("id", id)
    .single();

  if (equipmentError) {
    console.error("Error loading equipment data:", equipmentError.message);
    throw new Error("Sorry. Equipment not found");
  }

  const { data: transitions, error: transitionsError } = await supabase
    .from("specifications_translations")
    .select("specification_name, specification_desc_pl");

  if (transitionsError) {
    console.error("Error loading translations");
    throw new Error("Sorry. Translations not found");
  }

  const specifications = equipmentData.specifications;
  console.log(specifications);

  const translatedSpecifications = {};
  for (const key in specifications) {
    const transition = transitions.find((t) => t.specification_name === key);

    if (transition) {
      translatedSpecifications[transition.specification_desc_pl] =
        specifications[key];
    } else {
      translatedSpecifications[key] = specifications[key];
    }
  }

  return {
    ...equipmentData,
    specifications: translatedSpecifications,
  };
}
