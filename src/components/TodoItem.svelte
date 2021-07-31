
<style>
  li {
    cursor: pointer;
  }

  li.striked {
    color: grey;
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Todo } from '../entities/entities';

  // Props
  export let item: Todo;

  const dispatch = createEventDispatcher();

  const toggleDone = () => {
    dispatch('onToggleDone', { item });
  };

  const onXClicked = () => {
    console.log(`${item.text} removed`)
    dispatch('onRemoveItem', { item });
  }

</script>


<li class:striked={item.done}>
  {item.text}
  <input type="button" value={item.done ? "Undo" : "Done"} on:click={toggleDone}/>
  <input type="button" value="X" on:click={onXClicked}/>
</li>
