import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  constructor() {}
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'test desc',
      'https://assets.vogue.in/photos/5e9d6eca28845e0008c7ec70/1:1/w_640,c_limit/kadhi%20pakoda.jpg'
    ),
    new Recipe(
      'Paneer Tikka',
      'This is Punjabi dish...',
      'https://assets.vogue.in/photos/5e9d6eca28845e0008c7ec70/1:1/w_640,c_limit/kadhi%20pakoda.jpg'
    ),
    new Recipe(
      'Shahi Panner',
      'This is Shahi panner muglai...',
      'https://assets.vogue.in/photos/5e9d6eca28845e0008c7ec70/1:1/w_640,c_limit/kadhi%20pakoda.jpg'
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
