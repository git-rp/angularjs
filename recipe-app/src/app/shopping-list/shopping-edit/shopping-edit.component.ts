import {
  Component,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameDataInput') name12: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('nameInput') nameUser: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService) {}
  onAddItem() {
    alert('onAddeItem::' + this.name12);
    const ingName = this.name12.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    alert('onAddeItem::' + ingName + ingAmount);
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);

    // this.ingredientAdded.emit(newIngredient);
  }
  onTest() {
    alert('onTest::' + this.nameUser.nativeElement.value);
  }
}
