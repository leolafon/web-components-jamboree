<script>
  import Counter from './lib/Counter.svelte'

  let value = 0;

  let slotValue = 0;

  setInterval(() => {
    value += 1;
  }, 1000);
</script>

<main>
  <div class="card">
    <Counter />
  </div>

  <div class="card">
    <custom-counter />
  </div>

  <div class="card">
    <attribute-counter value={value} />
  </div>

  <div class="card">
    <scoped-style-counter />
  </div>

  <div class="card">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <slot-counter on:click={() => slotValue++}>
      <span slot="content">
        slot count is {slotValue}
      </span>
    </slot-counter>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
  }
</style>