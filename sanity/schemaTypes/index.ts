import { type SchemaTypeDefinition } from "sanity";
import hero from "./hero";
import banner from "./banner";
import carousel from "./carousel";
import promos from "./promos";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, banner, carousel, promos],
};
