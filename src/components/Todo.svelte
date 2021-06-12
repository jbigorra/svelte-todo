<style>

  .todo-list {
    text-align: justify;
  }

  ul {
    list-style: none;
  }

</style>

<script lang="ts">
  import { onMount } from "svelte";
  import { getItems } from "../api-client";

  import type { Todo } from "../entities/entities";
  import TodoItem from "./TodoItem.svelte";

  let todo: string;
  let todoList: Todo[] = [];

  onMount(() => {
    getItems().then(items => todoList = items);
  })


  const addItem = () => { // POST /item {item}
    const id = new Date().getTime();
    const item: Todo = { id, text: todo, done: false };
    todoList = [item, ...todoList];
    // let's overwrite with new stuff, that's da way to save it
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }


  // Homework, persist removed items
  const removeItem = (e: CustomEvent) => { // DELETE /item {item}
    const item = e.detail.item;
    const toRemove = todoList.indexOf(item);
    todoList.splice(toRemove, 1);
    // ok we removed, so now let's save => overwrite the local storage with the 'copy' of local storage
    localStorage.setItem('todoList', JSON.stringify(todoList))
    todoList = todoList;
  }

  const toggleDone = (e: CustomEvent) => { // PUT /item {item}
    const item = e.detail.item;
    item.done = !item.done;
    localStorage.setItem('todoList', JSON.stringify(todoList))
    todoList = todoList;
  }

</script>

<div class="main">
  <input bind:value={todo} type="text" placeholder="Your task" id="inputId">
  <button type="button" on:click={addItem}>Add task</button>
  <div class="todo-list">
    <ul>
      {#each todoList as item }
        <TodoItem {item} on:onToggleDone={toggleDone} on:onRemoveItem={removeItem}/>
      {/each}
    </ul>
  </div>
</div>
