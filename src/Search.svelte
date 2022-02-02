<script>
  import { animal, region, diet } from "./stores/stores.js";

  let animalValue = "";
  let regionValue = "";
  let dietValue = "";

  $: animal.set(animalValue.toLowerCase().trim());
  $: region.set(regionValue.toLowerCase().trim());
  $: diet.set(dietValue.toLowerCase().trim());
</script>

<label for="searchByAnimal">Search By Animal</label>
<input bind:value={animalValue} type="text" id="searchByAnimal" />

<label for="searchByRegion">Search By Region</label>

<select bind:value={regionValue} id="searchByRegion">
  <option value="">-- Select a Region -- </option>
  <option value="North America">North America</option>
  <option value="South America">South America</option>
  <option value="Europe">Europe</option>
  <option value="Asia">Asia</option>
  <option value="Central America">Central America</option>
  <option value="Africa">Africa</option>
  <option value="Oceania">Oceania</option>
</select>

<label for="searchByDiet">Search By Diet</label>
<input bind:value={dietValue} type="text" id="searchByDiet" />
