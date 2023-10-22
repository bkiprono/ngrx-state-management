import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({
    todo: new FormControl('', [Validators.required])
  });
  todos: string[] | null = null;
  constructor(private readonly todoService: TodoService) { }

  async ngOnInit(): Promise<void> {
    this.todos = await this.todoService.getTodo() as unknown as string[];
    console.log(this.todos);

  }

  createTodo() {
    console.log(this.todoForm.value.todo);
    if (!this.todoForm.valid) {
      return;
    }
    this.todoService.setTodo(this.todoForm.value.todo);
  }

}
