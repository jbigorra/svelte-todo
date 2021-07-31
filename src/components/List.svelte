<style>

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    border: 2px solid #000;
    padding: 1rem;
  }

  ul {
    list-style: none;
    padding: 0.5rem;
  }

</style>
<script lang="ts">
import { createEventDispatcher } from "svelte";
import type { Todo } from "../entities/entities";
import TodoItem from "./TodoItem.svelte";

export let items: Todo[] = [];
export let toggleDone: (e: CustomEvent) => void | null = null;
export let removeItem: (e: CustomEvent) => void | null = null;
export let id: string;
export let title: string;

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
  <h3>{title}</h3>
  <ul>
    {#each items as item}
      <TodoItem {item} on:onToggleDone={toggleDone} on:onRemoveItem={removeItem}/>
    {/each}
  </ul>
</div>

