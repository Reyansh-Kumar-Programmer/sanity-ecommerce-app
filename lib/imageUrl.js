import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanityClient';

// Build image URLs
const builder = imageUrlBuilder(client);

export function imageUrl(source) {
  return builder.image(source).url(); // Returns the image URL as a string
}
