import { z, defineCollection } from "astro:content"

const speciesCollection = defineCollection({
   type: "content",
   schema: z.object({
      category: z.string(),
      scientificName: z.string(),
      commonName: z.string(),
      imagePath: z.string(),
   }),
})

export const collections = {
   species: speciesCollection,
}
