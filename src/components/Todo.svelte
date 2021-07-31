<style>

  .lists {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

</style>

<script lang="ts">
  import { onMount } from "svelte";

  import type { Todo } from "../entities/entities";
  import List from "./List.svelte";


  let todo: string;
  let todoList: Todo[] = [];

  onMount(() => {
    // whenever we open the app, we first read what is in the local storage:
    let list = JSON.parse(localStorage.getItem('todoList'));

    if (!list) list = [];

    todoList = list;
    console.log(todoList);
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

  const toggleDone = (e: CustomEvent) => {
    const item = e.detail.item;
    item.done = !item.done;
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

  <div class="lists">
    <List id="todo-list" title="What you have left" items={todoList.filter(t => !t.done)} toggleDone={toggleDone} removeItem={removeItem} />
    <List id="done-list" title="Things you've done yay" items={todoList.filter(t => t.done)} toggleDone={toggleDone} removeItem={removeItem} />
  </div>
</div>

<!-- const List = {
  items: filter('todos'),
  toggleDone: toggleDone,
} -->
