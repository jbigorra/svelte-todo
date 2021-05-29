<style>

  .todo-list {
    text-align: justify;
  }

  ul {
    list-style: none;
  }

</style>

<script lang="ts">
import type { Todo } from "../entities/entities";
import TodoItem from "./TodoItem.svelte";


  let todo: string;
  let todoList: Todo[] = [];

  const addTask = () => {
    const id = new Date().getTime();
    const item: Todo = { id, text: todo, done: false };
    todoList = [item, ...todoList];
    console.log(todoList);
  }

  const removeItem = (e: CustomEvent) => {
    const item = e.detail.item;
    const toRemove = todoList.indexOf(item);
    todoList.splice(toRemove, 1);
    todoList = todoList;
    console.log(todoList);
  }

</script>

<div class="main">
  <input bind:value={todo} type="text" placeholder="Your task" id="inputId">
  <button type="button" on:click={addTask}>Add task</button>
  <div class="todo-list">
    <ul>
      {#each todoList as item}
        <TodoItem {item} on:onRemoveItem={removeItem}/>
      {/each}
    </ul>
  </div>
</div>
