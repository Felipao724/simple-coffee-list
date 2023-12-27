import { Component, OnInit } from '@angular/core';
import { CoffeService } from './coffe.service';
import { CoffeeModel } from './models/coffee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'coffee-list';
  allCoffeesSelected = true;
  coffees: CoffeeModel[];
  constructor(private coffeeService: CoffeService) {}

  ngOnInit(): void {
    this.getCoffees();
  }

  getCoffees() {
    this.coffeeService.getCoffeeList().subscribe((resp) => {
      this.coffees = resp;
      this.allCoffeesSelected = true;
    });
  }

  availableCoffees() {
    this.coffees = this.coffees?.filter((c) => c.available);
    this.allCoffeesSelected = false;
  }
}
