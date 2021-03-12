import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { TodoService } from 'src/app/services/todo.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input()
  private todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  private removeAllTodos(): void{
    this.todoService.removeAllTodos()
  }

}
