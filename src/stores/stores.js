import { writable, derived } from "svelte/store";
import animalsData from "../data/animals";

// values to filter by
export const animal = writable("");
export const region = writable("");
export const diet = writable("");

export const animals = writable(animalsData);

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
