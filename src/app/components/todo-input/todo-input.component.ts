import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { Task } from 'src/app/classes/task';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-todo-input',
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({  opacity: 1 }),
            animate('5s ease-out', 
                    style({  opacity: 0 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 0 }),
            animate('5s ease-in', 
                    style({  opacity: 1 }))
          ]
        )
      ]
    )
  ],
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
  
})
export class TodoInputComponent implements OnInit {
  taskForm: FormGroup;
  task: Task = new Task();
  private todoText: string;
  userText = new FormControl(); 

  constructor(private todoService: TodoService, private fb: FormBuilder) { 
    this.todoText = '';
  }

  ngOnInit() {
    this.taskForm = this.fb.group({
      newTodo: ['', [Validators.required, Validators.maxLength(300), Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]],
      addedTodo: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }
  private addTodo(): void{
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }

}
