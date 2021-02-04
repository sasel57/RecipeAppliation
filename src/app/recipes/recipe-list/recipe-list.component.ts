import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: Recipe [] = [
  new Recipe('Test recipe title', 'Recipe test description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
]; // array wiith a couple of Recipe objects
  constructor() { }

  ngOnInit() {
  }

}
