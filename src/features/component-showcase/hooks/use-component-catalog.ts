import { componentCatalog } from "@/features/component-showcase/component-catalog";

// TODO: implement catalog filtering/search
export function useComponentCatalog() {
  return { items: componentCatalog };
}
