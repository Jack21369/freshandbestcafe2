import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCategory } from '../../../shared/services/menu.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html'
})
export class CategoryComponent {
  @Input() category!: MenuCategory;
}
