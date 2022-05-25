import { Injectable } from '@angular/core';
import { filter, from, isEmpty, map, Observable, of, tap } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: Item[] = [{
    available: true,
    name: 'Keyboard',
    price: 100,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: true,
    name: 'Mouse',
    price: 80,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: false,
    name: 'Printer',
    price: 150,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: true,
    name: 'Monitor',
    price: 300,
    utilities: ['delete', 'modify', 'quickview']
  },{
    available: true,
    name: 'Keyboard',
    price: 100,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: true,
    name: 'Mouse',
    price: 80,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: false,
    name: 'Printer',
    price: 150,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: true,
    name: 'Monitor',
    price: 300,
    utilities: ['delete', 'modify', 'quickview']
  },{
    available: true,
    name: 'Keyboard',
    price: 100,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: true,
    name: 'Mouse',
    price: 80,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: false,
    name: 'Printer',
    price: 150,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: true,
    name: 'Monitor',
    price: 300,
    utilities: ['delete', 'modify', 'quickview']
  },{
    available: true,
    name: 'Keyboard',
    price: 100,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: true,
    name: 'Mouse',
    price: 80,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: false,
    name: 'Printer',
    price: 150,
    utilities: ['delete', 'modify', 'quickview']
  }, {
    available: true,
    name: 'Monitor',
    price: 300,
    utilities: ['delete', 'modify', 'quickview']
  }];

  constructor() { }

  getItemList(search: string = ''): Observable<Item[]>{
    return of(this.items).pipe(
      map(item=> item.filter(el=> el.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase())> -1))
    )
  }
}
