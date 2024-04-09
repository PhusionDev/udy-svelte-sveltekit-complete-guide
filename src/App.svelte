<script>
  let name = 'Svelte';
  let src = 'http://picsum.photos/200/200';
  let string = 'Some <strong>string</strong> with html.'
</script>

<style>
  h1 {
    color: red;
  }
</style>

<img {src} alt="Some text {name}"/>
<h1>Hello {name.toUpperCase()}</h1>
<p>{@html string}</p>