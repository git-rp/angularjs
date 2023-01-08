import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  // ingredients: Ingredient[] = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Orange', 10),
  //   new Ingredient('Tomato', 3),
  // ];
  constructor(private shoppingListService: ShoppingListService) {}
  // onIngredientAdded(ingredient: Ingredient): void {
  //   this.ingredients.push(ingredient);
  // }
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredient();
  }
}
