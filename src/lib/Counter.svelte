<script>
  let count = 0;
  let string = `You have clicked ${count} times.`;

  function increment() {
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
<h3>{string}</h3>