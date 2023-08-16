import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContadorService } from '../service/contador.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input() message!: string[];
  @Output() messageEvent = new EventEmitter<string>();
  isSendMessage!: boolean;
  isBackgroundColor = 'blue';

  constructor(private contadorService : ContadorService){
    console.log(this.message);
  }

  sendMessage(){  
    this.messageEvent.emit('Passando valor para pai');
    this.contadorService.addUser('Matheus');
    this.contadorService.addUser('Anderson');
  }
}
