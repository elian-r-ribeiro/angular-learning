import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  alunos = [
    "Elian",
    "Pedro",
    "Ricardo",
  ]
  title = 'projeto1';
  message! : string;

  receiveMessage(event: string){
    this.message = event;
  }
}
