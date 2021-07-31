<style></style>
<script lang="ts">
import { createEventDispatcher } from "svelte";
import type { Todo } from "../entities/entities";
import TodoItem from "./TodoItem.svelte";

export let items: Todo[] = [];
export let toggleDone: (e: CustomEvent) => void | null = null;
export let removeItem: (e: CustomEvent) => void | null = null;
export let id: string;

// const dispatch = createEventDispatcher();

// function forwardToggleEvent(e: CustomEvent<Todo>) {
// some logic
//   dispatch('onToggleDone', e.detail);
// }

// function forwardRemoveEvent(e: CustomEvent) {
//   dispatch('onRemoveEvent', e.detail);
// }

</script>

<div id={id} class="list">
  <ul>
    {#each items as item}
      <TodoItem {item} on:onToggleDone={toggleDone} on:onRemoveItem={removeItem}/>
    {/each}
  </ul>
</div>

