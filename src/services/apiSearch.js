import supabase from "./supabase";

export async function getSearchResult(searchTerm) {
  const { data, error } = await supabase
    .from("equipment")
    .select("*")
    .ilike("title", `%${searchTerm}%`);
  console.log(searchTerm);

  if (error) {
    console.error(error.message);
    throw new Error("Error loading search results");
  }
  return data;
}
