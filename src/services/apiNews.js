import supabase from "./supabase";

export async function getLatestNews() {
  const { data, error } = await supabase
    .from("news")
    .select("id, title, content, imageUrl")
    .range(0, 6)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading news: ", error.message);
    throw new Error("News not found");
  }

  return data;
}

export async function getNews(id) {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error loading news: ", error.message);
    throw new Error("News not found");
  }

  return data;
}
