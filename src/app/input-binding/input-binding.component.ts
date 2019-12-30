import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() name: string;
  @Input('othername') lastName: string;
  @Input() age: number;

  clients: Client [];

  constructor() {
    this.clients = [
      {id: 1, name: "Bod", age: 22},
      {id: 2, name: "Ana", age: 22},
      {id: 3, name: "John", age: 22},
      {id: 4, name: "Maria", age: 22},
    ];
  }

  ngOnInit() {
  }

}
