<script>
  import { filteredAnimals, animal, region, diet } from "./stores/stores.js";
</script>

<ul>
  {#each $filteredAnimals as animal}
    <div class="animal">
      <h2>{animal.animal}</h2>
      <li>Region: {animal.region}</li>
      <li>Diet: {animal.diet}</li>
    </div>
  {/each}

  {#if $filteredAnimals.length === 0}
    <p class="no-results">No results found!</p>
  {/if}
</ul>

<style>
  h2 {
    margin: 0;
  }
  .no-results {
    color: red;
    font-size: 1.25rem;
  }
</style>
