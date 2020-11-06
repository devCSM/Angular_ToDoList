import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// EventEmitter and Output are required to "emitt upwards". We are
// drying to pass data from this component "up" to the to-do component 

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  // define the output used in the event emitter
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  
  title:string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }
    // this is where we are emtting this component upward
    this.addTodo.emit(todo);
  }

  
}
