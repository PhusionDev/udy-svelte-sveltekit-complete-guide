<script>
  import Button from './Button.svelte';
  export let todos = [];

  let inputText = '';

  function handleAddTodo(event) {}
</script>

<div class="todo-list-wrapper">
  <ul>
    {#each todos as { id, title }, index (id)}
      {@const number = index + 1}
      <li>{number}- {title}</li>
    {/each}
  </ul>
  {inputText}
  <form
    class="add-todo-form"
    action=""
    on:submit|preventDefault={handleAddTodo}
  >
    <input bind:value={inputText} />
    <Button>Add Todo</Button>
  </form>
</div>
