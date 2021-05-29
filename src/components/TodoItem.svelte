
<style>
  li {
    cursor: pointer;
  }

  li.striked {
    text-decoration: line-through;
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

</script>

<li class:striked={item.done} on:click={toggleDone}>{item.text}</li>
