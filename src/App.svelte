<script>
  import Button from './lib/Button.svelte';
  import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte';
</script>

<Button size="large" shadow bgColor="red" textColor="blue">
  <div style:width="20px" slot="leftContent"><FaAngellist /></div>
  Button Text
</Button>

<!-- <Button /> -->

<style>
</style>
