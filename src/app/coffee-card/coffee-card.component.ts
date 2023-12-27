import { Component, Input, OnInit } from '@angular/core';
import { CoffeeModel } from '../models/coffee.model';

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss'],
})
export class CoffeeCardComponent implements OnInit {
  @Input() coffee: CoffeeModel;

  constructor() {}

  ngOnInit(): void {}
}
