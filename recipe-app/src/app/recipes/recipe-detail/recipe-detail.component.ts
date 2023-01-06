import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements AfterViewInit, OnChanges {
  @Input() recipe: Recipe;
  //user = { name: 'Bhuvi' };

  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.recipe);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
