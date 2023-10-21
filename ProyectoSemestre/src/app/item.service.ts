import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  public item : any[] = [
    {
      id:'1',
      name:'pelota',
      tipo:'juguete',
      imageURL:''
    }
  ]


  constructor() { }
  
}
