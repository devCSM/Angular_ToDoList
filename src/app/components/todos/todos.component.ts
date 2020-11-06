import { Component, OnInit } from '@angular/core';

// import the definition ("model") of a Todo
import { Todo } from  '../../models/Todo';

// bring in todos "service"
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  // declare the array "todos" of type "Todo"
  todos:Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      //console.log('test');
      // This is just text for git commit testing
    });
    
  }

  deleteTodo(todo:Todo)
  {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

}
