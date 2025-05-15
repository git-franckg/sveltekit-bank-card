<script lang="ts">
  import { number, cardImages, imgGenericCard } from '$lib/index.js';

  let pan = $state('');

  const card = $derived(number(pan));
</script>

<label>
  Numéro sur la carte:
  <input type="tel" bind:value={pan} />
</label>

<img src={card.card ? cardImages[card.card.networkType] : imgGenericCard} height="40" alt={card.card?.networkName ?? 'Carte bancaire'} />

<p>
  {JSON.stringify(card, null, 2)}
</p>
