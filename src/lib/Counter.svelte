<script>
  export let initialCount = 0;
  export let maxCount = undefined;

  let count = initialCount;

  function increment() {
    if (count >= maxCount) {
      return;
    }
    count += 1;
  }
</script>

<style>
  button {
    padding: 15px 20px;
  }
</style>

<button on:click={increment}>
  Clicks {count}
</button>
