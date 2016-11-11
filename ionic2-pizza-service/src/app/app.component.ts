import { Component } from '@angular/core';
import { OrderComponent } from '../pages/order/order.component';


@Component({
  templateUrl: './app.component.html'
})
export class PizzaAppComponent {
  rootPage: any = OrderComponent;
}
