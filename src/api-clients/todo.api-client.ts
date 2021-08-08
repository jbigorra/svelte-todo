import type { Todo } from "../entities/entities";

interface ITodoApiClient {
  get(id: number) : Promise<Todo>;
  getAll(id: number) : Promise<Todo[]>;
  post(item: Todo) : Promise<void>;
  put(item: Todo) : Promise<Todo>;
  delete(id: number) : Promise<void>;
}

export class MockApiClient implements ITodoApiClient {
  todos: Todo[] = [];

  constructor() {

  }

  get(id: number): Promise<Todo> { // GETS TODO
    const todo = this.todos.find(t => t.id === id);
    return Promise.resolve(todo);
  }

  getAll() : Promise<Todo[]> { // GET ALL
    return Promise.resolve(this.todos);
  }

  post(item: Todo): Promise<void> { // CREATES TODO
    this.todos.push(item);
    return Promise.resolve();
  }

  put(updatedItem: Todo): Promise<Todo> { // UPDATES TODO
    const indexOfUpdatedItem = this.todos.findIndex(t => t.id === updatedItem.id);

    if (indexOfUpdatedItem === -1) {
      return Promise.reject("Cannot find item");
    }

    this.todos[indexOfUpdatedItem] = updatedItem

    return Promise.resolve(updatedItem);
  }

  delete(id: number): Promise<void> {
    const todoIndex = this.todos.findIndex(t => t.id === id);

    if (todoIndex === -1) {
        return Promise.reject("Cannot find item");
    }

    this.todos.splice(todoIndex, 1);

    return Promise.resolve();
  }
}

// // CRUD - CreateReadUpdateDelete
// interface ITodoRepository {
//   add(item: Todo) : void;
//   get(id: number) : Todo;
//   update(item: Todo) : Todo;
//   delete(id: number) : void;
// }

// class InMemoryTodoRepository implements ITodoRepository {
//   todoList: Todo[];

//   constructor() {
//     this.todoList = [];
//   }

//   add(item: Todo): void {
//     this.todoList.push(item);
//   }
//   get(id: number): Todo {
//     return this.todoList.find(t => t.id === id);
//   }
//   update(item: Todo): Todo {
//     throw new Error("Method not implemented.");
//   }
//   delete(id: number): void {
//     throw new Error("Method not implemented.");
//   }
// }

// class LocalStorageTodoRepository implements ITodoRepository {
//   constructor(parameters) {

//   }
//   add(item: Todo): void {
//     throw new Error("Method not implemented.");
//   }
//   get(id: number): Todo {
//     throw new Error("Method not implemented.");
//   }
//   update(item: Todo): Todo {
//     throw new Error("Method not implemented.");
//   }
//   delete(id: number): void {
//     throw new Error("Method not implemented.");
//   }
// }

// class TodoService {
//   constructor(todoRepository: ITodoRepository) {
//     this.todoRepository = todoRepository;
//   }

//   filterByTags() {

//   }
// }

