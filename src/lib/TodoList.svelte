<script>
  import { v4 as uuid } from 'uuid';

  import Button from './Button.svelte';
  export let todos = [];

  let inputText = '';

  function handleAddTodo(event) {
    if (!inputText) return;

    todos = [
      ...todos,
      {
        id: uuid(),
        title: inputText,
        completed: false,
      },
    ];
  }
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
    <Button type="submit" disabled={!inputText}>Add Todo</Button>
  </form>
</div>
