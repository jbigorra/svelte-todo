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
    const id = todoList.length + 1;
    const item: Todo = { id, text: todo, done: false };
    todoList = [item, ...todoList];
    console.log(todoList);
  }

</script>

<div class="main">
  <input bind:value={todo} type="text" placeholder="Your task" id="inputId">
  <button type="button" on:click={addTask}>Add task</button>
  <div class="todo-list">
    <ul>
      {#each todoList as item}
        <TodoItem {item} />
      {/each}
    </ul>
  </div>
</div>
