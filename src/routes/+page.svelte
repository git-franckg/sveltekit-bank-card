<script lang="ts">
  import { number } from '$lib/index.js';

  let pan = $state('');

  const card = $derived(number(pan));
</script>

<label>
  Numéro sur la carte:
  <input type="tel" bind:value={pan} />
</label>

<p>
  {JSON.stringify(card, null, 2)}
</p>
