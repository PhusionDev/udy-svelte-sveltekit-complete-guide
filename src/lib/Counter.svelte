<script>
  let count = 0;

  $: string = `You have clicked ${count} times.`;

  $: if(count > 5) {
    console.log(`The count is ${count}`)
  }

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