import { createClient } from '@sanity/client';

// Initialize Sanity client
export const client = createClient({
  projectId: '49f7epyu', // Replace with your Sanity project ID
  dataset: 'production',     // Replace with your dataset (e.g., 'production')
  useCdn: true,                // `true` for faster, cache-friendly responses; set to `false` if you need real-time data
  apiVersion: '2024-11-02',    // Use the latest version or match your Sanity project's API version
});
