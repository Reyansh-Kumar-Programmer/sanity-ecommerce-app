import { client } from "../sanityClient";

// Query to fetch all products
export async function getAllProducts() {
  const query = `*[_type == "product"] | order(name asc)`; // Adjust based on your schema
  return await client.fetch(query);
}
