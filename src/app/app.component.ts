import { Component } from '@angular/core';

// "decorator"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* testing things out
  name: string = 'Brad';

  constructor(){
    //console.log(123)
    //this.name = 'Ted';
    this.changeName('Greg');
  }

  changeName(name:string):void{ // use :void if the method doesn't return anything
    this.name = name;
  } */
}
