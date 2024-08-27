import { z, defineCollection } from "astro:content"

const species = defineCollection({
   type: "content",
   schema: z.object({
      category: z.enum(["snakes", "lizards", "turtles", "frogs", "salamanders"]),
      scientificName: z.string(),
      commonName: z.string(),
      imagePath: z.string(),
   }),
})

export const collections = {
   species,
}
