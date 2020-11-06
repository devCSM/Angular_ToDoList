import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // create an input property called "todo" of type "Todo"
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoSerice:TodoService) { }
  // constructor() { }

  ngOnInit() {
  }

  // set dynamic classes
  // this is what applies the "is-complete" css,
  // if "todo.completed" = true
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    
    return classes;

  }


  onToggle(todo){
    
    // console.log('toggle');

    // toggle in UI
    todo.completed = !todo.completed
    // toggle on server; returns an "observable"???
    this.todoSerice.toggleCompleted(todo).subscribe(todo => console.log(todo));
    
  }
  
  onDelete(todo){
    this.deleteTodo.emit(todo);
  }




}
