import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoffeeModel } from './models/coffee.model';

@Injectable({
  providedIn: 'root',
})
export class CoffeService {
  constructor(private http: HttpClient) {}

  public getCoffeeList(): Observable<CoffeeModel[]> {
    return this.http.get<CoffeeModel[]>(
      'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
    );
  }
}
