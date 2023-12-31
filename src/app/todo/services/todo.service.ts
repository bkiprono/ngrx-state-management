import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  async getTodo() {
    const res = await localStorage.getItem('todo');
    if (res == null) {
      return [];
    }

    return JSON.parse(res);
  }

  async setTodo(todo: string) {
    let currentTodo: any = await this.getTodo() || [];
    currentTodo.push(todo);
    const data = JSON.stringify(currentTodo);
    await localStorage.setItem('todo', data);
    return await this.getTodo();
  }
}
