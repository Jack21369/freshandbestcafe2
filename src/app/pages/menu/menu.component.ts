import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MenuService, MenuCategory } from '../../shared/services/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CategoryComponent
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuCategories: MenuCategory[];

  constructor(private menuService: MenuService) {
    this.menuCategories = this.menuService.getMenuCategories()
      .sort((a, b) => a.items.length - b.items.length);
  }
}
