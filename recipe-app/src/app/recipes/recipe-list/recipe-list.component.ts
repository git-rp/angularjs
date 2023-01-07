import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'A test recipe',
  //     'test desc',
  //     'https://assets.vogue.in/photos/5e9d6eca28845e0008c7ec70/1:1/w_640,c_limit/kadhi%20pakoda.jpg'
  //   ),
  //   new Recipe(
  //     'Paneer Tikka',
  //     'This is Punjabi dish...',
  //     'https://assets.vogue.in/photos/5e9d6eca28845e0008c7ec70/1:1/w_640,c_limit/kadhi%20pakoda.jpg'
  //   ),
  //   new Recipe(
  //     'Shahi Panner',
  //     'This is Shahi panner muglai...',
  //     'https://assets.vogue.in/photos/5e9d6eca28845e0008c7ec70/1:1/w_640,c_limit/kadhi%20pakoda.jpg'
  //   ),
  // ];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe: Recipe) {
  //   console.log('List recipe :' + recipe.name);
  //   this.recipeWasSelected.emit(recipe);
  // }
}
