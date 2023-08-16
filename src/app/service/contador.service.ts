import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  public array: string[] = [];
  
  constructor() { }

  public addUser(user : string){
    return this.array.push(user);
  }

  public removeUser(user : string){}

  public getUsers(){
    return this.array;
  }
}
