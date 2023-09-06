import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public parametro!: number;
  constructor(private router: ActivatedRoute){
    this.parametro = this.router.snapshot.params["id"];
    console.log(this.parametro);
  }
}
