import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  private todoText: string;
  userText = new FormControl(); 

  constructor(private todoService: TodoService) { 
    this.todoText = '';
  }

  ngOnInit() {
  }
  private addTodo(): void{
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }

  showError() {
    setTimeout(() => ("Start with a letter, please"), 5000);
  }

}
