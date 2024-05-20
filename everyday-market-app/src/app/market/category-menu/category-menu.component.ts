import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {
  categories = ['Electronics', 'Books', 'Clothing', 'Home & Kitchen'];

  constructor() { }

  ngOnInit(): void { }
}
