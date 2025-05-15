<script lang="ts">
  import { number, cardImages } from '$lib/index.js';

  let pan = $state('');

  const card = $derived(number(pan));
</script>

<label>
  Numéro sur la carte:
  <input type="tel" bind:value={pan} />
</label>

{#if card && card.card}
  <img src={cardImages[card.card.networkType]} height="40" alt={card.card.networkName} />
{/if}

<p>
  {JSON.stringify(card, null, 2)}
</p>
