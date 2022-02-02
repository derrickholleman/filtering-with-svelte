<script>
  import { filteredAnimals } from "./stores/stores.js";
</script>

<ul>
  {#each $filteredAnimals as animal}
    <div class="animal">
      <h2>{animal.animal}</h2>
      <li>Region: {animal.region}</li>
      <li>Diet: {animal.diet}</li>
    </div>
  {/each}
</ul>

<style>
  h2 {
    margin: 0;
  }
</style>
