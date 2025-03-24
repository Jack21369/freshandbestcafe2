import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuComponent } from '../menu/menu.component';
import { LocationComponent } from '../location/location.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, MenuComponent, LocationComponent, ReviewsComponent, OrderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
