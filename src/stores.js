import { writable, derived } from "svelte/store";

// values to filter by
export const animal = writable("");
export const region = writable("");
export const diet = writable("");

export const animals = writable([
  { animal: "Lion", region: "Africa", diet: "Carnivore" },
  { animal: "Buffalo", region: "North America", diet: "Herbivore" },
  { animal: "Fish", region: "Oceania", diet: "Herbivore" },
  { animal: "Iguana", region: "Central America", diet: "Herbivore" },
  { animal: "Elephant", region: "Africa", diet: "Herbivore" },
  { animal: "Falcon", region: "North America", diet: "Carnivore" },
  { animal: "Tiger", region: "Asia", diet: "Carnivore" },
]);

export const filteredAnimals = derived(
  [animal, region, diet, animals],
  ([$animal, $region, $diet, $animals]) =>
    $animals.filter((item) => {
      return (
        item.animal.toLowerCase().includes($animal) &&
        item.region.toLowerCase().includes($region) &&
        item.diet.toLowerCase().includes($diet)
      );
    })
);
