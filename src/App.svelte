<script>
  import Counter from './lib/Counter.svelte';

  const props = {
    maxCount: 10,
    initialCount: 5
  }
  // const maxCount = 6;
</script>

<style>

</style>

<!-- <Counter initialCount={3} {maxCount} /> -->
<Counter {...props} />