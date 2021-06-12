<style>

  .todo-list {
    text-align: justify;
  }

  ul {
    list-style: none;
  }

</style>

<script lang="ts">
import { afterUpdate, beforeUpdate, onMount } from "svelte";

  import type { Todo } from "../entities/entities";
  import TodoItem from "./TodoItem.svelte";


  let todo: string;
  let todoList: Todo[] = [];

  onMount(() => {
    // whenever we open the app, we first read what is in the local storage:
    let list = JSON.parse(localStorage.getItem('todoList'));

    if (!list) list = [];

    todoList = list;
  });

  const addItem = () => {
    const id = new Date().getTime();
    const item: Todo = { id, text: todo, done: false };
    todoList = [item, ...todoList];
    // let's overwrite with new stuff, that's da way to save it
    localStorage.setItem('todoList', JSON.stringify(todoList))
    console.log(todoList);
  }


  // Homework, persist removed items
  const removeItem = (e: CustomEvent) => {
    const item = e.detail.item;
    const toRemove = todoList.indexOf(item);
    todoList.splice(toRemove, 1);
    // ok we removed, so now let's save => overwrite the local storage with the 'copy' of local storage
    localStorage.setItem('todoList', JSON.stringify(todoList))
    todoList = todoList;
  }

  /**
   *
   * InMemory                             |     Persisted (Local Storage / Server)
   *   Exists until app is reloaded       |     It should exists even after reloading the app
   *
   *
   *
  */

</script>

<div class="main">
  <input bind:value={todo} type="text" placeholder="Your task" id="inputId">
  <button type="button" on:click={addItem}>Add task</button>
  <div class="todo-list">
    <ul>
      {#each todoList as item}
        <TodoItem {item} on:onRemoveItem={removeItem}/>
      {/each}
    </ul>
  </div>
</div>
