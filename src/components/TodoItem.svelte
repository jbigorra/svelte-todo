
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
    item.done = !item.done;
  };

  const onXClicked = () => {
    console.log(`${item.text} removed`)
    dispatch('onRemoveItem', { item });
  }

</script>


<li class:striked={item.done}>
  {item.text}
  <input type="button" value="DONE" on:click={toggleDone}/>
  <input type="button" value="X" on:click={onXClicked}/>
</li>
